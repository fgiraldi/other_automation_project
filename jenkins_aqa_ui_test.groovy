def branchName = ""

pipeline {
    agent {label 'aqa-jenkins-node'}
    options {
        copyArtifactPermission('aqa-*');
    }
    parameters {
        gitParameter name: 'TEST_BRANCH', branch: '', branchFilter: '.*', defaultValue: 'origin/playwright-conversion', description: 'Branch to use during automation', quickFilterEnabled: true, selectedValue: 'DEFAULT', sortMode: 'DESCENDING', tagFilter: '*', type: 'GitParameterDefinition'
        string name: 'TEST_FILE_NAME', defaultValue: '', description: "Feature file path to run. (i.e. 'src/features/archimedes/institution/login.feature')", trim: true
        string name: 'TEST_TAG', defaultValue: '', description: "Tag for filtering tests (optional)", trim: true
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
                    script {
                        env.test_tag = ""
                        if ("${params.TEST_TAG}" != "") {
                            env.test_tag = "--tags \"${params.TEST_TAG}\""
                        }
                    }
                    withCredentials([aws(accessKeyVariable: 'AWS_ACCESS_KEY_ID', credentialsId: 'aqa-aws', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY')]) {
                        bat """
                            set AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
                            set AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}
                            npx cucumber-js ${env.test_tag} ${params.TEST_FILE_NAME}
                        """
                    }
                }
            }
        }
        stage('Archive artifacts') {
            when { expression { return !params.RUN_ISOLATED } }
            steps {
                archiveArtifacts artifacts: 'allure-results/*.*, reports/*.json',
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
                    '''
                }
                catch(error) {
                    echo "Error deleting report folders ${error}"
                }
            }
        }
    }
}
