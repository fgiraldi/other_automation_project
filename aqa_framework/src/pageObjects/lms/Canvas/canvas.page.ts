export const CanvasPage = {
    url: '',
    'Username Input': '#pseudonym_session_unique_id',
    'Password Input': '#pseudonym_session_password',
    'Sign In Button': '//*[@value="Log In"]',
    Course: '#DashboardCard_Container > div > div',
    Quizzes: "//li//a[contains(text(), 'Quizzes')]",
    Quiz: '#summary_quiz_49593 > div > div.ig-info > a',
    'New Quiz Button': "//button[@title='Add Quiz']",
    'Choose a Quiz Engine': '//span[@aria-label="Choose a Quiz Engine"]',
    'New Quizzes': '//label[@for="RadioInput_0"]',
    'Classic Quizzes': '//label[@for="RadioInput_1"]',
    'Submit Quiz Engine Selection Button': '//button[@type="submit"]',
    'Take The Quiz button': 'div.take_quiz_button a',
    'Profile Icon': '#global_nav_profile_link',
    Logout: '//span[contains(text(), "Logout")]',
    'List of Exams': 'ul#assignment-quizzes.ig-list.collectionViewItems > li',
    'Exam Dropdown': '.ig-title',
    'Edit Link': '.icon-edit',
    //Logout: '.fOyUs_bGBk',
    'Quiz Title': '#quiz_title',
    'Quiz Title Error': 'div:not([id="error_box_template"]).error_box .error_text',
    '[AQA Canvas] Integration Course Link':
        '//span[.="[AQA Canvas] Integration Course"]/ancestor::a',
    'Canvas 101': '//span[.="Canvas Manual Testing Stage"]/ancestor::a',
    'Static Automation Course Link':
        '//span[.="Static Automation"]/ancestor::a',
    'Static Auto Exam Link':
        '//a[contains(text(), "Canvas Auto For Test Taker")]',
    'Static Live+ Exam Link':
        '//a[contains(text(), "Canvas Live+ For Test Taker")]',
    'Exam Password Input': '#quiz_access_code',
    'Submit Password Button': '//button[@type="submit"]',
    'Answer Radio': '//div[contains(text(), "True")]/preceding::input[1]',
    'Save Question': '(//a[@class="flag_question"])[1]',
    'Submit Quiz Button': '#submit_quiz_button',
    'Ok Popup Button': '//div[@id="alert-modal-container"]//button',
    'Details Tab': '#ui-id-1',
    'Duration Input': '#quiz_time_limit',
    'Duration Checkbox': '#time_limit_option',
    'Duration Error Message': '#pu-timelimit-error-message',
    'Available from': 'div.from input',
    'Available from Error Message': 'div.from div.error_text',
    'Available Until': 'div.to input',
    'Available Until Error Message': 'div.to div.error_text',
    'Save Quiz Button': '//button[contains(@class, "custom_save_quiz_button")]',
    'Edit Quiz Button': '.quiz-edit-button',
    'Preview Quiz Button': '#preview_quiz_button',
    'Description iFrame': '#quiz_description_ifr',
    'Description Area': '//body[@id="tinymce"]//p[string-length(text()) > 0]',
    'Save-n-Publish Button': 'button[class*="custom_save_and_publish"]',
    'All Exams': '#assignment-quizzes .quiz',
    'Exam Link': '.ig-info .ig-title',
    'Term Dropdown': '#term_id',
    'Department Dropdown': '#department_id',
    'Allow Multiple Attempts Checkbox': '#multiple_attempts_option',
    'Search for Quiz': '#searchTerm',
    'Require an Access Code Checkbox': '#enable_quiz_access_code',
    'Non-proctored Exam Test':
        "//a[contains(text(),'Non-proctored Exam Test')]",
    'No Password Error':
        '//div[@class="error_text" and .="You must enter an access code"]',
    'ProctorU Settings': '//a[contains(text(), "ProctorU settings")]',
    'Browser Tabs': '#browser-tabs',
    'Browser Tabs Restricted':
        '//*[@id="browser-tabs"]//option[@value="restricted"]',
    'Browser Tabs Allowed': '//*[@id="browser-tabs"]//option[@value="allowed"]',
    'Allow Copy': '#copy-paste',
    'Allow Copy Restricted': '//*[@id="copy-paste"]//option[@value="disabled"]',
    'Window Sized': '#window-size-allowed',
    'Window Sized Fullscreen':
        '//*[@id="window-size-allowed"]//option[@value="fullscreen"]',
    'Application Lost': '#lost-focus',
    'Application Lost Restricted':
        '//*[@id="lost-focus"]//option[@value="restricted"]',
    'ProctorU Toggle':
        '//*[@id="toggle_container"]/div/div[1]/div[1]/div[2]/div/label/span[2]',
    'Require Access Code': '#quiz_access_code',
    'High Setting': '#high',
    'Medium Setting': '#medium',
    'Low Setting': '#low',
    'No permitted resources allowed': '#no_resources_allowed',
    Textbook: '#textbook',
    'Ebook Computer': '#ebook_computer',
    'Ebook Website': '#ebook_website',
    'Four Function': '#four_function_calculator',
    Scientific: '#scientific_calculator',
    Graphing: '#graphing_calculator',
    Computer_s: '#computer_calculator',
    Online: '#online_calculator',
    Financial: '#financial_calculator',
    'Handwritten Notes': '#handwritten_notes',
    'Note Cards': '#note_cards',
    'Printed Notes': '#printed_notes',
    'Formula Sheet': '#formula_sheet',
    'Notes PDF': '#pdf_notes',
    'Notes Word': '#word_notes',
    'Notes Powerpoint': '#powerpoint_notes',
    'Notes Excel': '#excel_notes',
    'Course Website': '#course_website',
    'Pre-approved Website': '#approved_website',
    'All Websites': '#all_websites',
    '1 Sheet': '#scratch1',
    '2 Sheet': '#scratch2',
    Whiteboard: '#whiteboard',
    Excel: '#excel',
    Word: '#word',
    Powerpoint: '#powerpoint',
    Notepad: '#notepad',
    Paint: '#paint',
    SPSS: '#spss',
    'Bathroom Breaks': '#bathroom_breaks',
    'Multiple sheets': '#scratch_more',
    'Static Automation Auto for Test Taker [Medium pre-set]':
        '//ul//*[contains(text(),"Static Automation Auto for Test Taker [Medium pre-set]" )]',
    'Toast Message': 'toast-notification > toast-body > toast-content > div > p',
    'Toast Message Button': 'toast-notification > toast-body > toast-content > div > p button',
    'Search People Input': '#TextInput_0',
    'People First Result Email': 'tr.rosterUser td:nth-of-type(3)',
};
