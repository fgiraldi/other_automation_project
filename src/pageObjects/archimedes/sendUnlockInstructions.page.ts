export const SendUnlockInstructionsPage = {
    url: '/users/locks/new',

    'Email': '//*[@id="email"]',
    'Resend Unlock Instructions Button': '//*[@class="btn btn-primary btn-block"]',
    'Success Message': '//*[@id="flash-wrapper"]/div',
    'Reset Password Button': '//input[@value="Reset Password"]',
    'Reset Confirmation Instructions Button': '//input[@value="Resend Confirmation Instructions"]',
    'Toast Message': '//div[@role="alert"]',
    'Alert Message': '//div[contains(@class,"alert-app")]',
};