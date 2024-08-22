export const CommonMoodlePage = {
    url: '',
    username: '#username',
    password: '#password',
    'Log In': '#loginbtn',
    'Log out': '//button[contains(text(), "Log out")]',
    'AQA Course':
        "//span[contains(text(),'Moodle AQA')][2]",
    'Static Automation Course':
        "//span[contains(text(),'Static Automation Pool')][2]",
    'Moodle Previous AQA Course':
        "//span[@class='multiline'][contains(text(),'Moodle AQA')]",
    'Moodle Previous Static Automation Course':
        "//span[@class='multiline'][contains(text(),'Static Automation Pool')]",
    'Static Automation Exam':
        '//span[contains(text(), "Automated_Editable")]/parent::a',
    'My Courses':
        '//div[@class="primary-navigation"]//a[contains(text(),"My courses")]',
    'Static Exam for Student':
        '//span[contains(text(), "Static Moodle Exam for Test Taker")]/parent::a',
    'Edit Settings Link':
        '//ul[@role="menubar"]//a[contains(text(),"Settings")]',
    'Actions Gear': '#action-menu-toggle-3',
    'Turn Editing On Button':
        '//div[@id="usernavigation"]//*[contains(text(),"Edit mode")]',
    'Add Resource Link':
        "//li[@id='section-0']//button[contains(@class,'modchooser')][span[@class='activity-add-text']]",
    'Quiz Radio Button':
        "(//div[@role='menuitem']//a[contains(@title,'Quiz')])[1]",
    //'Save Question': '(//a[@class="flag_question"])[1]',
    'Add Button': 'div.submitbuttons input[value="Add"]',
    'Quiz Title': '#id_name',
    'Expand All': '.collapsible-actions a',
    'General Tab': '#id_general .ftoggler a',
    'Enable Time Limit Checkbox': '#id_timelimit_enabled',
    'Time Limit': '#id_timelimit_number',
    'Require Password': '//label[contains(text(), "Require password")]',
    // 'Save Question': '(//a[@class="flag_question"])[1]',
    'Password Input': '//*[@data-passwordunmaskid="id_quizpassword"]',
    'Quiz Password': '#id_quizpassword',
    'Open Quiz Checkbox': '#id_timeopen_enabled',
    'Close Quiz Checkbox': '#id_timeclose_enabled',
    'Open Quiz Day': '#id_timeopen_day',
    'Close Quiz Day': '#id_timeclose_day',
    'Open Month': '#id_timeopen_month',
    'Close Month': '#id_timeclose_month',
    Timing: '//a[@aria-controls="id_timingcontainer"]',
    'Open Calendar': '//a[@id="id_timeopen_calendar"]',
    'Closing Time': '//select[@id="id_timeclose_hour"]',
    'Extra Restrictions Tab': '#id_security .ftoggler a',
    'Timing Tab': '#id_timing .ftoggler a',
    'ProctorU Settings Tab': '#proctoru_settings_collapse .ftoggler a',
    'ProctorU Notifications Tab':
        '#proctoru_notifications_collapse .ftoggler a',
    'ProctorU Toggle': 'div.proctoru-switcher div.onoffswitch',
    'Save and display Button': '#id_submitbutton',
    'Stage Auto test': '//span[contains(text(), "Stage Auto test jay")]',
    'Attempt Quiz Now': '//button[contains(text(), "ttempt")]',
    'ProctorU Description': '//p[contains(text(), "You will need to download the Guardian browser for this exam.")]',
    'Session Type Dropdown': 'div.controls #session-type',
    'Auto Generated Password Toggle':
        '//div[contains(text(), "Auto generated password")]',
    'Start Exam Button': "//form[contains(@action, 'startattempt')]//button",
    'Start Attempt Button': '#id_submitbutton',
    'Answer Radio': '//input[contains(@id, "answertrue")]',
    'Finish Attempt Button': '//input[@value="Finish attempt ..."]',
    'Submit All Button': '//button[contains(text(),"Submit all and finish")]',
    'Confirm Submit Button': '//input[contains(@id, "uiconfirmyes")]',
    'Confirm Modal Button':
        "//div[@class='modal-content']//button[contains(text(),'Submit all and finish')]",
    'Finish Review': '//a[contains(text(), "Finish review")]',
    'Course Name Label': '.page-header-headings h1',
    'Description Area': '#id_introeditor_ifr',
    'Exam Link': '.aalink',
    'List Of Exams': 'ul.section.img-text > li',
    'Edit Quiz Button': '//button[contains(text(), "Edit quiz")]',
    'Add Menu Button': '//span[@class="add-menu"]',
    'Add Question To Quiz': '//a[contains(text(),"Add question")]',
    'a new question option': '//span[contains(text(),"a new question")]',
    'A New Question': 'a.cm-edit-action.addquestion.menu-action.add-menu',
    'Essay Radio Button': '#item_qtype_essay',
    'Add Question Button': 'input.submitbutton',
    'Question Name': 'input#id_name',
    'Question Text Frame': '#id_questiontext_ifr',
    'Question Text': '#tinymce p',
    'Save Changes Button': '//input[@value="Save changes"]',
    'Max Grade Field': '#inputmaxgrade',
    'Save Grades Button': 'input[value=Save]',
    'No Password Error': '#id_error_quizpassword',
    'Log In Link': 'span.login a',
    'Action Menu': '#action-menu-toggle-2',
    'Restore Menu link': '//a[contains(text(), "Restore")]',
    'Restore File link':
        '//td[contains(text(), "Automation_clean_latest")]/following-sibling::td[4]//a',
    'Enrollment Methods Dropdown': '#id_setting_root_enrolments',
    'Keep Current Roles Dropdown':
        '#id_setting_course_keep_roles_and_enrolments',
    'Keep Current Groups Dropdown':
        '#id_setting_course_keep_roles_and_enrolments',
    'Restore Continue': '//button[contains(text(), "Continue")]',
    'Delete Contents Radio':
        '//*[@id="region-main"]/div/div[2]/form[1]/div/div[2]/div/input',
    'Destination Continue':
        '//*[@id="region-main"]/div/div[2]/form[1]/div/div[3]/div/input',
    'Settings Next': '#id_submitbutton',
    'Schema Next': '#id_submitbutton',
    'Perform Restore': '#id_submitbutton',
    'Restore Confirmation': '//*[@id="region-main"]/div/div[3]/div[1]',
    'Complete Continue': '//button[contains(text(), "Continue")]',
    'Text iFrame': "//iframe[@id='id_introeditor_ifr']",
    
};
