export const ProctorUWidget = {
    /** @NOTE Widget elements outside of modal */
    'Widget Button': '.proctorU-widget-button button',
    'Widget Button Container': 'div.proctorU-widget-button',
    'Widget Tooltip': 'div.rc-tooltip-inner > div.pu-default-overlay',
    'Description iFrame': '#descriptiontext_ifr',
    'ProctorU Description': 'p.proctoru-no-extension',
    'Widget Content': '#proctorU-container proctor-widget',
    'Widget Error Overlay': 'div.rc-tooltip.proctorU-tooltip.tooltip-error.rc-tooltip-placement-left div.pu-error-overlay',
    /** end */

    /** @NOTE Widget elements on Welcome */
    'Get Started Button':
        '#proctorU-container proctor-widget >> .extra-options .pt-3 button[class="btn btn-primary btn-block mb-4"]',
    'Import Existing Exam':
        '#proctorU-container proctor-widget >> .extra-options .pt-3 button[class="btn btn-primary btn-block primary-hollow-btn"]',
    'Widget Close Button': '#proctorU-container proctor-widget button.close',
    /** end */

    /** @NOTE Widget elements on Select Proctoring Service */
    'Service Dropdown':
        '#proctorU-container proctor-widget .dropdown-select:has([id="Proctoring Service_select_id"])',
    'Import Service Dropdown':
        '#proctorU-container proctor-widget .dropdown-select:has([id="_select_id"])',
    Auto: '#proctorU-container proctor-widget div.form-group:has(label:text("Proctoring Service")) a.dropdown-item[id="Auto"]',
    'Service Dropdown Select':
        '#proctorU-container proctor-widget >> .extra-options div:nth-child(1) .card-body div:nth-child(1) .dropdown-select >> select#Proctoring\\ Service_select_id.form-control',
    'Import Auto': '#proctorU-container proctor-widget >> a[id*="Auto"]',
    'Import Live+': '#proctorU-container proctor-widget >> a[id*="Live+"]',
    'Live+': '#proctorU-container proctor-widget >> a[id*="Live+"]',
    UAuth: '#proctorU-container proctor-widget >> a[id*="UAuth"]',
    'Existing Name':
        '#proctorU-container proctor-widget >> .extra-options fieldset:nth-child(2) .card-body div:nth-child(1) .selected-container',
    'MR Automation Import Live+':
        '#proctorU-container proctor-widget >> .extra-options fieldset:nth-child(2) .card-body div:nth-child(1) div:nth-child(2) > li',

    'Exam Department Dropdown':
        '#proctorU-container proctor-widget >> .extra-options div:nth-child(2) .card-body div:nth-child(1) .dropdown-select',
    'Automation Science Department':
        '#proctorU-container proctor-widget >> a[id*="Automation Science Department"]',

    /**Jay Testing */
    'Manual Testing Department':
        '#proctorU-container proctor-widget >> a[id*="Manual Testing"]',
    'General':
        '#proctorU-container proctor-widget a[id*="General"]',
    'Automated Testing Department':
        '#proctorU-container proctor-widget >> a[id*="Automated Testing"]',

    'Exam Term Dropdown':
        '#proctorU-container proctor-widget .dropdown-select:has([id="Exam Term_select_id"])',
    'Import Exam Term Dropdown':
        '#proctorU-container proctor-widget >> .extra-options fieldset:nth-child(2) .card-body div:nth-child(1) .dropdown-select',
    'Import Live+ Existing Name':
        '#proctorU-container proctor-widget >> .extra-options fieldset:nth-child(3) .card-body div:nth-child(1) .selected-container',
    'Fall 2020': '#proctorU-container proctor-widget >> a[id*="Fall 2020"]',
    'Import Summer 2020':
        '#proctorU-container proctor-widget >> a[id*="Summer 2020"]',
    'Import Spring 2020':
        '#proctorU-container proctor-widget >> a[id*="Spring 2020"]',
    'Spring 2020': '#proctorU-container proctor-widget >> a[id*="Spring 2020"]',
    'Spring 2021': '#proctorU-container proctor-widget >> a[id*="Spring 2021"]',
    'Summer 2020': '#proctorU-container proctor-widget >> a[id*="Summer 2020"]',
    'Math Term 883':
        '#proctorU-container proctor-widget a[id="Math Term 883"]',
    'Import Math Term 883 2':
        '#proctorU-container proctor-widget a[id="Math Term 883 2"]',
    'Import Exam Imput Options':
        '#proctorU-container proctor-widget >> li.dropdown-item',
    'Import existint exam input':
        '#proctorU-container proctor-widget input#downshift-0-input',

    'Proctoring Service Continue Button':
        '#proctorU-container proctor-widget >> .container.footer .card-body button[class="btn btn-primary btn-block"]',
    /** end */

    /** @NOTE Widget elements on Exam Settings */
    // Exam Security Level
    'Exam Security Level Label':
        '#proctorU-container proctor-widget >> .scroll-wrapper .scroll-content .container .extra-options .mt-3 span[class="font-weight-bold"]',
    'Exam Security Level Recommended radio button':
        '#proctorU-container proctor-widget >> .scroll-wrapper .scroll-content .container .extra-options input[type="radio"][id="recommended"]',
    'Exam Security Level Custom radio button':
        '#proctorU-container proctor-widget >> .scroll-wrapper .scroll-content .container .extra-options input[type="radio"][id="custom"]',

    // Exam Security Guidelines
    'Exam Security Guidelines Label':
        '#proctorU-container proctor-widget >> .scroll-wrapper .scroll-content .container .extra-options .mt-3:nth-child(2) span[class="font-weight-bold"]',

    'Allow Use of Browser Tabs select':
        '#proctorU-container proctor-widget widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(1) > div > div.dropdown-select > select',
    'Allow Use of Browser Tabs selector':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(1) > div > div.dropdown-select > div[role="menuitem"]',
    'Allow Use of Browser Tabs - Restricted option':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(1) > div > div.dropdown-select > select > option[value="restricted"]',
    'Allow Use of Browser Tabs - Restricted btn':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(1) > div > div.dropdown-menu.w-100.selectDropdown > a:nth-child(2)',
    'Allow Use of Browser Tabs - Allowed option':
        '#proctorU-container proctor-widget widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(1) > div > div.dropdown-menu > a.dropdown-item[id="Allowed"]',
    'Allow Use of Browser Tabs - Allowed btn':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(1) > div > div.dropdown-menu.w-100.selectDropdown > a:nth-child(1)',
    'Allow Use of Browser Tabs - Resizable option':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(1) > div > div.dropdown-select > select > option[value="resized"]',

    'Allow Copy Text or Images select':
        '#proctorU-container proctor-widget widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(2) > div > div.dropdown-select > select',
    'Allow Copy Text or Images selector':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(2) > div > div.dropdown-select > div[role="menuitem"]',
    'Allow Copy Text or Images - Disabled option':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(2) > div > div.dropdown-select > select > option[value="disabled"]',
    'Allow Copy Text or Images - Disabled btn':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(2) > div > div.dropdown-menu.w-100.selectDropdown > a:nth-child(1)',
    'Allow Copy Text or Images - Enabled option':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(2) > div > div.dropdown-select > select > option[value="enabled"]',
    'Allow Copy Text or Images - Enabled btn':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(2) > div > div.dropdown-menu.w-100.selectDropdown > a:nth-child(2)',

    'Set Exam Window Size select':
        '#proctorU-container proctor-widget widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(3) > div > div.dropdown-select > select',
    'Set Exam Window Size selector':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(3) > div > div.dropdown-select > div[role="menuitem"]',
    'Set Exam Window Size - Fullscreen option':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(3) > div > div.dropdown-select > select > option[value="fullscreen"]',
    'Set Exam Window Size - Fullscreen btn':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(3) > div > div.dropdown-menu.w-100.selectDropdown > a:nth-child(1)',
    'Set Exam Window Size - Maximized option':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(3) > div > div.dropdown-select > select > option[value="maximized"]',
    'Set Exam Window Size - Maximized btn':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(3) > div > div.dropdown-menu.w-100.selectDropdown > a:nth-child(2)',
    'Set Exam Window Size - Resize option':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(3) > div > div.dropdown-select > select > option[value="resized"]',
    'Set Exam Window Size - Resize btn':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(3) > div > div.dropdown-menu.w-100.selectDropdown > a:nth-child(3)',

    'Third Party Application Use select':
        '#proctorU-container proctor-widget widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(4) > div > div.dropdown-select > select',
    'Third Party Application Use selector':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(4) > div > div.dropdown-select > div[role="menuitem"]',
    'Third Party Application Use - Restricted option':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(4) > div > div.dropdown-select > select > option[value="restricted"]',
    'Third Party Application Use - Restricted btn':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(4) > div > div.dropdown-menu.w-100.selectDropdown > a:nth-child(2)',
    'Third Party Application Use - Allowed option':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(4) > div > div.dropdown-select > select > option[value="allowed"]',
    'Third Party Application Use - Allowed btn':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(4) > div > div.dropdown-menu.w-100.selectDropdown > a[id="Allowed"]',
    'Third Party Application Use - Create Incidents btn':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(2) > fieldset > div > div.card-body > form > div:nth-child(4) > div > div.dropdown-menu.w-100.selectDropdown > a[id="Create Incidents"]',

    // Test-taker resources
    'Auto Test Takers Resources Label':
        '#proctorU-container proctor-widget >> .scroll-wrapper .scroll-content .container .extra-options .mt-3:nth-child(3) span[class="font-weight-bold"]',
    'Auto Test Takers Resources Selection':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(3) > div > div.card-body > div.switch.float-left > input[type=checkbox]',
    'Live Test Takers Resources Label':
        '#proctorU-container proctor-widget >> .scroll-wrapper .scroll-content .container .extra-options .mt-3 span[class="font-weight-bold"]',
    'Live Test Takers Resources Toggle':
        '#proctorU-container proctor-widget >> .scroll-wrapper .scroll-content .container .extra-options .mt-3 > div.card > div.card-body > div.switch.float-left',
    'Textbook Checkbox':
        '#proctorU-container proctor-widget >> input[id*="textbook"]',
    'Ebook Website Checkbox':
        '#proctorU-container proctor-widget >> input[id*="ebookWebsite"]',
    'Ebook Computer Checkbox':
        '#proctorU-container proctor-widget >> input[id*="ebookComputer"]',
    'Scientific Checkbox':
        '#proctorU-container proctor-widget >> input[id*="scientific"]',
    'Four Function Checkbox':
        '#proctorU-container proctor-widget >> input[id*="four"]',
    'Note Cards Checkbox':
        '#proctorU-container proctor-widget >> input[id*="noteCards"]',
    'Handwritten Notes Checkbox':
        '#proctorU-container proctor-widget >> input[id*="handwrittenNotes"]',
    'Graphing Checkbox':
        '#proctorU-container proctor-widget >> input[id*="graphing"]',
    'Computers Checkbox':
        '#proctorU-container proctor-widget >> input[id*="computers"]',
    'Printed Notes Checkbox':
        '#proctorU-container proctor-widget >> input[id*="printedNotes"]',
    'Formula Sheet Checkbox':
        '#proctorU-container proctor-widget >> input[id*="graphing"]',
    'Notes PDF Checkbox':
        '#proctorU-container proctor-widget >> input[id*="notesPdf"]',
    'Notes Word Checkbox':
        '#proctorU-container proctor-widget >> input[id*="notesWord"]',
    'Notes Excel Checkbox':
        '#proctorU-container proctor-widget >> input[id*="notesExcel"]',
    'Notes Powerpoint Checkbox':
        '#proctorU-container proctor-widget >> input[id*="notesPowerpoint"]',
    'Bathroom Breaks Checkbox':
        '#proctorU-container proctor-widget >> input[id*="bathroomBreaks"]',
    'PreApproved Website Checkbox':
        '#proctorU-container proctor-widget >> input[id*="preApprovedWebsite"]',
    'All Websites Checkbox':
        '#proctorU-container proctor-widget >> input[id*="allWebsites"]',
    '1 Sheet Checkbox':
        '#proctorU-container proctor-widget >> input[id*="1Sheet"]',
    '2 Sheet Checkbox':
        '#proctorU-container proctor-widget >> input[id*="2Sheet"]',
    'Multiple Sheets Checkbox':
        '#proctorU-container proctor-widget >> input[id*="multipleSheets"]',
    'Whiteboard Checkbox':
        '#proctorU-container proctor-widget >> input[id*="whiteboard"]',
    'Excel Checkbox':
        '#proctorU-container proctor-widget >> input[id*="excel"]',
    'Word Checkbox': '#proctorU-container proctor-widget >> input[id*="word"]',
    'Powerpoint Checkbox':
        '#proctorU-container proctor-widget >> input[id*="powerpoint"]',
    'Notepad Checkbox':
        '#proctorU-container proctor-widget >> input[id*="notepad"]',
    'Paint Checkbox':
        '#proctorU-container proctor-widget >> input[id*="paint"]',
    'Spss Checkbox':
        '#proctorU-container proctor-widget >> input[id*="spss"]',

    'Auto Test Takers Resources Toggle':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(3) > div > div.card-body > div.switch.float-left',

    'Edit Test Taker Settings Button':
        '#proctorU-container proctor-widget widget-body > widget-content > div.scroll-wrapper.big-footer > div > div > div > div > div > div > fieldset:nth-child(2) > div > div > div > button',

    // Allow websites
    'Allow Websites Label':
        '#proctorU-container proctor-widget >> .scroll-wrapper .scroll-content .container .extra-options .mt-3:nth-child(4) span[class="font-weight-bold"]',
    'Allow Websites Selection':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(4) > div > div.card-body > div.switch.float-left > input[type=checkbox]',
    'Allow Websites Toggle':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(4) > div > div.card-body > div.switch.float-left',
    'Allow Websites Input':
        '#proctorU-container proctor-widget >> input[id="whitelistedUrls.inputValue"]',
    'Allow Websites Added Sites':
        '#proctorU-container proctor-widget >> div.additional-url-wrapper input.form-control:not([value=""])',
    'Allow Websites Error Message':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > fieldset:nth-child(4) > div > div.card-body > div.additional-url-wrapper .validation > div.invalid-message',
    'Allow Websites Plus Button':
        '#proctorU-container proctor-widget >> button[class="additional-url-wrapper__plus"]',
    'Allow Websites Delete Button':
        '#proctorU-container proctor-widget >> button[class="additional-url-wrapper__delete"]',
    'Open On Exam Launch Checkbox':
        '#proctorU-container proctor-widget >> input[id*="openOnExamLaunch"]',

    // Additional Exam Notes
    'Additional Exam Notes Label':
        '#proctorU-container proctor-widget >> .scroll-wrapper .scroll-content .container .extra-options .control-group span[class="font-weight-bold"]',
    'Additional Exam Notes editor':
        '#proctorU-container proctor-widget >> #examNotes > div.pell-actionbar',
    'Additional Exam Notes input':
        '#proctorU-container proctor-widget >> #examNotes > div.pell-content',

    'Save & Continue Button':
        '#proctorU-container proctor-widget >> .container.footer .card-body button[class="btn btn-primary btn-block"]',
    'Back Button':
        '#proctorU-container proctor-widget >> .container.footer .card-body button[class="btn btn-secondary btn-block"]',
    /** end */

    /** @NOTE Widget Elements in Contact Info */
    // Contact Info
    'Contact Name':
        '#proctorU-container proctor-widget input[id="contactInfo.name"]',
    'Contact Email':
        '#proctorU-container proctor-widget input[id="contactInfo.email"]',
    'Contact Phone':
        '#proctorU-container proctor-widget input[label="Phone"]',
    'Contact Phone Invalid Message':
        '#proctorU-container proctor-widget .form-group:has(input[label="Phone"]) .validation .invalid-message',
    'Contact Notes & Available Times':
        '#proctorU-container proctor-widget >> textarea[id="contactInfo.notes"]',

    // Test-taker start notifications
    'Test-taker Start Notification Selection':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper > div > div > div > div > div > div > div:nth-child(2) > fieldset > div > div.card-body > div.switch.float-left > input[type=checkbox]',
    'Students Dropdown':
        '#proctorU-container proctor-widget input#downshift-0-input',
    'Email Checkbox':
        '#proctorU-container proctor-widget >> input[id*=emailNotifications]',
    'SMS Checkbox':
        '#proctorU-container proctor-widget >> input[id*=smsNotifications]',
    'Desktop Checkbox':
        '#proctorU-container proctor-widget >> input[id*=pushNotifications]',
    'Students List':
        '#proctorU-container proctor-widget >> div.dropdown-menu.show li',
    'Students List First Student':
        '#proctorU-container proctor-widget div.dropdown-menu.show li:nth-of-type(1)',
    'Selected Students List':
        '#proctorU-container proctor-widget widget-body span.selected-item-email',
    'Email address needed Alert':
        '#proctorU-container proctor-widget .dropdown.form-group:has(input#downshift-0-input) .validation .invalid-message',
    'Start Notification Message Alert':
        '#proctorU-container proctor-widget .form-group:has(input[id*=emailNotifications]) > .validation .invalid-message',

    // Incident Report Notifications
    'Incident Report Notification Selection':
        '#proctorU-container proctor-widget .control-group:nth-child(3) input[type="checkbox"]',
    'Incident Report Notification Dropdown':
        '#proctorU-container proctor-widget input#downshift-1-input',
    'Selected Incident Report Notification Email List':
        '#proctorU-container proctor-widget .control-group:nth-child(3) .selected-container',
    'Selected Incident Report Notification Email List Button':
        '#proctorU-container proctor-widget .control-group:nth-child(3) .selected-item button',
    'Incident Report Notification Email List':
        '#proctorU-container proctor-widget .control-group:nth-child(3) div.dropdown-menu.show li',

    'Contact Info Continue Button':
        '#proctorU-container proctor-widget >> .container.footer .card-body button[class="btn btn-primary btn-block"]',
    /** end */

    /** @NOTE Widget elements on Summary (Auto) */
    'Service Type':
        '#proctorU-container proctor-widget dt:text("Service") + dd span',
    'Edit Service Type button':
        '#proctorU-container proctor-widget fieldset:has(dt:text("Service")) .btn-link',

    'Allow Use of Browser Tabs':
        '#proctorU-container proctor-widget >> .scroll-wrapper .scroll-content .container .extra-options fieldset:nth-child(2) > div.card > div.card-body > div span:nth-child(1)',
    'Allow Copy Text and Images':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper.big-footer > div > div > div > div > div > div > fieldset:nth-child(2) > div > div > div:nth-child(2) > dd:nth-child(4) > span',
    'Exam Window Size':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper.big-footer > div > div > div > div > div > div > fieldset:nth-child(2) > div > div > div:nth-child(2) > dd:nth-child(6) > span',
    'Third Party Application Use':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper.big-footer > div > div > div > div > div > div > fieldset:nth-child(2) > div > div > div:nth-child(2) > dd:nth-child(8) > span',
    'Edit Test-taker resources Button':
        '#proctorU-container proctor-widget fieldset:has(dt:text("Test-taker resources")) .btn-link',    
    'Test-taker Resources':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper.big-footer > div > div > div > div > div > div > fieldset:nth-child(2) > div > div > div:nth-child(2) > dd:nth-child(10) > div',
    'Allow Websites':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper.big-footer > div > div > div > div > div > div > fieldset:nth-child(2) > div > div > div:nth-child(2) > dd:nth-child(12)',
    'Additional Exam Notes':
        '#proctorU-container proctor-widget dt:text("Additional exam notes") + dd span',

    'Edit Contact Info button':
        '#proctorU-container proctor-widget fieldset:has(dt:text("Contact Information")) .btn-link',
    'Contact Information - Name':
        '#proctorU-container proctor-widget fieldset:has(dt:text("Contact Information")) dd:nth-of-type(1) span',
    'Contact Information - Email Checkbox':
        '#proctorU-container proctor-widget widget-body > widget-content div.extra-options > div > div.control-group:nth-child(2) div.card-body > div.form-group > div.form-check:nth-child(3) > input',
    'Contact Information - Email':
        '#proctorU-container proctor-widget fieldset:has(dt:text("Contact Information")) dd:nth-of-type(2) span',
    'Contact Information - Phone':
        '#proctorU-container proctor-widget fieldset:has(dt:text("Contact Information")) dd:nth-of-type(3) span',
    'Contact Information - Additional Notes':
        '#proctorU-container proctor-widget fieldset:has(dt:text("Contact Information")) dd:nth-of-type(4) span',
    'Test-taker Start Notifications Checkbox':
        '#proctorU-container proctor-widget widget-body > widget-content div.extra-options > div > div.control-group:nth-child(2) div.card-body > div > input',
    'Test-taker Start Notifications':
        '#proctorU-container proctor-widget dt:text("Test-taker start notifications") + dd',
    'Incident Report Notifications':
        '#proctorU-container proctor-widget fieldset:has(dt:text("Contact Information")) dt:text("Incident report notifications") + dd',
    'Contact Name Invalid Message':
        '#proctorU-container proctor-widget .form-group:has(input[id="contactInfo.name"]) .validation .invalid-message',
    'Contact Email Invalid Message':
        '#proctorU-container proctor-widget .form-group:has(input[id="contactInfo.email"]) .validation .invalid-message',

    'Edit Exam Windows button':
        '#proctorU-container proctor-widget fieldset:has(dt:text("Exam Windows")) .btn-link',
    'Save & Return to LMS Button':
        '#proctorU-container proctor-widget >> .container.footer .card-body button[class="btn btn-primary btn-block"]',

    'Test-Taker Resources - No resources allowed':
        '#proctorU-container proctor-widget dt:text("Test-taker resources") + dd .badge:text("No resources allowed")',
    'Test-Taker Resources - Textbook':
        '#proctorU-container proctor-widget dt:text("Test-taker resources") + dd .badge:text("Textbook")',
    'Test-Taker Resources - Ebook (Website)':
        '#proctorU-container proctor-widget dt:text("Test-taker resources") + dd .badge:text("Ebook (Website)")',
    'Test-Taker Resources - Handwritten Notes':
        '#proctorU-container proctor-widget dt:text("Test-taker resources") + dd .badge:text("Handwritten Notes")',
    'Test-Taker Resources - Note Cards':
        '#proctorU-container proctor-widget dt:text("Test-taker resources") + dd .badge:text("Note Cards")',
    'Test-Taker Resources - All Websites':
        '#proctorU-container proctor-widget dt:text("Test-taker resources") + dd .badge:text("All Websites")',
    'Test-Taker Resources - Four Function Calculator':
        '#proctorU-container proctor-widget dt:text("Test-taker resources") + dd .badge:text("Four Function Calculator")',
    'Test-Taker Resources - Multiple Sheets':
        '#proctorU-container proctor-widget dt:text("Test-taker resources") + dd .badge:text("Multiple Sheets")',
    'Test-Taker Resources - Excel':
        '#proctorU-container proctor-widget dt:text("Test-taker resources") + dd .badge:text("Excel")',
    'Test-Taker Resources - 1 Sheet':
        '#proctorU-container proctor-widget dt:text("Test-taker resources") + dd .badge:text("1 Sheet")',
    'Test-Taker Resources - Bathroom breaks':
        '#proctorU-container proctor-widget dt:text("Test-taker resources") + dd .badge:text("Bathroom breaks")',
    'Test-Taker Resources - Scientific':
        '#proctorU-container proctor-widget dt:text("Test-taker resources") + dd .badge:text("Scientific")',
    /** end */

    /** @NOTE Widget elements on Summary (Live+) */
    'Service Type (Live+)':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper.big-footer > div > div > div > div > div > div > fieldset.mt-4 > div > div.card-body > div:nth-child(2) > dd:nth-child(2) > span',
    'Department (Live+)':
        '#proctorU-container proctor-widget dt:text("Department") + dd span',
    'Term (Live+)':
        '#proctorU-container proctor-widget dt:text("Term") + dd span',
    'Duration (Live+)':
        '#proctorU-container proctor-widget dt:text("Duration") + dd',
    'Exam Windows (Live+)':
        '#proctorU-container proctor-widget dt:text("Exam Windows") + dd',

    'Test-taker Resources (Live+)':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper.big-footer > div > div > div > div > div > div > fieldset:nth-child(3) > div > div > div:nth-child(2) > dd:nth-child(2) > div > div > div',
    'Additional Exam Notes (Live+)':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper.big-footer > div > div > div > div > div > div > fieldset:nth-child(3) > div > div > div:nth-child(2) > dd.exam-notes-view > span',

    'Edit Contact Info button (Live+)':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper.big-footer > div > div > div > div > div > div > fieldset:nth-child(4) > div > div > div > button',
    'Contact Information - Name (Live+)':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper.big-footer > div > div > div > div > div > div > fieldset:nth-child(4) > div > div > dd:nth-child(3) > span',
    'Contact Information - Email (Live+)':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper.big-footer > div > div > div > div > div > div > fieldset:nth-child(4) > div > div > dd:nth-child(4) > span',
    'Contact Information - Phone (Live+)':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper.big-footer > div > div > div > div > div > div > fieldset:nth-child(4) > div > div > dd:nth-child(5) > span',

    'Test-taker Start Notifications (Live+)':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper.big-footer > div > div > div > div > div > div > fieldset:nth-child(4) > div > div > dd:nth-child(7)',
    'Incident Report Notifications (Live+)':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.scroll-wrapper.big-footer > div > div > div > div > div > div > fieldset:nth-child(4) > div > div > dd:nth-child(9)',

    'Save & Return to LMS Button (Live+)':
        '#proctorU-container proctor-widget >> widget-body > widget-content > div.container.footer > div > div > div > div:nth-child(1) > button',
    /** end */

    /** @NOTE Other */
    'Exam Duration':
        '#proctorU-container proctor-widget >> input[aria-describedby="Duration (minutes)"]',
    'Exam Duration Invalid Message':
        '#proctorU-container proctor-widget .form-group:has(input[id="LMSData.duration"]) .validation .invalid-message',
    'Exam Window From':
        '#proctorU-container proctor-widget >> input[aria-describedby="From"]',
    'Exam Window To':
        '#proctorU-container proctor-widget >> input[aria-describedby="To"]',
    /** Oldest & First New Day in Current Month */
    'Exam Window Oldest Day':
        '#proctorU-container proctor-widget >> td[class="rdtDay rdtOld"]',
    'Exam Window Today':
        '#proctorU-container proctor-widget >> td[class="rdtDay rdtToday"]',
    'Exam Window From Days':
        '#proctorU-container proctor-widget div.rdtOpen:has([id="examWindows[0].from"]) td[class="rdtDay"]',
    'Exam Window To Next Month Days':
        '#proctorU-container proctor-widget div.rdtOpen:has([id="examWindows[0].to"]) td[class="rdtDay rdtNew"]',
    'Exam Window Last Appointment Time (calculated)':
        '#proctorU-container proctor-widget input[id="examWindows[0].lastAppointment"]',
    'Exam Window Continue Button':
        '#proctorU-container proctor-widget >> .container.footer .card-body button[class="btn btn-primary btn-block"]',
    'Deactivate ProctorU Settings':
        '#proctorU-container proctor-widget >> .container.footer .card-body button[class="btn btn-outline-danger btn-block"]',
    Deactivate:
        '#proctorU-container proctor-widget >> .container.footer .card-body button[class="btn btn-sm px-2 btn-warning"]',

    'Import Successful':
        '#proctorU-container proctor-widget >> .container.footer .modal.widget-modal button[class="close btn-sm"]',
    'Apply Update Button':
        '#proctorU-container proctor-widget >> .container.footer .card-body .widget-modal .modal-footer > button:nth-child(2)',
    'Incidents Warning Yes':
        '#proctorU-container proctor-widget >> .modal.widget-modal .modal-content.modal-content-warning button[class="btn btn-sm px-2 btn-warning"]',
    'Incidents Warning No':
        '#proctorU-container proctor-widget >> .modal.widget-modal .modal-content.modal-content-warning button[class="btn btn-sm px-2 btn-light"]',
    'Exam Window Alert Ok button':
        '#proctorU-container proctor-widget >> .modal.widget-modal .modal-content.modal-content-warning button[class="btn btn-sm px-3 btn-warning"]',
    /** end */
    'Alert title': '#proctorU-container proctor-widget .modal-dialog .modal-content-error .modal-title',
    'Alert Body': '#proctorU-container proctor-widget .modal-dialog .modal-content-error .modal-body',
    'Complete ProctorU setup Button': '#proctorU-container proctor-widget .modal-dialog .modal-content-error .modal-footer button:nth-child(1)',
    'Abandon & return to LMS Button': '#proctorU-container proctor-widget .modal-dialog .modal-content-error .modal-footer button:nth-child(2)',
    'Alert Warning Apply update button': '#proctorU-container proctor-widget button.btn-warning',
};
