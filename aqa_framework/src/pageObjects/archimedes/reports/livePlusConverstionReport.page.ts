export const LivePlusConversionReportPage = {
    url: '/internal/live-plus-migrations',
    Institution: 'select#institution',
    Status: 'select#status',
    'Search Button':
        "//form[@action='/internal/live-plus-migrations']//input[@value='Search']",
    'Results Table': '//table',
    'Table - Institution Name': '//tbody//td//a',
    'Table - Status': '//tbody//td[3]',
    'New Institution Dropdown': '#live_plus_migration_institution_id',
    'Submit Button': '//input[@value="Submit"]',
    'Alert Success Message': '//div[contains(@class,"alert-success")]',
};