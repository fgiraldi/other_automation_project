import unzipper from 'unzipper';
import * as file_system from 'fs';

function unzip(pathToArchive: string, outputPath: string) {
    console.log('-- Unzipping History --');
    if (!file_system.existsSync(__dirname + '/../allure-results')) {
        console.log('Results folder not found. Creating directory.');
        file_system.mkdirSync(__dirname + '/../allure-results');
    }
    return file_system
        .createReadStream(pathToArchive)
        .pipe(unzipper.Extract({ path: outputPath }));
}

unzip(__dirname + '/../history.zip', __dirname + '/../allure-results/history');
