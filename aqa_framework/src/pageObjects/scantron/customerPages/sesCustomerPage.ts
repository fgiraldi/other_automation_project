export const sesCustomerPage = {
    // Common page
    'Create Application':
        '//button[contains(@ng-click,"openApplicationTemplate")]',
    'Continue Application':
        '//div[@class="cms-applicationActions"]//button[contains(@ng-click,"openApplication")]',

    // Application Modal
    'Demographics Wizard Step':
        '//cas-wizard-breadcrumbs//a[contains(text(),"Demographics")]',
    'Exam Selection Wizard Step':
        '//cas-wizard-breadcrumbs//a[contains(text(),"Exam Selection")]',
    'ADA Request Wizard Step':
        '//cas-wizard-breadcrumbs//a[contains(text(),"ADA Request")]',
    'Attestation Wizard Step':
        '//cas-wizard-breadcrumbs//a[contains(text(),"Attestation")]',
    'Submit Wizard Step':
        '//cas-wizard-breadcrumbs//a[contains(text(),"Submit")]',

    // Demographic Fields
    'Middle Initial Field': '//input[contains(@id, "txtMiddleName")]',
    'Company Field': '//input[contains(@name, "txtCompanyName")]',
    'State Dropdown': '//select[contains(@id, "state")]',
    'Address 1 Field': '//input[contains(@id, "txtAddress1")]',
    'City Field': '//input[contains(@id, "txtCity")]',
    'Zip Code Field': '//input[contains(@id, "txtPostal")]',
    'Primary Phone Field': '//input[contains(@id, "txtHomePhone")]',
    'State Postal Code': '//input[contains(@id, "txtMiddleName")]',
    'Alternate Email Field': '//input[contains(@id, "emailAddressAlternate")]',

    // Exam Selection Fields
    'Group Exam 1 Checkbox': '(//input[contains(@name, "chkExamRequest")])[1]',
    'Group Exam 2 Checkbox': '(//input[contains(@name, "chkExamRequest")])[2]',
    'Group Exam 3 Checkbox': '(//input[contains(@name, "chkExamRequest")])[3]',
    'Group Exam 4 Checkbox': '(//input[contains(@name, "chkExamRequest")])[4]',
    'Group Exam 5 Checkbox': '(//input[contains(@name, "chkExamRequest")])[5]',

    // ADA Request Fields
    'ADA No Checkbox': '(//input[contains(@name, "chkAdaRequest")])[1]',
    'ADA Yes Checkbox': '(//input[contains(@name, "chkAdaRequest")])[2]',

    // Attestation Fields
    'I agree Checkbox': '//input[contains(@name, "chkAttestation")]',

    // Submit Fields

    // Payment Fields
    'To Payment Button': '//button[@title="To Payment Application"]',
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
};
