export const IncidentsPage = {
    url: '/incidents',
    'Search Box': '#search',
    'Exam Dropdown': 'input[id="exam"]',
    'Search Textbox': 'input[id="search"]',
    'Status Dropdown': '#status',
    Running: '#status > option:nth-child(6)',
    'Sessions Table':
        '#content > div.container > form > div.row > div > div > div > table > tbody > tr',
    'First Result Link':
        '.table.table-semibordered.table-hover.table-default tbody td a',
    'Session ID Link': 'td > a[href*="/reservations/"]',
    'Search Button': 'button[id="submit"]',
    'First Process Link':
        '//*[@id="content"]/div[2]/div/div/div[2]/div[2]/div/div/div/table/tbody/tr[1]/td[10]/a',
    'Reset Button': 'button[id="reset"]',
    'Start Processing': '//*[@id="process"]/div/a',
    'Not a Breach':
        'input[id="incident_report_center_incident_report_condition_rejected"]',
    'New X': "//li[@title='New']//span[contains(text(),'×')]",
    'Test Taker input': '//*[@id="testTaker"]',
    'Exam Name Input': '//*[@id="exam"]',
    'Reject Incidents': '//a[contains(text(), "Reject incident report")]',
    'Test Taker Name': '//*[@class="mb-0"]',
    'Session Status Column': '//tr//td[contains(text(), "Cancelled")]',
    'Institution Input':
        '//input[@aria-controls="select2-select2-institution-results"]',
    'Institution Search': '//span[@id="select2-select2-institution-container"]',
    'Institution Value': '//tr//td//a[contains(text(), "API University")]',
    'Edit Inicident Report Header':
        '//h1[contains(text(), "Edit Incident Report")]',
    'Process incident report':
        '//a[contains(text(), "Process incident report")]',
    'Update only': '//a[contains(text(), "Update only")]',
    'First Event Checkbox': '//input[@id="event_ids"]',
    'Inicident Report Header': '//h1[contains(text(), "Incident Report")]',
    'Internally Rejected Badge':
        "//div[@class='irc-user-card']//span[contains(text(), 'Internally Rejected')]",
    'Table Institution Elements': '//tbody//tr//td[6]',
    'Table Status Elements': '//tbody//tr//td[8]',
};
