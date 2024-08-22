export const oncbCustomerPage = {
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
    'Location Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"Location")]',
    'Demographics Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"Demographics")]',
    'Membership Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"Membership")]',
    'Experience Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"Experience")]',
    'Licensure Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"Licensure")]',
    'Accommodations Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"Accommodations")]',
    'Survey Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"Survey")]',
    'Attestation Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"Attestation")]',
    'Verify Wizard Step':
        '//div[@class="wizard-steps"]//a[contains(text(),"Verify")]',
    'Discard Application': '//button[@title="Discard Application"]',
    'Save and Close Application':
        '//button[@title="Save and Close Application"]',

    //Location Fields
    'I reside in US or Canada': '//i[@id="multi-radio-1"]',

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
    'Yes ONCB Member Button': '//a[@id="member-accept"]',
    'No ONCB Member Button': '//a[@id="member-reject"]',

    //Experience Fields
    'I Agree': '//*[@id="experienceCheck"]',

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

    //Survery Fields
    'Question 1': '//select[@id="question-1"]',
    'Head Nurse/Unit Manager': '//option[@value="Head Nurse/Unit Manager"]',
    'Question 2': '//div[@id="question-2"]',
    'Pediatric/Congenital': '#question-2 > span > div > div > div:nth-child(1)',
    'Question 3': '//select[@id="question-3"]',
    Diploma: '//option[@value="Diploma"]',
    'Question 4': '//select[@id="question-4"]',
    '2-5 Years': '//option[@value="2-5 Years"]',
    'Question 5': '//select[@id="question-5"]',
    'Less Than One Year': '#question-5 > option:nth-child(2)',
    'Question 6': '//div[@id="question-6"]',
    'Hospital: Orthopedic Unit- Adult':
        '#question-6 > span > div > div > div:nth-child(1)',
    'Question 7': '//select[@id="question-7"]',
    '100-299 Beds': '#question-7 > option:nth-child(3)',
    'Question 8': '//div[@id="question-8"]',
    Newborns: '#question-8 > span > div > div > div:nth-child(1)',
    'Question 9': '//select[@id="question-9"]',
    Evenings: '#question-9 > option:nth-child(2)',
    'Question 10': '//select[@id="question-10"]',
    '1-3 years': '#question-10 > option:nth-child(2)',
    'Question 11': '//div[@id="question-11"]',
    'ONCB Forum or ONCNet News':
        '#question-11 > span > div > div > div:nth-child(1)',
    'Question 12':
        '//div[@class="onc-survey"]//div[@class="text-left"]//a[@ng-click="reject()"]',
    'Question 13': '//div[@id="question-13"]',
    ANA: '#question-13 > span > div > div > div:nth-child(1)',
    'Question 14': '//select[@id="question-14"]',
    'N/A': '#question-14 > option:nth-child(1)',

    // Attestation Fields
    'Handbook Agree Checkbox':
        '//input[contains(@ng-model, "agreeToAttestation1")]',
    'Verify Info Checkbox':
        '//input[contains(@ng-model, "agreeToAttestation2")]',

    // Verify Fields
};
