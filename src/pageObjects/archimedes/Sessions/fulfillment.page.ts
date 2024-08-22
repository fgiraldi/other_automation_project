export const FulfillmentPage = {
    url: 'fulfillments',
    'Video status icon': '#camVideoPlayer .stream-status',
    'Stream Status Connected':
        "//div[@id='camVideoPlayer']//div[contains(@class, 'stream-status-connected')]",
    'Flight Path Title': '//div[contains(@class,"tab-incomplete")]//h4',
    'Flight Path Text': '//div[contains(@class,"tab-incomplete")]//p',
    'Flight Path Resolve Button': '//div[contains(@class,"tab-incomplete")]//button[contains(text(),"Resolve")]',
    'Flight Path Active Tab': '(//li[@class="nav-item mb-1"])[1]',
    'Flight Path ID and Image Match Button': '//div[contains(@class,"tab-incomplete")]//button[contains(text(),"ID and Image Match")]',
    'Flight Path Images Match Allowed Resources Button': '//div[contains(@class,"tab-incomplete")]//button[contains(text(),"Images Match Allowed Resources")]',
    'Flight Path Env Presents No Security Risks Button': '//div[contains(@class,"tab-incomplete")]//button[contains(text(),"Env Presents No Security Risks")]',
    'Flight Path Phone Secured Button': '//div[contains(@class,"tab-incomplete")]//button[contains(text(),"Phone Secured")]',
    'Flight Path Complete Button': '//div[contains(@class,"tab-incomplete")]//button[contains(text(),"Complete")]',
    'Flight Path Examinee Entered Correct Exam Button': '//div[contains(@class,"tab-incomplete")]//button[contains(text(),"Examinee Entered Correct Exam")]',
    'Flight Path Submission Complete Button': '//div[contains(@class,"tab-incomplete")]//button[contains(text(),"Submission Complete")]',
    'Flight Path Startup Complete Step':
        "//div[contains(@class, 'tab-incomplete active')]//input[@type='checkbox']",
    'Flight Path Verify Identity Complete Step':
        "//div[contains(@class, 'tab-incomplete active')]//input[@type='checkbox']",
    'Flight Path Authenticate Student Complete Step':
        "//div[contains(@class, 'tab-incomplete active')]//input[@type='checkbox']",
    'Flight Path Exam Rules Complete Step':
        "//div[contains(@class, 'tab-incomplete active')]//input[@type='checkbox']",
    'Flight Path Secure Environment Complete Step':
        "//div[contains(@class, 'tab-incomplete active')]//input[@type='checkbox']",
    'Flight Path Verify Login Complete Step':
        "//div[contains(@class, 'tab-incomplete active')]//input[@type='checkbox']",
    'Flight Path Exam Start Complete Step':
        "//div[contains(@class, 'tab-incomplete active')]//input[@type='checkbox']",
    'Flight Path Verify Test Submission Complete Step':
        "//div[contains(@class, 'tab-incomplete active')]//input[@type='checkbox']",
    'Flight Path Thank You Complete Step':
        "//div[contains(@class, 'tab-incomplete active')]//input[@type='checkbox']",
    'Flight Path End Appointment Complete Step':
        "//div[contains(@class, 'tab-incomplete active')]//input[@type='checkbox']",
    'Completed Step Text':
        "//div[contains(@class,'incomplete active')]//strong[contains(text(),'Completed Step')]",
    'Launch Exam Button': '#unlock-authentication',
    'Unlock Exam Button': '#unlock-exam',
    'Stop Session Button':
        'a[class="btn btn-danger btn-block"][data-stop-session="true"]',
    'Cancel Appointment Button':
        '//a[@class="btn btn-danger btn-block"][@data-target="#cancel-modal"]',
    'Credit to account': "//input[@id='credit_account']",
    'Cancel Submit Button': 'input[type="submit"][value="Submit"]',
    'Appointment Status Field': 'dd[data-behavior=session-status-dd]',
    'Exam Started Timestamp':
        '//b[contains(text(), "Exam Started")]/parent::td/following-sibling::td[1]',
    'Exam Ended Timestamp':
        '//b[contains(text(), "Exam Ended")]/parent::td/following-sibling::td[1]',
    '7th Flight Path Step':
        '#flight-path > div.card-body.pt-0.px-0 > div.row.px-4 > div.col-1.p-0.flex-grow-0.flex-shrink-1 > ul > li:nth-child(7) > a',
    'Browser Event Tab': '//a[contains(text(), "Browser")]',
    'Browser Event': '#BrowserTab',
    'Resized Event': '#BrowserResized',
    'System keys event': '//strong[contains(text(), "System keys")]',
    'Copy paste event': '#CopyPaste',
    'Watch Button': '#watch-session',
    'Exam General tab': '//a[@data-rb-event-key="Exam general"]',
    'Incident event': "//div[@id='incidents-dashboard']//div[@id='Incident']",
    'Test Event': '(//small[contains(text(),"Automated Test")])[1]',
    'Kill Streams Button': '#abort-fulfillment',
    'View Session Button': '//span//*[contains(text(), "View Session")]',
    'Collapsed Session Section':
        '//div[@class="card-header collapse-button"]//text()[contains(., "Session")]/parent::*',
    'Open Watcher Window': '//button[contains(text(), "Open Watcher Window")]',
    'Incident resized event':
        '//div[contains(text(), "Incident created by browser resize event")]',

    'Incident browser tab event':
        '//div[contains(text(),"Incident created by browser tab event")]',
    'Fulfillment Aborted Event': '//strong[.="Fulfillment aborted"]',
    'Test Taker Activity Event': '//strong[.="Test taker activity"]',
    'AutoSubmit Event': '#AutoSubmit',
    'Flag As Incident Checkbox': 'input[name=incident]',
    'Stop Session Checkbox': '#stop_session',
    'Urgency Level Dropdown': '#urgency_level',
    'Incident Type Dropdown': '#incident_subtype',
    'Incident Comment': '#comment',
    'Save Changes Button': '//button[.="Save changes"]',
    'Test-Taker Name':
        "//div[@class='card-body']//a[contains(@href,'/users/')]",
    'Reservation Cancelled Event':
        "//div[@id='incidents-dashboard']//div[@id='ReservationCancelled']",
    'Event Comment': 'div[role=tabpanel]',
    'Session Interrupted Event':
        "//div[@id='incidents-dashboard']//div[@id='SessionInterrupted']",
    'Escalate Button': '#escalate',
    'Update Start Time to Now Button':
        '.btn.btn-danger[data-selector="update-start-btn"]',
    'First Touchpoint Event':
        "(//div[@id='incidents-dashboard']//div[@id='TouchPoint'])[1]",
    'First Comment Event':
        "(//div[@id='incidents-dashboard']//div[@id='Comment'])[1]",
    'First Incident Event':
        "(//div[@id='incidents-dashboard']//div[@id='Incident'])[1]",
    'Opened Incident Text':
        "(//div[@id='Incident'])[1]//div[@class='col-10']//div",
    'Opened Event Text':
        "//div[@id='incidents-dashboard']//div[@class='accordion']//div[@class='collapse show']//div[contains(@class,'col-11')]//div",
    'Opened Comment Text':
        "(//div[@id='Comment'])[1]//div[@class='col-10']//span",
    'Incident Report Link': "//a[contains(text(),'follow this link')]",
    'Incident Edit Link': "//a[contains(text(),'Edit Incident')]",
    'Incident Process Link': "//a[contains(text(),'Start Processing')]",
    // Watcher Window Specific Selectors
    'Allowed Resources Button':
        "//div[contains(@class,'watcher-right')]/ul/li[2]",
    'Add A Comment Button': "//div[contains(@class,'watcher-right')]/ul/li[3]",
    'Add An Incident Button':
        "//div[contains(@class,'watcher-right')]/ul/li[4]",
    'Add A Touchpoint Button':
        "//div[@class='js-touchpoint touchpoints-display']",
    'Touchpoint Dropdown': "[id='event_touch_point_kind']",
    'CameraLighting adjustment': "[value='Camera/Lighting adjustment']",
    'Upload Media Button': "//div[contains(@class,'watcher-right')]/ul/li[5]",
    'Dismiss Toast Alert':
        '//div[@class="alert-toast-container"]//button[@aria-label="Close"]',
    'Incident Added Success':
        "//div[@class='alert alert-toast animated alert-warning alert-transparent alert-dismissible' and @style='display: block;' and contains(text(),'Incident added')]",
    'Incident Added Close':
        "(//div//div//button[@aria-label='Close' and @data-dismiss='alert' and @class='close ml-1'])[1]",
    'Incident Type Error':
        "(//div[@class='alert-toast-container']//div[contains(text(),'Incident type must be selected.')])[1]",
    'No Comment Error':
        "(//div[@class='alert-toast-container']//div[contains(text(),'Comment cannot be blank.')])[1]",
    'No Allowed Resources Modal Text':
        "//div[@class='in modal' and @style='display: block;']",
    'Watcher Modal Comment Textbox':
        "//form[@class='text-chat-input']/textarea",
    'Watcher Modal Comment Submit':
        '//div[@style="display: block;"]//button[contains(text(), "Submit")]',
    'Watcher Modal Submit Button':
        '//div[@style="display: block;"]//button[contains(text(), "Submit")]',
    'Watcher Touchpoint Submit Button':
        '//form[@class="touch-points-form"]//button[contains(text(), "Submit")]',
    'Watcher Incident Textbox':
        "//div[@class='modal-body']//textarea[@name='comment']",
    'Watcher Incident Type Dropdown': "//select[@name='incident-subtype']",
    'Watcher Resources List':
        "//div[@class='in modal' and @style='display: block;']//div[@class='modal-body']",
    'Allowed Resources Header': '//h4[contains(text(), "Allowed Resources")]',
    'Other Resources Header': '//h4[contains(text(), "Other Resources")]',
    'Modal Title': "//div[@class='modal-title h4']",
    'Modal Close Button':
        "//div[@class = 'modal-header']/button[@class = 'close']/span[contains(text(), 'Close')]",

    'Security Tab': '//a[contains(text(), "Security")]',
    'ML - Presence Events': '//strong[contains(text(), "Presence")]',
    'ML - Contraband Events': '//strong[contains(text(), "Contraband")]',
    'ML - Multiple Persons Identified Event':
        '//div[contains(text(), "multiple_in_frame")]',
    'ML - No One In The Frame Event': '//div[contains(text(), "empty_frame")]',
    'ML - Phone Event': '//div[contains(text(), "phone")]',
    // 'ML - Electronic Device Detected Event':
    //     '//strong[contains(text(), "Electronic Device Detected")]/..',
    'Test Taker Link':
        '//div[@class="col-12 col-lg-6"]//a[contains(@href,"/users/")]',
    'Checkbox Element': '//*[@id="complete"]',
    'Completed Flightpath Step': '//*[@id="complete" and @disabled]',
    'Flight Path Check': '//*[@id="end-at-tab"]//strong',
    'Acknowledge button': "//button[contains(text(), 'Acknowledge')]",
    'Add New Event Button': '//button[contains(text(),"Add New Event")]',
    'Event Type Dropdown': '//select[@id="event-type-input"]',
    'Add Event Button': '//div[@class="modal fade show"]//button[contains(text(),"Add Event")]',
    'Scores Tab': '//a[@data-rb-event-key="Scores"]',
    'Motion Detected Score': '//div[@id="MotionDetected"]',
    'Motion Detected Score Checkbox': '//div[@id="MotionDetected"]//input[@type="checkbox"]',
    'Multiple Desktops Score': '//div[@id="MultipleDesktops"]',
    'Multiple Desktops Score Checkbox': '//div[@id="MultipleDesktops"]//input[@type="checkbox"]',
    'Profile Face Detected Score': '//div[@id="ProfileFaceDetected"]',
    'Profile Face Detected Score Checkbox': '//div[@id="ProfileFaceDetected"]//input[@type="checkbox"]',
    'Scores Yes Button': '//div[@role="alert"]//button[contains(text(),"Yes")]',
    'Successfull message alert': 'div.alert-success:last-of-type',
    'Your Status Text': '//div[@data-react-class="UrlPusher/UrlPusherApp"]//div[@class="col-sm-4"][strong[text()="Your status"]]//p',
    'Your Status Icon': '//div[@data-react-class="UrlPusher/UrlPusherApp"]//div[@class="col-sm-4"][strong[text()="Your status"]]//p/i',
    'Their Status Text': '//div[@data-react-class="UrlPusher/UrlPusherApp"]//div[@class="col-sm-4"][strong[text()="Their status"]]//p',
    'Their Status Icon': '//div[@data-react-class="UrlPusher/UrlPusherApp"]//div[@class="col-sm-4"][strong[text()="Their status"]]//p/i',
    'Code Text': '//div[@data-react-class="UrlPusher/UrlPusherApp"]//div[@class="col-sm-4"][strong[text()="Code"]]//p',
    'Push URL Button': '//button[contains(text(),"Push URL")]',
    'Modal': '//div[@class="fade modal show"]',
    'Resolve Issue Comment': '//div[@class="fade modal show"]//textarea[@id="resolveText"]',
    'Notify IS Button': '//div[@class="fade modal show"]//button[contains(text(),"Notify IS")]',
    'Mark as Resolved Button': '//div[@class="fade modal show"]//button[contains(text(),"Mark as Resolved")]',
    'Start URL Button': '//div[@class="fade modal show"]//button[contains(text(),"Start URL")]',
    'LiveRTC URL Button': '//div[@class="fade modal show"]//button[contains(text(),"LiveRTC URL")]',
    'Test-Takers Reservations URL Button': '//div[@class="fade modal show"]//button[contains(text(),"Reservations URL")]',
    'Help Desk URL Button': '//div[@class="fade modal show"]//button[contains(text(),"Help Desk URL")]',
    'Push URL Modal Close Button': '//div[@class="modal-header"][text()="Push URL"]/button[@class="close"]',
    'Activity Touch Point': '//div[@id="incidents-dashboard"]//div[@id="TouchPoint"]//div[contains(@class, "media-heading")]',
    'Activity Touch Point Last Log': '(//div[@id="incidents-dashboard"]//div[@id="TouchPoint"]//div[contains(@class, "collapse")]//div[contains(@class, "row")])[1]'
};
