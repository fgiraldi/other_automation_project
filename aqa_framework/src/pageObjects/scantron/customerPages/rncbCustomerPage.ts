export const rncbCustomerPage = {
    // Common page
    'Create Application':
        '//button[contains(@ng-click,"openApplicationTemplate(applicationTemplate")][1]',
    'Continue Application':
        '//div[@class="cms-applicationActions"]//button[contains(@ng-click,"openApplication")]',

    // Application Modal
    'No Retest for Success':
        '//div[contains(@class,"text-center")]//*[contains(@reject-value, "false")]//a[contains(@ng-click,"reject()")]',
    'Next Wizard Step': '//*[@class="wizard-next-prev"]',
    'Information Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"Information")]',
    'Demographics Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"Demographics")]',
    'Membership Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"Membership")]',
    'Experience 1 Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"Experience 1")]',
    'Experience 2 Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"Experience 2")]',
    'ADA Request Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"ADA Request")]',
    'Attestation Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"Attestation")]',
    'Testing Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"Testing")]',
    'Verify Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"Verify")]',
    'Discard Application': '//button[@title="Discard Application"]',
    'Save and Close Application':
        '//button[@title="Save and Close Application"]',

    // Demographic Fields
    'Preferred Home Address': '//input[@id="radDemoPreferredAddressHome"]',
    'Preferred Work Address': '//input[@id="radDemoPreferredAddressWork"]',
    'RN Number': '//input[@id="txtRNNumber"]',
    'RN Country Dropdown': '//div[@class="col-sm-8"]//select[@name="Country"]',
    'RN State Dropdown': '//div[@class="col-sm-8"]//select[@name="State"]',
    Country:
        '//div[@class="col-sm-8"]//cas-country-input//select[@id="country"]',
    State: '//div[@class="col-sm-8"]//select[@name="State"]',
    'Home Phone Field': '//input[contains(@ng-model, "txtHomePhone")]',
    'Address 1 Field': '//input[contains(@ng-model, "txtAddress1")]',
    'City Field': '//input[contains(@ng-model, "txtCity")]',
    'Email Field': '//input[contains(@ng-model, "emailAddress")]',
    'Work Phone Field': '//input[contains(@ng-model, "txtWorkPhone")]',
    'Zip Field': '//input[contains(@ng-model, "txtPostal")]',

    //Experience 1 Fields
    'Reference 1':
        '//cas-multi-radio[@name="Completion 1"]//i[@id="multi-radio-Within the five years preceding the examination, completion of two years of practice as a registered professional nurse in rehabilitation nursing"]',
    'CRRN Colleague':
        '//div[@ng-form="appCtrl.initialEligibilityForm"]//label[@for="multi-radio-a CRRN"]',
    'First Name': '//input[@id="txtReference1_FirstName"]',
    'Last Name': '//input[@id="txtReference1_LastName"]',
    Company: '//input[@id="txtReference1_CompanyName"]',
    Title: '//input[@id="txtReference1_Title"]',
    'Work Address': '//input[@id="txtReference1_WorkAddress"]',
    'Work Country': '//select[@id="txtReference1Country"]',
    'Work State': '//div[@class="col-sm-4"]//select[@id="txtReference1State"]',
    'Work City': '//div[@class="col-sm-4"]//input[@id="txtReference1_City"]',
    'Work Zip': '//div[@class="col-sm-4"]//input[@id="txtReference1_ZipCode"]',
    'Work Telephone':
        '//div[@class="col-sm-4"]//input[@id="txtReference1_TelephoneWork"]',
    'Work Email': '//div[@class="col-sm-4"]//input[@id="txtReference1_Email"]',

    //Experience 2 Fields
    'Reference 2':
        '//cas-multi-radio[@cas-name="radReference2Completion2"]//i[@id="multi-radio-Within the five years preceding the examination, completion of two years of practice as a registered professional nurse in rehabilitation nursing"]',
    'Second CRRN Colleague':
        '//div[@ng-form="appCtrl.initialEligibility2Form"]//label[@for="multi-radio-a CRRN"]',
    'Second First Name': '//input[@id="txtReference2_FirstName"]',
    'Second Last Name': '//input[@id="txtReference2_LastName"]',
    'Second Company': '//input[@id="txtReference2_CompanyName"]',
    'Second Title': '//input[@id="txtReference2_Title"]',
    'Second Work Address': '//input[@id="txtReference2_WorkAddress"]',
    'Second Work Country': '//select[@id="txtReference2_Country"]',
    'Second Work State': '//select[@id="txtReference2_State"]',
    'Second Work City':
        '//div[@class="col-sm-4"]//input[@id="txtReference2_City"]',
    'Second Work Zip':
        '//div[@class="col-sm-4"]//input[@id="txtReference2_ZipCode"]',
    'Second Work Telephone':
        '//div[@class="col-sm-4"]//input[@id="txtReference2_TelephoneWork"]',
    'Second Work Email':
        '//div[@class="col-sm-4"]//input[@id="txtReference2_Email"]',

    //ADA Request Fields
    'Reasonable Accommodations': '//a[@ng-click="reject()"]',

    // Attestation Fields
    'RNCB Policy Agree Checkbox': '//i[@id="multiselect-checkbox-1"]',

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

    // Verify Fields
};
