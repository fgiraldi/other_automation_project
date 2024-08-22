export const SessionReservationPage = {
    'View Appointment Button': '//a[contains(text(), "View appointment")]',
    'First Appointment': "(//div[@class='col-full col-header']//ul//a)[1]",
    'First Appointment Option': '//div[@class="dropdown-menu show"]//a[@class="dropdown-item"][1]',
    'Second Appointment Option':
        '//div[@class="dropdown-menu show"]//a[@class="dropdown-item"][2]',
    'Exam Dropdown': '#exam-select-dropdown',
    Timestamp: '//a[.="Timestamp"]',
    'Answer Timestamp':
        '//div[@id="timestamp"]//td[contains(text(), "QUESTION") or contains(text(), "Question")]',
    'Exam Started Timestamp':
        '//b[contains(text(), "Exam Started")]/parent::td/following-sibling::td[1]',
    'Exam Ended Timestamp':
        '//b[contains(text(), "Exam Ended")]/parent::td/following-sibling::td[1]',
    'Appointment Status Field': 'dd[data-behavior=appointment-status-dd]',
    'Exam General tab': '//a[@data-rb-event-key="Exam general"]',
    'Short Exam Duration event': "//div[@id='ShortExamDuration']",
    'Prechecks Completed Event': "//div[@id='PrechecksCompleted']",
    'Test Taker':
        '//*[@id="content"]/div[2]/div[2]/div[1]/div[1]/div[1]/div/div[2]/div[1]/div/p/a',
    'Test Taker input': '//*[@id="testTaker"]',
    'Exam Name Input': '//*[@id="exam"]',
    'Search Button': 'button[id="submit"]',
    'Session Header': '//h1[contains(text(), "Session")]',
    'Reschedule Button': '//a[contains(@href,"/reschedule/reservations")]',
    'Exam Time':
        '//dd[contains(text(),"PM")][contains(text(),"/")] | //dd[contains(text(),"AM")][contains(text(),"/")]',
    'Active Appointments': '//*[@class="btn btn-secondary dropdown-toggle"]',
    'Dropdown First Appointment':
        '//div[@class="dropdown-menu"]//a[contains(@href,"fulfillments/")][1]',
};
