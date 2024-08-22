export const triggersAndWebhooks = {
    url: '/triggers' || '/institutions/992/endpoints',

    /**
     * @Note Pre-checks
     */
    'Add New': '//a[contains(text(), "Add new")]',
    'Trigger Name': '#trigger_name',
    'Trigger Description': '#trigger_description',
    'Trigger Code': '#trigger_code',
    'Create Trigger': 'input[value="Create Trigger"]',
    'Last Trigger Name': '//tr[last()]/td[1]',
    'Last Trigger Description': '//tr[last()]/td[2]',
    'Last Trigger Edit': '//tr[last()]/td/a',
    'Update Trigger': 'input[value="Update Trigger"]',
    'Create Endpoint': 'input[value="Create Endpoint"]',
    'Update Endpoint': 'input[value="Update Endpoint"]',
    'Callback URL': '#endpoint_url',
    'application/json Radio': '#endpoint_content_type_applicationjson',
    Delete: '//a[contains(text(), "Delete")]',
    'Edit Webhook Header': '//h1[contains(text(),"Edit Webhook")]',
};
