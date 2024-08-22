export const rdlCustomerPage = {
    // Common page
    'Create Application':
        '//button[contains(@ng-click,"openApplicationTemplate")]',
    'Active Tab': '//li[@class="active"]//span',
    'RDL Examination Tab': '//a[@title="RDL Examination"]',
    'Documents Tab': '//a[@title="Documents"]',
    'Logout Button': '#menuLogout',

    // RDL Examination Tab
    'My Testing Activities Header':
        '//div[@class="cms-header-title-container"][contains(text(),"My Testing Activities")]',
    'My Scores Header':
        '//div[@class="cms-header-title-container"][contains(text(),"My Scores")]',
    'Create Application Button':
        '//button[contains(@class,"btn-application-new")]',
    'View Application Button':
        '//div[@id="ngApplicationManagement"]//button[contains(text(),"View")]',
    'View Score Report Button':
        '//button[contains(text(),"View Score Report")]',
    'Retake Exam Button': '//button[contains(@ng-click,"Retake")]',

    // Application Modal
    'Application Modal': '//div[@modal-render="true"]',
    'Next Button': '//span[contains(@ng-click,"next()")]',
    'Previous Button': '//span[contains(@ng-click,"prev()")]',
    'Continue Button': '//button[contains(@ng-click,"payInvoice")]',
    'To Payment Button': '//button[@title="To Payment Application"]',
    'Begin Testing Button': '//a[contains(@href,"AuthenticateLaunch.aspx")]',
    'Close Application Button': '//button[@title="Close Application"]',
    // Demographics (Application Modal)
    'Home Phone Input': '//input[contains(@id,"txtHomePhone")]',
    'Work Phone Input': '//input[contains(@id,"txtWorkPhone")]',
    'Address 1 Input': '//input[contains(@id,"txtAddress1")]',
    'City Input': '//input[contains(@id,"txtCity")]',
    'State Dropdown': '//select[contains(@id,"state")]',
    'Postal Code Input': '//input[contains(@id,"txtPostal")]',
    // Language (Application Modal)
    'First Radio Button': '//input[contains(@name,"radLanguage")]',
    // Attestation (Application Modal)
    'Agree Attestation Checkbox': '//input[contains(@name,"chkAttestation")]',
    // Payment Screen
    'Discount Code Input': '//input[@name="form_discountCode"]',
    'Apply Discount Button': '//button[@ng-click="applyDiscountCode()"]',

    // Documents Tab
    'Resource and Study Guide - Flammable Refrigerants Link':
        '//a[contains(text(),"Resource and Study Guide - Flammable Refrigerants")]',
    'RDL Examination Documents Header':
        '//div[@class="cms-header-title-container"][contains(text(),"RDL Examination Documents")]',
    // Exam Taking Page
    'Time Remaining Label': '#lblTimeRemaining',
    'Submit Exam Button': '#btnSubmit',
    'Answer A Radio': '//input[@value="A"]',
    'Submit Warning Popup':
        '//div[@id="cancelSubmitPop"][contains(@style,"visible")]',
    'Confirm Submit Input': '#confSubmitInputBox',
    'Disabled Submit My Exam':
        '//div[contains(@class,"casSubmitButtonDisabled")]',
    'Submit Button (Panel)': '#submitButtonPanel',
};
