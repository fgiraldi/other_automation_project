export const naifaCustomerPage = {
    // Common page
    'Create Application':
        '//button[contains(@ng-click,"openApplicationTemplate")]',
    'Continue Application':
        '//div[@class="cms-applicationActions"]//button[contains(@ng-click,"openApplication")]',

    // Application Modal
    'Information Wizard Step':
        '//div[@class="cas-wizard-tab"]//a[contains(text(),"Information")]',
    'Registry Wizard Step':
        '//div[@class="cas-wizard-tab"]//a[contains(text(),"Registry")]',
    'Demographics Wizard Step':
        '//div[@class="cas-wizard-tab"]//a[contains(text(),"Demographics")]',
    'Licensure Wizard Step':
        '//div[@class="cas-wizard-tab"]//a[contains(text(),"Licensure")]',
    'Eligibility Wizard Step':
        '//div[@class="cas-wizard-tab"]//a[contains(text(),"Eligibility")]',
    'Experience Wizard Step':
        '//div[@class="cas-wizard-tab"]//a[contains(text(),"Experience")]',
    'Accommodations Wizard Step':
        '//div[@class="cas-wizard-tab"]//a[contains(text(),"Accommodation")]',
    'Attestation Wizard Step':
        '//div[@class="cas-wizard-tab"]//a[contains(text(),"Attestation")]',
    'Window Wizard Step':
        '//div[@class="cas-wizard-tab"]//a[contains(text(),"Window")]',
    'Submit Wizard Step':
        '//div[@class="cas-wizard-tab"]//a[contains(text(),"Submit")]',

    // Information Fields

    // Registry Fields
    'Opt-Out radio':
        '//div[contains(@class, "registryOptInContainer")]//input[@ng-value="false"]',
    'Opt-In radio':
        '//div[contains(@class, "registryOptInContainer")]//input[@ng-value="true"]',

    // Demographics Fields
    'Office Phone Field': '//input[contains(@ng-model, "txtCompanyPhone")]',
    'Alternate Phone Field': '//input[contains(@ng-model, "txtOtherPhone")]',
    'Company Name Field': '//input[contains(@ng-model, "txtCompanyName")]',
    'Address Line 1 Field': '//input[contains(@ng-model, "txtAddress1")]',
    'City Field': '//input[contains(@ng-model, "txtCity")]',
    'Country Dropdown': '//select[@name="Country"]',
    'State Dropdown': '//select[@name="State"]',
    'Zip Code Field': '//cas-zipcode-input//input',

    // Licensure Fields
    'Jurisdiction of License Dropdown':
        '//select[contains(@ng-model, "licenseState")]',
    'License Type Field': '//input[contains(@ng-model, "txtLicenseType")]',
    'License Number Field': '//input[contains(@ng-model, "txtLicenseNumber")]',
    'License Year Datepicker':
        '//cas-ui-bootstrap-datepicker[contains(@ng-model, "licenseToSellYear")]',
    'Back Year Panel Button': '//button[@ng-click="move(-1)"]',
    'First Year Cell Button': '(//td[@role="gridcell"])[1]',
    'License Expiration Year Datepicker':
        '//cas-ui-bootstrap-datepicker[contains(@ng-model, "licenseExpirationDate")]',
    'Current Month Cell Button':
        '//td[@role="gridcell"]//button[@class="btn btn-default active"]',

    // Eligibility
    'Education 6000 Hours checkbox':
        '//input[@id="educationEligibilitySection"]',
    'Industry Designations checkbox':
        '//input[@id="industryDesignationEligibilitySection"]',
    '5 Years checkbox': '//input[@id="experienceEligibilitySection"]',

    // Experience Fields
    'Experience Country Dropdown':
        '//div[contains(@ng-repeat, "companyExperience")]//select[@name="Country"]',
    'Experience State Dropdown':
        '//div[contains(@ng-repeat, "companyExperience")]//select[@name="State"]',
    'Experience FullPart Time Dropdown':
        '//div[contains(@ng-repeat, "companyExperience")]//select[contains(@ng-model,"FullOrPartTime")]',
    'Experience Company Name Field':
        '//div[contains(@ng-repeat, "companyExperience")]//input[@id="companyName"]',
    'Experience Number of Hours Field':
        '//div[contains(@ng-repeat, "companyExperience")]//input[@id="numberOfHours"]',
    'Experience Start Date Datepicker':
        '//cas-ui-bootstrap-datepicker[contains(@ng-model, "companyStartDate")]',
    'Experience End Date Datepicker':
        '//cas-ui-bootstrap-datepicker[contains(@ng-model, "companyEndDate")]',
    'Experience City Field':
        '//div[contains(@ng-repeat, "companyExperience")]//input[@name="companyCity"]',

    // Accommodations Fields
    'ADA Yes Button':
        '//cas-toggle-choice-buttons[contains(@ng-model, "chkAdaRequest")]//a[contains(text(),"Yes")]',
    'ADA No Button':
        '//cas-toggle-choice-buttons[contains(@ng-model, "chkAdaRequest")]//a[contains(text(),"No")]',

    // Attestation Fields
    'Agree Checkbox': '#multiselect-checkbox-1',
    'I AGREE Field': '//input[contains(@ng-model,"agreeToAttestationText")]',

    // Submit Fields
    'NAIFA Member Yes Button':
        '//cas-toggle-choice-buttons[contains(@ng-model, "hasMembership")]//a[contains(text(),"Yes")]',
    'NAIFA Member No Button':
        '//cas-toggle-choice-buttons[contains(@ng-model, "hasMembership")]//a[contains(text(),"No")]',
    'To Payment Button': '//button[@title="To Payment Application"]',

    // Payment Fields
    'Pay by Credit Card Button':
        '//button[contains(text()," Pay by credit card")]',
    'Credit Card First Name Field':
        '//cas-payment-credit-card//input[@name="form_firstName"]',
    'Credit Card Last Name Field':
        '//cas-payment-credit-card//input[@name="form_lastName"]',
    'Credit Card Number Field':
        '//cas-payment-credit-card//input[@name="form_cardNumber"]',
    'Credit Card CVV Field':
        '//cas-payment-credit-card//input[@name="form_cVVCode"]',
    'Credit Card Exp Month Dropdown':
        '//cas-payment-credit-card//select[@name="form_expireMonth"]',
    'Credit Card Exp Year Dropdown':
        '//cas-payment-credit-card//select[@name="form_expireYear"]',
    'Credit Card Address Line 1 Field':
        '//cas-payment-credit-card//input[@name="form_streetAddress"]',
    'Credit Card City Field': '//cas-payment-credit-card//input[@title="City"]',
    'Credit Card Country Dropdown':
        '//cas-payment-credit-card//select[@name="Country"]',
    'Credit Card State Dropdown':
        '//cas-payment-credit-card//select[@name="State"]',
    'Credit Card Zipcode Field':
        '//cas-payment-credit-card//input[@name="zipcode"]',
    'Credit Card Next Button':
        '//div[@class="cms-footer-buttons"]//button[@title="Next"]',
    'Credit Card Back Button':
        '//div[@class="cms-footer-buttons"]//button[@title="Back"]',
    'Credit Card Submit Button':
        '//div[@class="cms-footer-buttons"]//button[@title="Submit"]',

    // General Fields
    'Discard Application': '//button[@title="Discard Application"]',
    'Save and Close Application':
        '//button[@title="Save and Close Application"]',
};
