export const PearsonCommonPage = {
    'Username Input': '#username',
    'Password Input': '#password',
    'Sign In Button': '#mainButton',
    'Skip Button': '//button[.="Skip for now"]',
    'Enter MathXL Button': '#BtnEnter',
    'Test Manager Link': '//a[.="Assignment Manager"]',
    'Create Assignment Dropdown': '//a[.="Create Assignment "]',
    'Create Test Link': '//a[.="Create Test"]',
    'Exam Name Input': '//input[contains(@id, "txtName")]',
    'Next Button': '#imgBtnNext',
    'Chapter Dropdown': '#DropDownListChapter',
    'Real Number System': '//option[contains(text(), "Real Number System")]', // 1. The Real Number System
    'First Questions Checkbox':
        '(//ul[@id="ulAvailable"]//input[@type="checkbox"])[1]',
    'Homework and Tests': '//a[@title="Homework and Tests"]',
    'Course Home': '//a[@title="Course Home"]',
    'Add Button': '#lnkGenAdd',
    'Exam Mode Dropdown':
        '//select[contains(@id, "ctl00_ctl00_InsideForm_MasterContent_DropDownListLockdownAndProctoring")]', // Require ProctorU Review+
    'Customize ProctorU Settings Link':
        '//a[contains(@id, "ctl00_ctl00_InsideForm_MasterContent_LinkCustomizeProctorUSettings")]',
    'ProcU Member Course': '//span[contains(text(), "ProcU Member Course")]',
    'Low Preset Radio': '//div[@id="levelLow"]//input',
    'Medium Preset Radio': '//div[@id="levelMedium"]//input',
    'High Preset Radio': '//div[@id="levelHigh"]//input',
    'Save Settings Button': '#ImgBtnUpdate',
    'Time Limit Checkbox': '//input[contains(@id, "chkTimelimit")]',
    'Time Limit Input': '//input[contains(@id, "txtTimeLimit")]',
    'Save Button': '#ButtonSaveAssign',
    'Start Test Button':
        '//a[contains(., "Start Test") or contains(., "Finish the Test")][2]',
    'Current Assignments': '[class="accMeta-data-container flex-item"]',
    'List of Tests': 'table[id*=MasterContent] tr',
    'Test Name': 'th.assignmentNameColumn a',
    'Test Name Link': '[class^="accMeta-row"] a span.assignment-title',
    'Exam List': '//table[contains(@id, "gridAssignments")]//tr',
    'Actions Dropdown': '#SelectedAction',
    'Edit Link':
        '//button[@aria-expanded="true"]/following-sibling::ul//a[.="Edit..."]',
    'Require ProctorU Record+':
        '//label[contains(text(),"Require ProctorU Record+")]',
    'Outer Frame': '//iframe[contains(@id, "MasterContent")]',
    'Inner Frame': 'iframe#activityFrame',
    'Answer Radio': '(//input[@type="radio"])[1]',
    'Submit Button': '#xl_dijit-bootstrap_Button_8',
    'Confirm Submit Button':
        '//div[@class="xlDialogButtonContainer"]//button[.="Submit Quiz"]',
    'Test Summary Header':
        '//h2[@id="PageHeaderTitle" and contains(.,"Test Summary")]',
    'Remind Me Later': '//*[contains(text(), "Remind me later")]',
};
