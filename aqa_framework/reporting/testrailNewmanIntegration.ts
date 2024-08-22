import TestRail from '@dlenroc/testrail';
import fs from 'fs';
import JSONStream from 'JSONStream';
import { getSecretsStoreValues } from '../config/env';
const commandLineArgs = require('command-line-args');
const options = commandLineArgs([
    {
        name: 'collection_type',
        alias: 'c',
        type: String,
        defaultValue: 'DOCS',
    },
    {
        name: 'file_path',
        alias: 'f',
        type: String,
        defaultValue: 'results.json',
    },
]);

// Parsing command line arguments
const mappedArguments = {
    DOCS: {
        projectId: 2,
        suiteId: 439,
    },
    DEFECTS: {
        projectId: 2,
        suiteId: 9,
    },
}
const collectionType = options['collection_type'];
const projectId = mappedArguments[collectionType]['projectId'];
const suiteId = mappedArguments[collectionType]['suiteId'];
const filePath = options['file_path'];
export default class TestRailAPI {
    private _client: TestRail;
    private _config = {
        run: {
            assignedto_id: 56,
            project_id: projectId,
            suite_id: suiteId,
            milestone_id: undefined,
            include_all: false,
            description: '',
        },
        tag_matcher: /^@C([0-9]*)$/,
    };
    private _runId: number;
    private _runURL: string;
    private _invalidCaseIds: number[] = [];

    constructor() {}

    private async _init(): Promise<TestRail> {
        return await getSecretsStoreValues().then((res) => {
            return (this._client = new TestRail({
                host: 'https://' + res.AQA_TESTRAIL_HOST,
                username: res.AQA_TESTRAIL_USER,
                password: res.AQA_TESTRAIL_PASSWORD,
            }));
        });
    }

    // Getter for _runId
    public get runId(): number {
        return this._runId;
    }

    // Getter for _runURL
    public get runURL(): string {
        return this._runURL;
    }

    public async createRun(caseIds: number[]): Promise<TestRail.Run> {
        await this._init();
        console.log(`Creating API test run (${collectionType}) in Testrail..`);
        const runData: TestRail.AddRun = {
            suite_id: this._config.run.suite_id,
            name: `[AUTOMATION] API Tests ${collectionType} ${new Date().toISOString()}`,
            include_all: this._config.run.include_all,
            description: this._config.run.description,
            milestone_id: this._config.run.milestone_id,
            assignedto_id: this._config.run.assignedto_id,
            case_ids: caseIds
        };

        const response = await this._client.addRun(this._config.run.project_id, runData);
        this._runId = response.id;
        this._runURL = response.url;

        return response;
    }

    public async addResultForCase(runId: number, caseId: number, result: TestRail.AddResult) {
        await this._client.addResultForCase(runId, caseId, result);
    }

    public async addResultsForCases(runId: number, results: TestRail.AddResultsForCases) {
        await this._client.addResultsForCases(runId, results);
    }
}

const testRail = new TestRailAPI();

class TestCaseResultSet extends Set<TestRail.AddResultForCase> {
    // Override the add method
    add(testCaseResult: TestRail.AddResultForCase): this {
        // Check if there's already an item with the same caseId
        for (let item of this) {
            if (item.case_id === testCaseResult.case_id) {
                // If there's a match, don't add the new item
                return this;
            }
        }
        // If no match was found, add the new item
        super.add(testCaseResult);
        return this;
    }

    caseIDs(): number[] {
        let caseIDsList: number[] = [];
        for (let item of this) {
            if (item.case_id) {
                caseIDsList.push(item.case_id);
            }
        }
        return caseIDsList;
    }

    resultsAsAddResultsForCases(): TestRail.AddResultsForCases {
        let newTestResults: TestRail.AddResultsForCases = {
            results: [...this]
        };
        return newTestResults;
    }
}

async function parseResults(filePath: string): Promise<TestCaseResultSet> {
    return new Promise((resolve, reject) => {
        const testCaseResults = new TestCaseResultSet();
        const stream = fs.createReadStream(filePath, { encoding: 'utf-8' })
            .pipe(JSONStream.parse('results.tests.*'));

        stream.on('data', (test: any) => {
            const match = test.name.match(/@C(\d+)/);
            if (match) {
                const caseId = parseInt(match[1], 10);
                const status = test.status == 'failed' ? 5 : 1;
                const response = test.message || ''; // Capture the response if there's an error
                testCaseResults.add({ case_id: caseId, status_id: status, comment: response });
            }
        });

        stream.on('end', () => resolve(testCaseResults));
        stream.on('error', (err) => reject(err));
    });
}

async function reportResults() {
    const testResults = await parseResults(filePath);
    let caseIds = testResults.caseIDs();
    console.log('Case IDs to be reported:', caseIds);
    await testRail.createRun(caseIds);
    console.time('API Results reported successfully');
    testRail.addResultsForCases(testRail.runId, testResults.resultsAsAddResultsForCases());
    console.timeEnd('API Results reported successfully');
    console.log(`TestRail Run link: ${testRail.runURL}`);
}

reportResults()
    .catch((error) => console.error('Error reporting results:', error.message.error));
