def warmUp(String workFolder, String gitBranch) {
    dir("${env.WORKSPACE}\\..\\${workFolder}") {
        echo "***--->>> Checking out ${gitBranch} branch... <<<---***"
        checkout scmGit(branches: [[name: "*/${gitBranch}"]], extensions: [], userRemoteConfigs: [[credentialsId: 'aqa-github', url: 'https://github.com/ProctorU/proctoru-test-automation']])
        dir("node_modules") {
            deleteDir()
        }
        bat 'npm install'
        bat 'npx playwright install'
    }
}

def updateGuardianBrowser(String downloadUrl, String nodeName){
    echo "***--->>> Updating Guardian Browser in ${nodeName} <<<---***"
    powershell returnStatus: true, script: ".\\scripts\\jenkins\\install_guardian_browser.ps1 -myDownloadUrl \"${downloadUrl}\""
}

return this
