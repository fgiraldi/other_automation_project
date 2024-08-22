export const EUCitizenConfirmationPage = {
    url: '/eu-citizen/edit',
    'Yes radio button': '#user_eu_citizen_confirmed_yes',
    'No radio button': '#user_eu_citizen_confirmed_no',
    'Submit button': 'input[name="commit"][value="Submit"]',

    //
    'GDPR Compliance heading':
        "//h3[@class='modal-title'][contains(text(), 'ProctorU Services are GDPR-compliant.')]",
    'GDPR Accept button':
        "//div[@class='modal-content']//button[contains(text(), 'I have reviewed and agree to the new terms.')]",
    'GDPR Contact Method selector': "//select[@name='contact_method']",
    'GDPR Email input': '//*[@id="contact_method_value"]',
    'GDPR Submit button':
        "//div[@class='modal-content']//button[@data-behavior='submit-gdpr-contact']",
};
