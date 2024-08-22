import unzipper from 'unzipper';
import * as file_system from 'fs';

function unzip(pathToArchive: string, outputPath: string) {
    console.log('-- Unzipping Results --');
    if (file_system.existsSync(__dirname + '/../allure-results')) {
        const newResultsName = 'allure-results_' + Date.now().toString();
        console.log(
            '-- existing results found. Renaming existing to: ' +
                newResultsName +
                ` --\n( Use "allure generate ${newResultsName} --clean && allure open" to view previous results. )`
        );
        file_system.renameSync(
            __dirname + '/../allure-results',
            __dirname + '/../' + newResultsName
        );
    }
    return file_system
        .createReadStream(pathToArchive)
        .pipe(unzipper.Extract({ path: outputPath }));
}

unzip(__dirname + '/../results.zip', __dirname + '/../allure-results');
