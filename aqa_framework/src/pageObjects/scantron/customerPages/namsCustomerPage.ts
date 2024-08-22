export const namsCustomerPage = {
    // Common page
    'Create Application':
        '//button[contains(@ng-click,"openApplicationTemplate")]',
    'Continue Application':
        '//div[@class="cms-applicationActions"]//button[contains(@ng-click,"openApplication")]',

    // Application Modal
    'Information Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"Information")]',
    'Demographics Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"Demographics")]',
    'Membership Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"Membership")]',
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

    // Membership Fields
    'Yes NAMS Member Button': '//a[@id="member-accept"]',
    'No NAMS Member Button': '//a[@id="member-reject"]',

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

    // Request Accommodations Fields
    'Yes Accommodations Button':
        '//cas-toggle-choice-buttons[contains(@ng-model, "chkAdaRequest")]//a[contains(text(),"Yes")]',
    'No Accommodations Button':
        '//cas-toggle-choice-buttons[contains(@ng-model, "chkAdaRequest")]//a[contains(text(),"No")]',

    // Attestation Fields
    'Handbook Agree Checkbox':
        '//input[contains(@ng-model, "agreeToAttestation1")]',
    'Verify Info Checkbox':
        '//input[contains(@ng-model, "agreeToAttestation2")]',

    // Verify Fields
};
