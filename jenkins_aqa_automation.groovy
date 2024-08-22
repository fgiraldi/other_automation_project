def listOfIDs = ""
def listOfIDsForAPI = ""
def branchName = ""
def matchedFilesList = ""

pipeline {
    agent {label 'aqa-jenkins-node'}
    parameters {
        gitParameter name: 'TEST_BRANCH', branch: '', branchFilter: '.*', defaultValue: 'origin/playwright-conversion', description: 'Branch to use during automation', quickFilterEnabled: true, selectedValue: 'DEFAULT', sortMode: 'DESCENDING', tagFilter: '*', type: 'GitParameterDefinition'
        string name: 'TEST_FOLDER', defaultValue: 'src/features', description: "Folder where to look for feature files, i.e. 'src/features/archimedes' (No need to escape slashes)", trim: true
        string name: 'TEST_TAG', defaultValue: '@regression', description: "Tag for filtering tests (optional)", trim: true
        booleanParam name: 'INCLUDE_API_TESTS', defaultValue: false, description: '''Should the API tests be executed in this build?'''
        booleanParam name: 'USE_WARMUP_JOB', description: '''Should the warmup job be invoked previous to launch the suite?\n This executes the NodeJS commands that precede the test run (a.k.a. \'npm install\')'''
        booleanParam name: 'UPDATE_GUARDIAN_BROWSER', defaultValue: false, description: '''Should Guardian Browser be updated in each node in the warmup?\n This will execute a script that deletes the installed version then download and install the version specified in GUARDIAN_BROWSER_DOWNLOAD_URL.\n Make sure to enable warmup since this is executed inside that job.'''
        string name: 'GUARDIAN_BROWSER_DOWNLOAD_URL', defaultValue: 'https://staging-archimedes-secure-browser-artifacts.s3.amazonaws.com/latest/windows/guardian-browser-x64.exe', description: '''Public URL to download Guardian Browser used when activating UPDATE_GUARDIAN_BROWSER.\n Make sure to not change the default value if you want to update the version to latest.'''
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
        stage('Pre Cleanup') {
            steps {
                // Clean up previously generated reports
                dir('allure-results') {
                    deleteDir()
                }
                dir('allure-report') {
                    deleteDir()
                }
                dir('cucumber-reports') {
                    deleteDir()
                }
                dir('reports') {
                    deleteDir()
                }
                fileOperations([folderCreateOperation('reports')])
            }
        }
        stage("Git checkout") {
            steps {
                echo "***--->>> Checking out ${env.branchName} branch... <<<---***"
                // We need to checkout the branch so that we get all feature files in the orchestrating node
                checkout scmGit(branches: [[name: "${env.branchName}"]], extensions: [], userRemoteConfigs: [[credentialsId: 'aqa-github', url: 'https://github.com/ProctorU/proctoru-test-automation']])
            }
        }
        stage('Check if warmup job was invoked') {
            when { expression { return params.USE_WARMUP_JOB } }
            steps {
                script {
                    // Load utilities file
                    utilities = load 'jenkins_utils.groovy'

                    // Get the current node where the pipeline is triggered
                    def currentNode = env.NODE_NAME

                    // Get all active nodes with the specific label, excluding the current node
                    def labeledNodes = []
                    jenkins.model.Jenkins.get().computers.each { c ->
                        if (c.node.labelString.contains('aqa-jenkins-node') && c.node.nodeName != currentNode && c.isOnline()) {
                            labeledNodes.add(c.node.selfLabel.name)
                        }
                    }

                    // Create a map to hold the parallel steps
                    def parallelSteps = [:]

                    // Prepare this node for future use
                    nodeName = currentNode
                    parallelSteps["Warm up ${nodeName}"] = {
                        stage("Warm up ${nodeName}") {
                            utilities.warmUp("aqa-automation", env.branchName)
                            utilities.warmUp("aqa-ui-test", env.branchName)
                            utilities.warmUp("aqa-api-test", env.branchName)
                            if(params.UPDATE_GUARDIAN_BROWSER){
                                utilities.updateGuardianBrowser(params.GUARDIAN_BROWSER_DOWNLOAD_URL, nodeName);
                            }
                        }
                    }

                    // Iterate through each labeled node and create a parallel step
                    labeledNodes.each { nodeName ->
                        parallelSteps["Warm up ${nodeName}"] = {
                            stage("Warm up ${nodeName}") {
                                build job: 'aqa-warmup',
                                parameters: [
                                    string(name: 'TEST_BRANCH', value: "${env.branchName}"),
                                    string(name: 'AQA_NODE_NAME', value: "${nodeName}"),
                                    booleanParam(name: 'UPDATE_GUARDIAN_BROWSER', value: "${params.UPDATE_GUARDIAN_BROWSER}"),
                                    string(name: 'GUARDIAN_BROWSER_DOWNLOAD_URL', value: "${params.GUARDIAN_BROWSER_DOWNLOAD_URL}")
                                ]
                            }
                        }
                    }
                    parallel parallelSteps
                }
            }
        }
        stage('Notify Teams automation has started') {
            steps {
                withCredentials([aws(accessKeyVariable: 'AWS_ACCESS_KEY_ID', credentialsId: 'aqa-aws', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY')]) {
                    bat """
                        set AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
                        set AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}
                        npm run reportRunningWebhook
                    """
                }
            }
        }
        stage('Run tests') {
            steps {
                script {
                    // Get a list of all files matching the "*.feature" criteria and return only relative paths
                    // Files are also filtered by TEST_TAG parameter
                    def getFilesScript = """Get-ChildItem -Path ${TEST_FOLDER} -File -Recurse -Include *.feature | ForEach-Object {
                        if ((Get-Content \$_.FullName) -match "${TEST_TAG}") {
                            \$relativePath = \$_.FullName -replace [regex]::Escape((Get-Location).Path + '\\'), ''
                            \$relativePath
                        }
                    }"""

                    // Define map of downstream builds for API tests
                    def downstreamBuildsAPI = []

                    def testItems = [:]

                    // Check for API tests
                    if (params.INCLUDE_API_TESTS) {
                        addAPITest(testItems, 'API Tests Docs', downstreamBuildsAPI, 'api_documentation_suite.postman_collection.json', 'DOCS')
                        addAPITest(testItems, 'API Tests Defects', downstreamBuildsAPI, 'api_defects_suite.postman_collection.json', 'DEFECTS')
                    }

                    def fileList = powershell(returnStdout: true, script: getFilesScript)
                    env.matchedFilesList = fileList

                    // Define map of downstream builds for UI tests
                    def downstreamBuilds = []

                    if (fileList != '') {
                        // Split the file list into an array
                        def featureFiles = fileList.trim().split('\n')
                        echo "Found these feature files: \n ${featureFiles}"

                        featureFiles.each{testName ->
                            addUITest(testItems, testName, downstreamBuilds)
                        }
                    } else {
                        echo "No matching feature files found"
                    }
                    if (testItems) {
                        parallel testItems
                    }
                    env.listOfIDs = downstreamBuilds
                    env.listOfIDsForAPI = downstreamBuildsAPI
                }
            }
        }
        stage('Generate Allure report') {
            when { expression { return params.INCLUDE_API_TESTS || env.matchedFilesList != ''} }
            steps {
                allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
            }
        }
        stage('Report to TestRail') {
            when { expression { return params.INCLUDE_API_TESTS || env.matchedFilesList != ''} }
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'SUCCESS') {
                    withCredentials([aws(accessKeyVariable: 'AWS_ACCESS_KEY_ID', credentialsId: 'aqa-aws', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY')]) {
                        bat """
                            set AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
                            set AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}
                            npm run reportToTestRail
                        """
                    }
                }
            }
        }
    }
    post {
        always {
            withCredentials([aws(accessKeyVariable: 'AWS_ACCESS_KEY_ID', credentialsId: 'aqa-aws', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY')]) {
                bat """
                    set AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
                    set AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}
                    npm run reportEndedWebhook
                """
            }
        }
    }
}

def addUITest(Map testItems, String testName, List downstreamBuilds) {
    testItems[testName] = {
        stage("Stage for ${testName}") {
            // Run test
            downstreamBuild = build job: 'aqa-ui-test',
                parameters: [
                    string(name: 'TEST_FILE_NAME', value: testName),
                    string(name: 'TEST_TAG', value: "${params.TEST_TAG}"),
                    string(name: 'TEST_BRANCH', value: "${params.TEST_BRANCH}"),
                    booleanParam(name: 'RUN_ISOLATED', value: false)
                ]
            buildID = downstreamBuild.rawBuild.id
            downstreamBuilds.add(buildID)

            // Retrieve artifacts
            try {
                // Copy allure results, all together since we can just stack them
                copyArtifacts(
                    projectName: 'aqa-ui-test',
                    selector: specific("${buildID}"),
                    filter: "allure-results/*.*",
                    includeBuildNumberInTargetPath: false
                )
            }
            catch(error) {
                echo "Error copying allure reports artifacts for build ID ${buildID}"
                echo "${error}"
            }

            try {
                // Copy cucumber report.
                // Since each one has the same name, we copy them in a different folder (cucumber-reports)
                // and prepend the build ID as part of the path
                copyArtifacts(
                    projectName: 'aqa-ui-test',
                    selector: specific("${buildID}"),
                    filter: "reports/*.json",
                    includeBuildNumberInTargetPath: true,
                    target: 'cucumber-reports',
                    flatten: true
                )
            }
            catch(error) {
                echo "Error copying cucumber reports artifacts for build ID ${buildID}"
                echo "${error}"
            }

            try {
                fileOperations([
                    fileCopyOperation(
                        excludes: '',
                        flattenFiles: true,
                        includes: "cucumber-reports/${buildID}/*.json",
                        renameFiles: true,
                        sourceCaptureExpression: '(.*\\\\)?([^\\\\]+?\\.\\w+)',
                        targetLocation: 'reports',
                        targetNameExpression: "${buildID}-\$2"
                    )
                ])
            }
            catch(error) {
                echo "Error during Cucumber Reports File Copy Operation for build ID ${buildID}"
                echo "${error}"
            }
        }
    }
}

def addAPITest(Map testItems, String stageName, List downstreamBuildsAPI, String collectionFileName, String collectionType) {
    testItems[stageName] = {
        stage("${stageName}") {
            downstreamBuild = build job: 'aqa-api-test',
                parameters: [
                    string(name: 'COLLECTION_FILE_NAME', value: collectionFileName),
                    string(name: 'TEST_BRANCH', value: "${params.TEST_BRANCH}"),
                    string(name: 'COLLECTION_TYPE', value: collectionType),
                    booleanParam(name: 'RUN_ISOLATED', value: false)
                ]
            buildID = downstreamBuild.rawBuild.id
            downstreamBuildsAPI.add(buildID)

            // Retrieve artifacts
            try {
                // Copy allure results, all together since we can just stack them
                copyArtifacts(
                    projectName: 'aqa-api-test',
                    selector: specific("${buildID}"),
                    filter: "allure-results/*.*",
                    includeBuildNumberInTargetPath: false
                )
            }
            catch(error) {
                echo "Error copying allure reports artifacts for build ID ${buildID}"
                echo "${error}"
            }
        }
    }
}