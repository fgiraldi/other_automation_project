export const BlackboardCommonPage = {
    // iframe: '[title="Integration Test (ORG)"]',
    'Content iFrame': 'iframe.classic-learn-iframe',
    'Content Link': '//span[@title="Content"]',
    'Static Course': 'iframe[title="Static Automation Pool"]',
    'Integration Test Link': '#course-link-_40_1', // TODO: Automation Pool course hard-coded
    'Automation Pool Course Link':
        '//a[contains(text(), "1: Automation Pool")]',
    'Static Automation Pool Course Link':
        '//a[contains(text(), "2: Static Automation Pool")]',
    'Quiz Title': "//input[@name='name']",
    'Submit Button':
        '(//input[@id="bottom_Submit" or @id="bottom_Submit_copy_0"])[1]',
    Tests: '#assessmentId',
    'Create Button': '.genericButton',
    'Ok Button': '//a[contains(text(), "OK")]',
    'Courses Link': '//span[contains(text(), "Courses")]',
    username: '#user_id',
    password: '#password',
    'Sign In': '#entry-login',
    'Agree Button': '#agree_button',
    'Assessments Dropdown': '#evaMenu_actionButton',
    'Test Link': '//a[@id="content-handler-resource/x-bb-asmt-test-link"]',
    'Last Exam Dropdown': '[id*=contentListItem]:last-child  a.cmimg',
    'List of Exams':
        'form#content ul#content_listContainer li[id^="contentListItem"]',
    'Automated Editable Dropdown':
        "//a[contains(@title, 'Automated_Editable')]",
    'Exam Dropdown': 'div.item span.contextMenuContainer',
    'Edit Options Link': 'a[title="Edit the Test Options"]',
    'Edit Quiz Title': '#name',
    'Edit Submit Button': '#bottom_Submit_copy_0',
    'Duration Checkbox': '#fIsTimeLimit',
    'Duration Input': '#fMaxMinutes',
    'Password Input': '#fPassword',
    'Password Checkbox': '#fIsPassword',
    'Display After': '#dp_restrict_start_date',
    'Display Until': '#dp_restrict_end_date',
    'Content Link Description': 'textarea#descriptiontext',
    'Automated Test Taker Quiz':
        "//a[contains(@href,'launchAssessment.jsp')]//span[contains(text(),'Automated For Passing')]",
    'Passing For Automation Test Taker Quiz':
        "//a[contains(@href,'launchAssessment.jsp')]//span[contains(text(),'Passing For Automation')]",
    'Begin Button':
        '//input[@name = "bottom_Begin" or @name = "bottom_Continue"]',
    'Start New Submission': '//a[contains(text(), "Start New Submission")]',
    'Answer Radio': '//input[@value="true" and @type="radio"]',
    'Save Question Button': '#saveButton_1',
    'Submit Quiz Button': '//input[@name="bottom_Save and Submit"]',
    'Start New Submission Button':
        '//a[contains(text(), "Start New Submission")]',
    'Grade Center Link':
        'li[id="controlpanel.grade.center"] a[id="controlpanel.grade.center_groupExpanderLink"]',
    'Go To Grade Center Link': 'a[title="Go to Grade Center Page"]',
    'Tests Gradebook Link': '//a[@title="Tests"]',
    'Automation Test':
        '//div[@title="AUTOMATED FOR PASSING"]/ancestor::div[@class="gbDivWrapper"]', // TODO: hard-coded exam name
    'Automation Live+ Test':
        '//div[@title="Static Automated Live+ Test"]/ancestor::div[@class="gbDivWrapper"]', // TODO: hard-coded exam name
    'Grades Dropdown': '.contextMenuContainer',
    'Clear Attempts Link': '//a[@title="Clear Attempts for All Users"]',
    'Criteria Dropdown': '#selectOption',
    'Popup Submit Button': '#clearAttemptsFlyOutSubmit',
    'Sort Columns': '#sortItemsByButton',
    'Order By': '#sortDirectionLabel',
    'Points Possible': '//a[.="Points Possible"]',
    Descending: '//a[contains(text(), "Descending")]',
    'ProctorU Description': 'p.proctoru-no-extension',
    'Exam Password Input': '//input[@name="password"]',
    'Force Completion Checkbox': '#fIsForceComplete',
    'Passing For Automation Grade Dropdown':
        '//div[@title="Passing For Automation"]/ancestor::div[@class="gbDivWrapper"]/span/a',
    'Automated For Passing Grade Dropdown':
        '//div[@title="Automated For Passing"]/ancestor::div[@class="gbDivWrapper"]/span/a',
    'Description iFrame': '#descriptiontext_ifr',
    'Description Area': '//*[@id="tinymce"]//p[string-length(text()) > 0]',
    'Automated Live+ Test Grades Dropdown':
        '//div[@title="Static Automated Live+ Test"]/ancestor::div[@class="gbDivWrapper"]/span/a',
    'Events Test Grades Dropdown':
        '//div[@title="Events Test"]/ancestor::div[@class="gbDivWrapper"]/span/a',
    'Course Name Label': '#crumb_1',
    'No Password Error': '#proctoru-password-validation',
    'Content Dropdown': '//img[@alt="Content menu item options"]',
    'Content Dropdown Delete': '//a[@title="Delete"]',
    'Verify Delete Content': '//a[contains(text(), "Delete content")]',
    'Confirm Delete': '//a[contains(text(), "Delete")]',
    'Add Menu Item': '//img[@alt="Add Menu Item (Click to see options)"]',
    'Content Area': '//a[@id="addContentAreaButton"]',
    'Content Area Name': '//*[@id="addContentAreaName"]',
    'Available to All': '//*[@id="content_area_availability_ckbox"]',
    'Content Area Name Submit': '//*[@id="addContentAreaFormSubmit"]',
    Continue: '//input[@value="Continue"]',
    'Retake Assessments': '//a[@id="retakeAssessmentButtonId"]',
    Begin: '//input[@value="Begin"]',
    'Show Course Menu': '//a[@title="Show Course Menu"]',
    'Toast Message': 'toast-notification > toast-body > toast-content > div > p',
    'Quiz Title Error': 'div:not([id="error_box_template"]).error_box .error_text',
};
