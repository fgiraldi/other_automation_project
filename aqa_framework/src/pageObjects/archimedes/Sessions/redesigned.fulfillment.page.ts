export const redesignedFulfillmentPage = {
    url: '',

    /* Left Column */

    // Flight Path Panel

    // Notepad Panel
    // 2/23/21 - Selectors updated - Implemented descendant checks to ensure correct elements selected
    'Notepad Panel':
        "//div[contains(@data-react-class,'Notepad')]//form//textarea",
    'Notepad Panel Heading':
        "//div[contains(@data-react-class,'Notepad')]//div[contains(@class,'card-header')]",
    'Notepad Panel Body':
        "//div[contains(@data-react-class,'Notepad')]//form//textarea",
    'Notepad Panel Expand/Collapse Button':
        "//div[contains(@data-react-class,'Notepad')]//i[contains(@class, 'fa')]",

    // Activity Panel
    'Activity Panel': '[id="incidents-dashboard"]',
    'Activity Panel Heading': '[id="incidents-dashboard"] div.card-header',
    'Activity Panel Body': '[id="incidents-dashboard"] div.collapse',
    'Activity Panel Expand/Collapse Button':
        '[id="incidents-dashboard"] div.card-header i.fa',

    /* Right Column */
    // Session Control Buttons

    // Imbedded Live Stream Panel

    // Chat Panel
    'Chat Panel': '[id="chat-app"]',
    'Chat Panel Heading': '[id="chat-app"] div.card-header',
    'Chat Panel Collapsible': '[id="chat-app"]  div.card.text-chat-wrapper div:nth-of-type(2)',
    'Chat Panel Body': '[id="chat-app"] div.text-chat-body',
    'Chat Panel Expand/Collapse Button':
        '[id="chat-app"] span.mr-2 i.fa',

    // Exam Info Panel
    'Exam Info Panel':
        '//div[@class="col-sm-12 col-lg-6"]//div[@class="card mb-4"]//div[contains(string(), "Exam")]',
    'Exam Info Panel Heading':
        '//div[@class="col-half"][2]//div[@class="panel panel-default"][2]//h4[@class="panel-title"]',
    'Exam Info Panel Collapsible':
        '//div[@class="col-half"][2]//div[@class="panel panel-default"][2]//div[starts-with(@class,"panel-collapse")]',
    'Exam Info Panel Body':
        '(//h4[contains(string(), "Permitted Browsers")])[2]',
    'Exam Info Panel Expand/Collapse Button':
        '(//div[@class="col-sm-12 col-lg-6"]//div[@class="card mb-4"]//div[starts-with(@class,"fa")])[1]',
    'Exam Panel Dropdown': '#exam-select-dropdown',
    'Exam Profile': '#exam-tabs a[href="#profile"]',
    'OpenVidu URL Link': '#profile [href*="/einstein/fulfillments"]',

    // Session Info Panel
    'Session Info Panel':
        '//div[@class="col-sm-12 col-lg-6"]//div[@class="card mb-4"]//div[contains(string(), "Session")]',
    'Session Info Panel Heading':
        '//div[@class="col-half"][2]//div[@class="panel panel-default"][3]//h4[@class="panel-title"]',
    'Session Info Panel Collapsible':
        '//div[@class="col-half"][2]//div[@class="panel panel-default"][3]//div[starts-with(@class,"panel-collapse")]',
    'Session Info Panel Body':
        '//dd[@data-behavior="appointment-status-dd"]',
    'Session Info Panel Expand/Collapse Button':
        '(//div[@class="col-sm-12 col-lg-6"]//div[@class="card mb-4"]//div[starts-with(@class,"fa")])[2]',

    // Launch Control
    'Launch Control Panel':
        '//div[@class="col-sm-12 col-lg-6"]',
    'Launch Control Panel - Launch Exam Button': '[id=unlock-authentication]',
    'Launch Control Panel - Open Live RTC Button':
        'div.panel a[class*="btn"][href*="/einstein/fulfillments"]',
    'Launch Control Panel - Escalate Button': '[id=escalate]',
    'Launch Control Panel - Cancel Button':
        '[data-target="#cancel-modal"]',
    'Launch Control Panel - Watch Button': '[id="watch-session"]',
};
