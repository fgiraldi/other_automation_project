import TestrailApiClient from 'testrail-api';
import {
    Feature_Result,
    Case_Result,
    Scenario_Result,
} from '../types/interface';
import { readdirSync } from 'fs';
import { resolve as resolvePath } from 'path';
import { getSecretsStoreValues } from '../config/env';

export default class TestRail {
    private _client: TestrailApiClient;
    private _config = {
        run: {
            assignedto_id: 56,
            project_id: 2,
            suite_id: 9,
            milestone_id: undefined,
            include_all: false,
            description: '',
        },
        tag_matcher: /^@C([0-9]*)$/,
    };
    private _runId: number;
    private _invalidCaseIds: number[] = [];

    constructor() {}

    private async _init(): Promise<TestrailApiClient> {
        console.log('TestRailInt: - initializing -');
        return await getSecretsStoreValues().then((res) => {
            return (this._client = new TestrailApiClient({
                host: 'https://' + res.AQA_TESTRAIL_HOST,
                user: res.AQA_TESTRAIL_USER,
                password: res.AQA_TESTRAIL_PASSWORD,
            }));
        });
    }

    public startRun = async (results: {
        [key: string]: Feature_Result[];
    }): Promise<void | {
        RunUrl: string;
        InvalidCaseIds: string | number[];
        PassedPercentage: number;
        PassedCount: number;
        RetestCount: number;
    }> => {
        console.log('TestRailInt: Starting run...');
        await this._init();
        const aggregatedCases = this.aggregateCases(
            this.getCaseResults(this.formatResults(results)).map(
                this.cleanErrorMessage
            )
        );
        return (
            this.verifyCaseIds(aggregatedCases.concat([]))
                // @ts-ignore
                .then((cases: Case_Result[]) =>
                    this.reportCaseResultsToTestRail(cases)
                )
                .then(() => this._client.getRun(this._runId))
                .then((r) => {
                    return {
                        RunUrl: r.body.url,
                        InvalidCaseIds:
                            this._invalidCaseIds || 'No Invalid Cases.',
                        PassedCount: r.body.passed_count,
                        RetestCount: r.body.retest_count,
                        PassedPercentage:
                            (r.body.passed_count /
                                (r.body.passed_count + r.body.retest_count)) *
                            100,
                    };
                })
                .then((j) => {
                    console.log(j.RunUrl);
                    console.log(j.PassedPercentage);
                    return this.sendResultsToTeams(
                        j.RunUrl,
                        j.PassedCount,
                        j.RetestCount,
                        j.PassedPercentage
                    );
                })
                .catch((e) => {
                    if (e) throw e;
                })
        );
    };
    public async getApiUrl() {
        return await getSecretsStoreValues().then((res) => {
            return res.AUTOQA_TEAMS_WEBHOOK_URL;
        });
    }
    private sendResultsToTeams = async (
        runURL: string,
        numPassed: number,
        numRetest: number,
        percentagePassed: number
    ) => {
        var axios = require('axios');
        var data = JSON.stringify({
            type: 'message',
            attachments: [
                {
                    contentType: 'application/vnd.microsoft.card.adaptive',
                    contentUrl: null,
                    content: {
                        $schema:
                            'http://adaptivecards.io/schemas/adaptive-card.json',
                        type: 'AdaptiveCard',
                        version: '1.2',
                        body: [
                            {
                                type: 'TextBlock',
                                text: '**UI Tests**',
                            },
                            {
                                type: 'TextBlock',
                                text:
                                    'Run URL : [' +
                                    runURL +
                                    '](' +
                                    runURL +
                                    ')',
                            },
                            {
                                type: 'TextBlock',
                                text: 'Passed Percentage: ' + percentagePassed,
                            },
                            {
                                type: 'TextBlock',
                                text: 'Passed Cases: ' + numPassed,
                            },
                            {
                                type: 'TextBlock',
                                text: 'Retest Cases: ' + numRetest,
                            },
                            {
                                type: 'TextBlock',
                                text: '**Notes:** \n 1. Fix largest test case # features first \n 2. Implement fixes on a feature by feature basis \n 3. Test fixes to nodes before moving on',
                            },
                        ],
                    },
                },
            ],
        });
        var config = {
            method: 'post',
            url: await this.getApiUrl(),
            headers: { 'Content-Type': 'application/json' },
            data: data,
        };

        async function axiosTest() {
            const response = await axios(config);
            return response.data;
        }
        return axiosTest();
    };

    private reportCaseResultsToTestRail = (cases: Case_Result[]) => {
        console.log('TestRailInt: - reporting test results to TestRail -');
        return this.addRun(cases.concat([]).map((c) => c.case_id))
            .then((res) => (this._runId = res['body'].id))
            .then(() =>
                this._client
                    .addResultsForCases(
                        this._runId,
                        cases.map(
                            ({
                                status_id,
                                case_id,
                                scenarios,
                            }): TestrailApiClient.INewTestResult => {
                                return {
                                    case_id,
                                    assignedto_id:
                                        this._config.run.assignedto_id,
                                    comment:
                                        '# Automated Scenarios: #\n' +
                                        scenarios,
                                    defects: '',
                                    status_id: status_id,
                                };
                            }
                        )
                    )
                    .catch((e) => {
                        if (e) console.log(e);
                    })
            )
            .catch((e) =>
                e ? console.log(JSON.stringify(e, undefined, 2)) : undefined
            );
    };

