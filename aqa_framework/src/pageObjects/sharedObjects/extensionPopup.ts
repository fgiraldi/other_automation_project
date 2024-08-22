export const ExtensionPopup = {
    'Extension Disabled Error':
        "//div[@class='alert-modal']//h1[contains(text(), 'Your exam session has been terminated because the ProctorU extension is required for testing.')]",
    'Alert Info': 'div.alert-modal div',
    'Live Chat Link': 'div.alert-modal a',
    'Alert Text': 'div.alert-modal',
    'OK Button': 'div.alert-modal button',
    'Resume Button': '//button[contains(text(), "Resume")]',
    'Time To Suspend': 'div.alert-modal span',
    'End Session AutoSubmit Button':
        'div.auto-submit-container div |shadow| span div.auto-submit-button',
    'End Session AutoSubmit Container': 'div.auto-submit-container',
};
