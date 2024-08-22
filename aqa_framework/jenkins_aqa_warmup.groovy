pipeline {
    agent {label params.AQA_NODE_NAME}
    parameters {
        string name: 'TEST_BRANCH', defaultValue: 'playwright-conversion', description: "Branch to use during warmup", trim: true
        string name: 'AQA_NODE_NAME', defaultValue: '', description: "Agent name to execute this", trim: true
        booleanParam name: 'UPDATE_GUARDIAN_BROWSER', defaultValue: false, description: '''Should Guardian Browser be updated in each node?\n This will execute a script that deletes the installed version then download and install the version specified in GUARDIAN_BROWSER_DOWNLOAD_URL.'''
        string name: 'GUARDIAN_BROWSER_DOWNLOAD_URL', defaultValue: 'https://staging-archimedes-secure-browser-artifacts.s3.amazonaws.com/latest/windows/guardian-browser-x64.exe', description: '''Public URL to download Guardian Browser used when activating UPDATE_GUARDIAN_BROWSER.\n Make sure to not change the default value if you want to update the version to latest.'''
    }

    stages {
        stage("Warm up") {
            steps {
                script {
                    utilities = load 'jenkins_utils.groovy'
                    utilities.warmUp("aqa-ui-test", params.TEST_BRANCH)
                    utilities.warmUp("aqa-api-test", params.TEST_BRANCH)
                    if(params.UPDATE_GUARDIAN_BROWSER){
                        utilities.updateGuardianBrowser(params.GUARDIAN_BROWSER_DOWNLOAD_URL, params.AQA_NODE_NAME);
                    }
                }
            }
        }
    }
}
