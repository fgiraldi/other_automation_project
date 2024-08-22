def branchName = ""

pipeline {
    agent {label 'aqa-jenkins-node'}
    options {
        copyArtifactPermission('aqa-*');
    }
    parameters {
        gitParameter name: 'TEST_BRANCH', branch: '', branchFilter: '.*', defaultValue: 'origin/playwright-conversion', description: 'Branch to use during automation', quickFilterEnabled: true, selectedValue: 'DEFAULT', sortMode: 'DESCENDING', tagFilter: '*', type: 'GitParameterDefinition'
        string name: 'COLLECTION_FILE_NAME', defaultValue: 'api_defects_suite.postman_collection.json', description: "Postman collection file path. (i.e. 'src/postman/proctorU_API_Regression_Docs.postman_collection.json')", trim: true
        string name: 'ENVIRONMENT_FILE_NAME', defaultValue: 'staging.postman_environment.json', description: "Postman env file path. (i.e. 'staging.postman_environment.json')", trim: true
        choice name: 'COLLECTION_TYPE', choices: ['DEFECTS', 'DOCS'], description: 'What type of collection is being used. This determines how the results are reported to TestRail'
        booleanParam name: 'RUN_ISOLATED', description: 'Check this when running isolated, as in no part of entire suite', defaultValue: true
    }

    stages {
        stage('Parse branch parameter') {
            steps {
                script {
                    def fullBranchName = "${params.TEST_BRANCH}"
                    env.branchName = fullBranchName -~ /^origin\//
                }
            }
        }
        stage("Git checkout") {
            steps {
                checkout scmGit(branches: [[name: "*/${env.branchName}"]], extensions: [], userRemoteConfigs: [[credentialsId: 'aqa-github', url: 'https://github.com/ProctorU/proctoru-test-automation']])
            }
        }
        stage('Pre Cleanup') {
            steps {
                script {
                    try {
                        // Clean up previously generated reports
                        bat '''
                        rmdir allure-results /S /Q
                        rmdir reports /S /Q
                        rmdir api_reports /S /Q
                        '''
                    }
                    catch(error) {
                        echo "Error deleting report folders ${error}"
                    }
                }
            }
        }
        stage('Run test') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'SUCCESS') {
                    withCredentials([aws(accessKeyVariable: 'AWS_ACCESS_KEY_ID', credentialsId: 'aqa-aws', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY')]) {
                        bat """
                            set AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
                            set AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}
                            call npm run api-tests -- -c ${params.COLLECTION_FILE_NAME} -e ${params.ENVIRONMENT_FILE_NAME}
                            call npm run reportAPIToTestRail -- -c ${params.COLLECTION_TYPE} -f api_reports/api_report.json
                        """
                    }
                }
            }
        }
        stage('Archive artifacts') {
            when { expression { return !params.RUN_ISOLATED } }
            steps {
                archiveArtifacts artifacts: 'allure-results/*.*, api_reports/api_report.json',
                   allowEmptyArchive: true,
                   onlyIfSuccessful: false
            }
        }
        stage('Generate Allure report') {
            when { expression { return params.RUN_ISOLATED } }
            steps {
                allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
            }
        }

    }
    post {
        always {
            script {
                try {
                    // Clean up previously generated reports
                    bat '''
                    rmdir allure-results /S /Q
                    rmdir reports /S /Q
                    rmdir api_reports /S /Q
                    '''
                }
                catch(error) {
                    echo "Error deleting report folders ${error}"
                }
            }
        }
    }
}
