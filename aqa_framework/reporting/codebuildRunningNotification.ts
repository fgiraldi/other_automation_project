import { getSecretsStoreValues } from '../config/env';
var axios = require('axios');
var data = JSON.stringify({
    type: 'message',
    attachments: [
        {
            contentType: 'application/vnd.microsoft.card.adaptive',
            contentUrl: null,
            content: {
                $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
                type: 'AdaptiveCard',
                version: '1.2',
                body: [
                    {
                        type: 'TextBlock',
                        text: '🚨❗ **Automation is Running on Jenkins!** ❗🚨',
                    },
                    {
                        type: 'TextBlock',
                        text:
                            'Please halt all deployments. Automation is currently running.',
                    },
                    {
                        type: 'TextBlock',
                        text:
                            '[Check the process here.](https://build.it.getyardstick.com/job/aqa-automation/lastBuild/)',
                    },
                ],
            },
        },
    ],
});
export default class reportToTeams {
    public async getApiUrl() {
        return await getSecretsStoreValues().then(res => {
            return res.AUTOQA_TEAMS_CODEBUILD_STARTED_WEBHOOK;
        });
    }
    public sendResultsToTeams = async () => {
        var axios = require('axios');
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
}

const api = new reportToTeams();
api.sendResultsToTeams();
