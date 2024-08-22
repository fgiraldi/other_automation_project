export const nateCustomerPage = {
    // Common page
    'Create Application':
        '//button[contains(@ng-click,"openApplicationTemplate")]',
    'Continue Application':
        '//div[@class="cms-applicationActions"]//button[contains(@ng-click,"openApplication")]',
    'LOP Tab': '//a[@title="LOP"]',
    // Application Modal
    'Information Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"Information")]',
    'Next Wizard Step': '//*[@class="wizard-next-prev"]',
    'Demographics Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"Demographics")]',
    'Licensure Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"Licensure")]',
    'Request Accommodations Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"Request Accommodations")]',
    'Attestation Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"Attestation")]',
    'Verify Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"Verify")]',
    'Discard Application': '//button[@title="Discard Application"]',
    'Save and Close Application':
        '//button[@title="Save and Close Application"]',

    // Demographic Fields
    'Home Phone Field': '//input[contains(@ng-model, "txtHomePhone")]',
    'Address 1 Field': '//input[contains(@ng-model, "txtAddress1")]',
    'Country Dropdown': '//select[@name="Country"]',
    'City Field': '//input[contains(@ng-model, "txtCity")]',
    'Email Field': '//input[contains(@ng-model, "emailAddress")]',
    'Work Phone Field': '//input[contains(@ng-model, "txtWorkPhone")]',
    'State Dropdown': '//select[@name="State"]',
    'Zip Field': '//input[contains(@ng-model, "txtPostal")]',

    // Licensure Fields
    'Valid License No':
        '//cas-multi-radio[@cas-name="userHasValidLicense"]//label[contains(text(),"No")]',
    'DEA Registration No':
        '//cas-multi-radio[@cas-name="userHasValidLicense"]//label[contains(text(),"No")]',
    'Revoked Membership No':
        '//cas-multi-radio[@cas-name="userHasValidLicense"]//label[contains(text(),"No")]',
    'Convicted No':
        '//cas-multi-radio[@cas-name="userHasValidLicense"]//label[contains(text(),"No")]',
    'Malpractice No':
        '//cas-multi-radio[@cas-name="userHasValidLicense"]//label[contains(text(),"No")]',
    'Felony No':
        '//cas-multi-radio[@cas-name="userHasValidLicense"]//label[contains(text(),"No")]',
    'Answered No Textbox':
        '//textarea[contains(@ng-model, "txtLicenseExplain")]',

    //Exams Fields
    'AC Installation Checkbox':
        '//input[(@id="multiselect-checkbox-AC Installation")]',
    'AC Service Checkbox': '//input[(@id="multiselect-checkbox-AC Service")]',
    'Air Distribution Service':
        '//input[(@id="multiselect-checkbox-Air Distribution Service")]',
    'Air to Air Heat Pump':
        '//input[(@id="multiselect-checkbox-Air to Air Heat Pump Installation")]',

    // Attestation Fields
    'Agree Checkbox': '//*[contains(@id, "multiselect-checkbox-1")]',

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

    // Verify Fields
};