    private verifyCaseIds = (aggregatedCases: Case_Result[]) => {
        console.log('TestRailInt: - verifying case IDs -');
        return this._client
            .getCases(this._config.run.project_id, {
                suite_id: this._config.run.suite_id,
            })
            .then((r) => {
                return aggregatedCases.filter((ac) => {
                    const caseIsValid = true;
                    //const caseIsValid = r.body.find(vc => vc.id == ac.case_id);
                    if (!caseIsValid) {
                        this._invalidCaseIds.push(ac.case_id);
                    }
                    return caseIsValid;
                });
            })
            .catch((e) => {
                if (e) {
                    console.log(e);
                }
            });
    };

    private addRun = (case_ids: number[]) => {
        console.log('TestRailInt: - adding run -');
        return this._client
            .addRun(this._config.run.project_id, {
                name: `[AUTOMATION] UI Tests - ${this.getDate(new Date())}`,
                suite_id: this._config.run.suite_id,
                milestone_id: this._config.run.milestone_id,
                include_all: this._config.run.include_all,
                description: this._config.run.description,
                case_ids: case_ids,
                assignedto_id: this._config.run.assignedto_id,
            })
            .catch((e) => {
                if (e) throw e;
            });
    };

    private getDate = (date: Date): string => {
        return date.toLocaleTimeString('en-US', {
            timeZone: 'America/Chicago',
            year: 'numeric',
            month: 'short',
            weekday: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
    };

    private aggregateCases = (cases: Case_Result[]): Case_Result[] => {
        console.log('TestRailInt: - aggregating cases -');
        let caseResults: Case_Result[] = [];
        cases.map(this.parseDefects).forEach((_case) => {
            const case_index = caseResults.findIndex(
                (c) => c.case_id == _case.case_id
            );
            if (case_index >= 0) {
                const alreadyFailed = caseResults[case_index].status_id > 1;
                caseResults[case_index].scenarios =
                    caseResults[case_index].scenarios + '\n' + _case.scenarios;
                caseResults[case_index].status_id = alreadyFailed
                    ? caseResults[case_index].status_id
                    : _case.status_id;
            } else caseResults.push(_case);
        });
        return caseResults;
    };

    private cleanErrorMessage = (_case: Case_Result): Case_Result => {
        return {
            case_id: _case.case_id,
            comment: _case.comment,
            scenarios: _case.scenarios
                .split('\n')
                .filter(
                    (msg) =>
                        msg.startsWith('Error') ||
                        msg.startsWith('AssertionError')
                )
                .join(''),
            status_id: _case.status_id,
            failed_at_step: _case.failed_at_step,
        };
    };

    private getCaseResults = (scenarios: Scenario_Result[]): Case_Result[] => {
        console.log('TestRailInt: - getting case results -');
        let caseResults: Case_Result[] = [];
        scenarios.forEach((scenario) => {
            caseResults = caseResults.concat(
                scenario.tags.map((tag) =>
                    this.getCase(tag, {
                        name: scenario.name,
                        result: scenario.result,
                    })
                )
            );
        });
        return caseResults.filter((c) => c.case_id);
    };

    private getCase = (
        tag: { name: string },
        scenario: { name: string; result: Scenario_Result['result'] }
    ): Case_Result => {
        const isCase = tag.name.match(this._config.tag_matcher);
        return {
            case_id: isCase ? Number(tag.name.replace(/@(C|c)/, '')) : null,
            comment: scenario.name,
            scenarios: isCase ? scenario.result.error_message || '' : '',
            status_id: this.parseStatus(scenario.result.status == 'passed'),
            failed_at_step: scenario.result.failed_at_step,
        };
    };

    private parseStatus = (passed: boolean) => {
        if (passed) {
            return 1;
        } else if (!passed) {
            return 4;
        }
    };

    private formatResults = (results: {
        [key: string]: Feature_Result[];
    }): Scenario_Result[] => {
        const flatFeatures: Feature_Result[] = this.flattenArray(
            Object.keys(results).map((k) => results[k])
        );
        return this.flattenArray(
            flatFeatures.map((f) => {
                return f.elements.map((e) => {
                    e.name = `${f.name}: ${e.name}`;
                    e.tags = e.tags.concat(f.tags);
                    e.result = this.getScenarioResult(e);
                    return e;
                });
            })
        );
    };

    private getScenarioResult = (scenario: Scenario_Result) => {
        return scenario.steps.every((step) => step.result.status == 'passed')
            ? {
                  status: 'passed',
                  error_message: '',
                  failed_at_step: '',
              }
            : this.getFailedStep(scenario);
    };

    private getFailedStep = (scenario: Scenario_Result) => {
        const failedStep = scenario.steps.find(
            (step) => step.result.status != 'passed'
        );
        return {
            status: 'failed',
            error_message: failedStep.result.error_message,
            failed_at_step: failedStep.keyword + ' ' + failedStep.name,
        };
    };

    private flattenArray = (arr: Array<any>): Array<any> => {
        return [].concat.apply([], arr);
    };

    private parseDefects(_case: Case_Result) {
        return {
            case_id: _case.case_id,
            comment: _case.comment,
            scenarios:
                '- **' +
                _case.comment +
                '** - *' +
                (!!_case.failed_at_step ? _case.failed_at_step : 'PASSED') +
                '* - ' +
                _case.scenarios,
            status_id: _case.status_id,
        };
    }
}

const testrail = new TestRail();
let resultsJson = {};
readdirSync(resolvePath(__dirname, '../reports/')).forEach(
    (fileName, index) => {
        resultsJson[index] = require(
            resolvePath(__dirname, '../reports/' + fileName)
        );
    }
);
if (Object.keys(resultsJson).length) {
    testrail
        .startRun(resultsJson)
        .then(console.log)
        .catch((e) => {
            if (e) console.log(JSON.stringify(e, undefined, 2));
        });
} else {
    console.log('No results found. Exiting.');
    process.exit(1);
}
