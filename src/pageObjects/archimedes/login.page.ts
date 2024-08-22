export const LoginPage = {
    url: '/session/new',
    'Username Input': '#username.form-control',
    'Password Input': '#password.form-control',
    'Sign In Button': 'input[type=submit]',
    'letsgo overlay': '#walkme-overlay-all',
    'Demo Login Button': 'input[type=submit]',
    'Error Message': '#flash-wrapper > div > div',
    'User dropdown': '//*[@id="nav-user-dropdown"]',
    'Log in as Test-taker Dropdown Item':
        '//*[contains(text(), "Log in as Test-taker")]',
    'Log in as Instructor Dropdown Item':
        '//*[contains(text(), "Log in as Instructor")]',
    'System Message': 'div#flash-wrapper',
    'New User Sign Up Link': '//a[@href="/registrations"]',
    'Unlock Instructions Link': '//*[@id="content"]/div/div/div/div/div[2]/div/div/div/a[5]',
    'Test Taker Button': '//*[@id="content"]/div/div[2]/div/div/div/div[2]/div[1]/a',
    'Instructor Button': '//*[@id="content"]/div/div[2]/div/div/div/div[2]/div[3]/a',
    'Password Reset Link': '//a[@href="/password_resets/new"]',
    'Confirmation Instructions Link': '//a[@href="/confirmations/new"]'
};
