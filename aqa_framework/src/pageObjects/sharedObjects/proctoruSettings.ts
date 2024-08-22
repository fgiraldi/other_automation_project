export const ProctorUSettings = {
    'ProctorU Toggle':
        '//div[.="ProctorU" and contains(@class, "label")]/following-sibling::div/div',
    // Not for Blackboard and Brightspace
    'Autogenerated Password Toggle': '(//div[@class="onoffswitch"])[2]',
    'Apply Button': 'button.update-tooltip-apply',
    'Low Preset Radio': '#low',
    'Medium Preset Radio': '#medium',
    'High Preset Radio': '#high',
    'Lost Focus Allowed': '//*[@id="lost-focus"]/*[@value="allowed"]',
    'Lost Focus Restricted':
        '//*[@id="lost-focus"]/*[@value="secure_restricted"]',
    'Lost Focus Create Incient': '//*[@id="lost-focus"]/*[@value="restricted"]',
    'Custom Radio': '#preset-session-custom',
    'Browser Tabs Help Box': '//div[@class="help-block"][1]',
    'Copy Paste Help Box': '//div[@class="help-block"][2]',
    'Exam Window Help Box': '//div[@class="help-block"][3]',
    'Third Party Help Box': '//div[@class="help-block"][4]',
    'Send Notifications Checkbox': '//input[@id="send_notifications"]',
    'Send Notifications Label': '//*[@for="send_notifications"]',
    'Email Checkbox': '#email_notifications',
    'Push Checkbox': '#push_notifications',
    'SMS Checkbox': '#sms_notifications',
    'Emails Dropdown': 'ul.select2-selection__rendered',
    'First Student Email':
        '//ul[@class="select2-results__options"]/li[position()=1]',
    'Session Type Dropdown': '#session-type',
    'Browser Tabs Dropdown': '#browser-tabs',
    'Window Size Dropdown': '#window-size-allowed',
    'Application Focus Dropdown': '#lost-focus',
    'Copy Paste Dropdown': '#copy-paste',
    'Textbook Checkbox': '#textbook',
    'Note Cards Checkbox': '#note_cards',
    'Whiteboard Checkbox': '#whiteboard',
    'Excel Checkbox': '#excel',
    'ProctorU Settings Tab':
        '//a[contains(text(), "ProctorU Settings") or contains(text(), "ProctorU settings")]', // Not for Blackboard
    'ProctorU Notifications Tab':
        '//a[contains(text(), "ProctorU Notifications") or contains(text(), "ProctorU notifications")]', // Not for Blackboard
    'No Students Error': '//li[.="No results found"]',
    'Department Dropdown': '#department_id',
    'Term Dropdown': '#term_id',
    'Id Process Dropdown': '#id_process_id',
    'Name Field': '#name',
    'Add Window Button': '//button[.="Add window"]',
    'Exam Windows':
        '.update-session-configuration-ucard-window .proctoru-ui-panel',
    'Remove Window Button': '//button[.="Remove window"]',
    'No resources allowed': '#no_resources_allowed',
    'No to Third party Application use':
        'button[class="basic proctoru-ui-btn"]',
    'Yes to Third party Application use': 'button[class="proctoru-ui-btn"]',
    'E-books Computer': '#ebook_computer',
    'Computer Calculator': '#computer_calculator',
    'PDF Notes': '#pdf_notes',
    'Word Notes': '#word_notes',
    'Powerpoint Notes': '#powerpoint_notes',
    'Excel notes': '#excel_notes',
    Excel: '#excel',
    Word: '#word',
    Powerpoint: '#powerpoint',
    Notepad: '#notepad',
    Paint: '#paint',
    SPSS: '#spss',
    'Resources Tooltip': '//div[@class="resources-tooltip show"]',
    'No Resources Allowed Checkbox': '#no_resources_allowed'
};
