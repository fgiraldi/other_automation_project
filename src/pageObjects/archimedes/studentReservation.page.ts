export const StudentReservationPage = {
    url: '/students/',
    'Schedule New Session Link': 'a[href="/students/exams/select"]',
    'My Sessions': '//a[.="My Sessions"]',
    'My Orders': '//a[.="My Orders"]',
    'Exam Rules Timer Link':
        "//div[contains(@class,'panel-countdown')]//a[contains(text(), 'Check your exam rules')]",
    'Timer Options Dropdown':
        "//div[contains(@class,'js-row-panel-countdown')]//button[contains(@class,'dropdown-toggle')]",
    'Guidelines Modal title':
        '//div[@class="modal-body"]//div[contains(text(), "Guidelines")]',
    'Rules Modal title':
        '//div[@class="modal-body"]//div[contains(text(), "Rules")]',
    'Window Size Allowed Modal Text':
        "//div[@class='modal-dialog']//li[contains(text(), 'Your browser window will be resizable during the exam')]",
    'Browser Tabs Allowed Modal Text':
        "//div[@class='modal-dialog']//li[contains(text(), 'You will be allowed to open new browser tabs during the exam')]",
    'Allowed Resources Modal title':
        '//div[@class="modal-body"]//div[contains(text(), "Allowed Resources")]',
    'Accommodations Modal title':
        '//div[@class="modal-body"]//div[contains(text(), "Accommodations")]',
    'Breaks Modal title':
        '//div[@class="modal-body"]//div[contains(text(), "Breaks")]',
    'Other Resources Modal title':
        '//div[@class="modal-body"]//div[contains(text(), "Other Resources")]',
    'Balance': '//li[contains(text(),"Balance")]',

    'Guidelines Modal text': "//div[@class='panel-heading']",
    'Modal Close Button': "//button[@data-type='ExamRulesClose']",
    'Modal x Button': 'button.close[data-dismiss="modal"]',
    'Exam Cancel Button': '(//a[contains(text(), "Cancel")][@class="btn btn-danger"])[2]',
    'Cancel Session Submit Button': '#cancel-modal > div > div > div.modal-body > form > div:nth-child(8) > div > span > input',

    StudentName: '#nav-user-dropdown',
    'Start Session Button': '//a[contains(text(),"Start Session")]',
    'Table Start Session Button':
        '//*[@id="content"]/div/div[4]/div[2]/div[1]/table/tbody/tr[2]/td[4]/a[2]',
    'Static Automation Reservation (Auto)':
        '//div[contains(text(), "Static Automation Canvas Auto For Test Taker")]/parent::td/parent::tr[@class]',
    'Static Automation Auto for Test Taker [Medium pre-set]':
        '//div[contains(text(), "Static Automation Auto for Test Taker  [Medium pre-set]")]/parent::td/parent::tr[@class]',
    'Scheduled Exam (Start Session)': '//tr[@data-enable-reschedule="false"]',
    'Latest Reservation Row':
        '//table[contains(@class, "js-exams-table")]//tr[contains(@class, "js-exam-row")][last()]',
    'Dropdown Menu': 'a#nav-user-dropdown',
    'Account Settings Link': '//a[.="Account Settings"]',
    'My Cart Link': "//span[contains(text(), 'My Cart')]",
    'Get Started': 'button.next-button.proctoru-ui-btn',

    'Logout Alias': '//a[contains(text(), "Logout Alias")]',
    'Exam Rules Check Link': '(//a[@data-type="ExamRulesCheck"])[1]',
    'URL Redirection Service': '//footer//span[contains(text(),"URL Redirection Service")]',

    // GB Prechecks
    'Download Chat': '//button[@class="btn btn-precheck-primary precheck-button "]',
    'Next': '//button[contains(text(), "Next")]',
    'Skip': '//button[contains(text(), "Skip")]',
    'Next Resource': '//button[contains(text(), "Next Resource")]',
    'Begin Recording': '//button[contains(text(), "Begin Recording")]',
    'Begin Recording and Continue': '//button[contains(text(), "Begin Recording and Continue")]',
    'Begin and Continue': '//button[contains(text(), "Continue")]',
    'GB Get Started': '//button[contains(text(), "Get Started")]',
    'Take photo': '//button[contains(text(), "Take photo")]',
    'Take Photo': '//button[contains(text(), "Take Photo")]',
    'Retake': '//button[contains(text(), "Retake")]',
    'Back': '//button[contains(text(), "Back")]',
    'Begin Exam': '//button[contains(text(), "Begin Exam")]',
    'Launch Guided Room Scan': '//button[contains(text(), "Launch Guided Room Scan")]',
    'Begin scan': '//button[contains(text(), "Begin scan")]',
    'Scan Again': '//button[contains(text(), "Scan Again")]',
    'Capture Workspace': '//button[contains(text(), "Capture Workspace")]',
    'Capture workspace': '//button[contains(text(), "Capture workspace")]',
    'Capture Left Wall': '//button[contains(text(), "Capture Left Wall")]',
    'Capture Back Wall': '//button[contains(text(), "Capture Back Wall")]',
    'Capture Right Wall': '//button[contains(text(), "Capture Right Wall")]',
    'Capture Below Workspace': '//button[contains(text(), "Capture Below Workspace")]',
    'Capture Wall': '//button[contains(text(), "Capture Wall")]',
    'Capture wall': '//button[contains(text(), "Capture wall")]',
    'Capture Computer': '//button[contains(text(), "Capture Computer")]',
    'My Space is Secure': '//button[contains(text(), "My Space is Secure")]',
    'Devices are out of reach': '//button[contains(text(), "Devices are out of reach")]',
    'Resources Selected': '//button[contains(text(), "Resources Selected")]',
    'Textbook Resource Checkbox': '//p[contains(text(), "Textbook")]/following-sibling::input',
};
