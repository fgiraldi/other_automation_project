import AWS from 'aws-sdk';
import { PutObjectRequest, ClientConfiguration } from 'aws-sdk/clients/s3';
import { readFileSync, existsSync, createWriteStream } from 'fs';
import archiver from 'archiver';
AWS.config.region = 'us-east-1';

AWS.config.getCredentials(err => {
    if (err) {
        console.log(err.stack);
    } else {
        sendHistoryToS3(AWS.config);
    }
});

function sendHistoryToS3(conf: ClientConfiguration) {
    console.log('-- Sending History to S3 --');
    return getHistoryToSend().then(history => {
        const s3 = new AWS.S3(conf);
        const putObj: PutObjectRequest = {
            Bucket: 'qa-procotoru-testresults',
            Key: 'Reports/allure-history.zip',
            Body: history,
        };
        !!existsSync(__dirname + '/../history.zip')
            ? s3.putObject(putObj).send((err, data) => {
                  if (err) {
                      console.log(err);
                  } else {
                      console.log('Successfully uploaded history.zip.', data);
                  }
              })
            : console.log('No history file located. Aborting...');
    });
}

function getHistoryToSend() {
    if (
        !(
            existsSync(__dirname + '/../allure-report') &&
            existsSync(__dirname + '/../allure-report/history')
        )
    ) {
        throw 'No report found. Aborting.';
    } else {
        return zipDir(
            __dirname + '/../allure-report/history',
            __dirname + '/../history.zip'
        ).then(() => readFileSync(__dirname + '/../history.zip'));
    }
}

function zipDir(source, out) {
    const archive = archiver('zip', { zlib: { level: 9 } });
    const stream = createWriteStream(out);

    return new Promise((res, rej) => {
        archive
            .directory(source, false)
            .on('error', err => rej(err))
            .pipe(stream);

        stream.on('close', () => res());
        archive.finalize();
    });
}
