import AWS from 'aws-sdk';
import { GetObjectRequest, ClientConfiguration } from 'aws-sdk/clients/s3';
import { writeFile, existsSync } from 'fs';
AWS.config.region = 'us-east-1';

AWS.config.getCredentials(err => {
    if (err) {
        console.log(err.stack);
    } else {
        getFromS3(AWS.config);
    }
});

function getFromS3(conf?: ClientConfiguration) {
    console.log('-- Retrieving History from S3 --');
    const s3 = new AWS.S3(conf);
    const objReq: GetObjectRequest = {
        Bucket: 'qa-procotoru-testresults',
        Key: 'Reports/allure-history.zip',
    };

    s3.getObject(objReq).send((err, data) => {
        if (err) {
            console.log(err);
        } else {
            writeFile(__dirname + '/../history.zip', data.Body, err => {
                if (err) throw err;
                else console.log('-- History download complete --');
            });
        }
    });
}
