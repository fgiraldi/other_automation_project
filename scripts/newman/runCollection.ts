import { NewmanRunOptions, run } from 'newman';
import { getSecretsStoreValues } from '../../config/env';
const commandLineArgs = require('command-line-args');
const options = commandLineArgs([
    {
        name: 'collection',
        alias: 'c',
        type: String,
        defaultValue: 'api_defects_suite.postman_collection.json',
    },
    {
        name: 'environment',
        alias: 'e',
        type: String,
        defaultValue: 'staging.postman_environment.json',
    },
]);
const collectionsDir = '../../src/postman/';
const collectionFile = `${collectionsDir}${options['collection']}`;
const environmentFile = `${collectionsDir}${options['environment']}`;


getSecretsStoreValues()
    .then(res => res.AQA_API_UNIVERSITY_KEY)
    .then(API_KEY => {
        const collection = require(collectionFile);
        const environment = require(environmentFile);
        const options: NewmanRunOptions = {
            collection,
            reporters: ['allure', 'ctrf-json'],
            reporter: {
                'ctrf-json': {
                    outputFile: 'api_report.json',
                    outputDir: 'api_reports'
                }
            },
            environment,
            envVar: [
                { key: 'API-Key', value: API_KEY },
                { key: "api-inst-token", value: API_KEY},
                { key: "cirrus-key", value: process.env.AQA_PLAYWRIGHT_CIRRUS_API_TOKEN},
                { key: "baseURL", value: process.env.BASE_URL},
            ],
            delayRequest: 1000,
        };

        run(options, err => {
            if (err) throw err;
            console.log('Collection done.');
        });
    });
