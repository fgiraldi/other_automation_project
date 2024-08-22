export const PrechecksPage = {
    'Sign in page':
        "//h3[contains(text(), 'Log into your ProctorU account to continue')]",
    'Email Input': 'input[name="email"]',
    'Password Input': 'input[name="password"]',
    'Sign Up link': '//a[contains(text(), "New User? Sign up here")]',
    'Sign Up Here Page': "//h4[contains(text(), 'Sign up here')]",
    'First Name Input': 'input[name="firstName"]',
    'Last Name Input': 'input[name="lastName"]',
    // 'Email Input1': 'input[name="lastName"]',
    // 'Password Input1': 'input[name="lastName"]',
    'Password Confirmation Input': 'input[name="passwordConfirmation"]',
    'Country Dropdown': 'select[name="country"]',
    'Phone Number Input': 'input[name="phoneMobile"]',
    'Sign Up Check': '#signupCheck',
    'Continue Button': 'button[type="submit"]',
    'Sign In Button': "//button[contains(text(), 'Sign In')]",
    'Get Started': "//button[contains(text(), 'get started')]",
    'Take Photo': "//button[contains(text(), 'Take Photo')]",
    Next: "//button[contains(text(), 'Next')]",
    'Take Photo Description': '//em[.="Take Your Photo"]',
    'Verify ID': "//button[contains(text(), 'Take Photo')]",
    'Take ID Description': '//em[.="Verify Your ID"]',
    'Prechecks Header': '.prechecks-header > em',
    'Prechecks Message':
        '#modal-window-container > div > div > div > div > div.screen-resolution > div > div > p',
    'Need Assistance Continue': "//button[contains(text(), 'Continue')]",
    'Exam Prep1 Continue': "//button[contains(text(), 'Continue')]",
    'Exam Prep2 Continue': "//button[contains(text(), 'Continue')]",
    'Recording Notice Continue': "//button[contains(text(), 'Continue')]",
    'Recording check1': '#agreement_1',
    'Recording check2':
        "//*[contains(text(), 'recording and use of my biometric data to prevent identity fraud or cheating during my test')]",
    'Exam Rules check1': '#agreement_1',
    'Exam Rules check2': '#agreement_2',
    'Exam Rules Continue': "//button[contains(text(), 'Continue')]",
    'Testing Site Continue':
        "//button[contains(text(), 'Go to my testing site')]",
    'End Session':
        '.auto-submit-container .resolved div.auto-submit-button.active.react-draggable',
    'End Session Confirm':
        "//div[@class='alert-modal']//button[contains(text(), 'End Session')]",
    'Exam Rules Agree': "//button[contains(text(), 'Agree')]",
    'Begin Recording':
        "//button[contains(text(), 'Begin Recording and Continue')]",
    'Exam Rules Agree Disabled':
        "//button[@disabled][contains(text(), 'Agree')]",
    'Recording Notice Privacy Link':
        "//a[contains(@href, 'https://www.proctoru.com/privacy-policy')]",
    'Recording Notice Terms Link':
        "//a[contains(@href, 'https://www.proctoru.com/terms-of-service')]",
    'Exam Rules Disagree': "//button[contains(text(), 'Disagree')]",
    'Exam Assistance Continue': "//button[contains(text(), 'Continue')]",
    'Begin Exam': "//button[contains(text(), 'Go to my testing site')]",
    'Submit Quiz': "//button[contains(text(), 'Submit Quiz')]",
    'Confirmation Submit Quiz': "//button[contains(text(), 'Submit Quiz')]",
    'Autologin Check Error Text':
        "//div[contains(text(), 'We are unable to connect to your exam')]",
    Done: "//button[contains(text(), 'Done')]",
    Continue: "//button[contains(text(), 'Continue')]",
    quizFrame1: "//iframe[@id='ctl_2']",
    quizFrame2: "//frame[@title='Quiz Content']",
    'Download Button': '//button[contains(text(),"Download")]',
    'New LMI Welcome Screen': '.sc-bZQynM',
    'Exam Session Recording Notice':
        '//div[contains(text(), "Test Session Recording Notice and Consent")]',
    'New Prechecks Download Button': '.download-button',
    'I See Chatbox': 'button[aria-label="I see the chatbox"]',
    'Begin Exam Button': 'button[aria-label="Go to my testing site"]',
    Guidelines: '.exam-rules__item.exam-rules__item--guidelines',
    'Stay Seated':
        "//li[@class='exam-rules__guidelines-item']//*[contains(text(),'Stay seated')]",
    'Stay in frame':
        "//li[@class='exam-rules__guidelines-item']//*[contains(text(),'Stay in frame')]",
    'Stay quiet':
        "//li[@class='exam-rules__guidelines-item']//*[contains(text(),'Stay quiet')]",
    'Stay in a private room':
        "//li[@class='exam-rules__guidelines-item']//*[contains(text(),'Stay in a private room')]",
    'Stay Seated image': "//img[contains(@src, 'seated')]",
    'Stay in frame image': "//img[contains(@src, 'frame')]",
    'Stay quiet image': "//img[contains(@src, 'quiet')]",
    'Stay in a private room image': "//img[contains(@src, 'private')]",
    Help: "//button[@title='Open Messenger']",
    'Help Chat Header': "//div[contains(@class, 'mxg-header-main')]//h1",
    'Help Chat Close':
        "//button[@title='Minimize the Messenger']",

    'Help iframe': "//iframe[@title='Messenger Launcher']",
    'Help Messenger iframe': "//iframe[@title='Messenger']",
    'Help button iframe': "//iframe[@title='Messenger Launcher']",
    Rules: '.exam-rules__item.exam-rules__item--rules',
    'Allowed Resources':
        '.exam-rules__item.exam-rules__item--allowed-resources',
    'Textbook Resource': '//*[contains(text(), "Textbook")]',
    'Excel Resource': '//*[contains(text(), "Excel")]',
    'Window Size Resized': '//li[contains(text(), "Resized")]',
    'Maximized Window Rule':
        '//p[contains(text(), "Your browser window will stay maximized during the exam")]',
    'Lost Focus Restriction Not Allowed':
        '//p[contains(text(), "You will not be able to switch applications during the exam")]',
    'Lost Focus Restriction Allowed':
        '//p[contains(text(), "You will be able to switch applications during the exam")]',
    'Copy Paste Restriction':
        '//p[contains(text(), "You will not be allowed to copy text and images during the exam")]',
    'Browser Tabs Restriction':
        '//p[contains(text(), "Please, make sure you save and close all browser tabs.")]',
    'Browser Tabs Allowed':
        '//p[contains(text(), "You will be allowed to open new browser tabs during the exam")]',
    'No Allowed Resources text':
        '//p[contains(text(), "No other resources are allowed for this exam")]',
    'Allowed Resources text':
        '//p[contains(text(), "You are allowed the following resources for your exam")]',
    'Fullscreen Size Restriction':
        '//p[contains(text(), "Your browser window will stay in fullscreen mode during the exam")]',
    'Resizeable Window':
        '//p[contains(text(), "Your browser window will be resizable during the exam")]',
    Accommodations: '.exam-rules__item.exam-rules__item--accommodations',
    'No Accommodations text':
        "//p[contains(text(), 'No Active Accommodations on your account')]",
    Breaks: '.exam-rules__item.exam-rules__item--breaks',
    'No Breaks text':
        "//p[contains(text(), 'Your Proctor will review any allowed breaks')]",
    'Breaks text':
        "//p[contains(text(), 'You are allowed breaks during your exam')]",
    'Other Resources': '.exam-rules__item.exam-rules__item--other-resources',
    'Other Resources text': "//p[contains(text(), 'Test Other Resource')]",
    'No Other Resources text':
        "//p[contains(text(), 'No other resources are allowed for this exam')]",
    'Close prechecks': "//a[contains(@class, 'proctorU-close-prechecks-btn')]",
    'Close alert': '.resolved |shadow| button.close',
    'Payment iFrame': '.payment-up-iframe',
    'Payment Required':
        '//h4[.="Oops! It looks like we still need payment for your exam"]',
    'Error Message': 'div.message-wrapper',
    'Taken Picture': 'img[src*="data:image/png"]',
    WaitingScreen:
        "//h6[contains(text(), 'Make sure LogMeIn (LMI) is running')]",
};
