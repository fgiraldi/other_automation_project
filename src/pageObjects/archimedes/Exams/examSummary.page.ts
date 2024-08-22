export const ExamSummaryPage = {
    url: '',
    'Quiz Title Field': '.text-ellipsis.text-ellipsis-50',
    'Exam Options Dropdown': "//button[contains(@class,'dropdown-toggle')]",
    'Edit This Exam':
        '//div[contains(@class,"show")]//a[contains(text(), "Edit This Exam")]',
    'Department Field':
        '//dt[span[contains(text(), "Department")]]/following-sibling::dd',
    'Instructor Field':
        '//dt[span[contains(text(), "Instructor")]]/following-sibling::dd',
    'Term Field': '//dt[span[contains(text(), "Term")]]/following-sibling::dd',
    'Created Field':
        '//dt[span[contains(text(), "Created")]]/following-sibling::dd',
    'Updated Field':
        '//dt[span[contains(text(), "Updated")]]/following-sibling::dd',
    'Exam Uuid Field':
        '//dt[span[contains(text(), "Exam Uuid")]]/following-sibling::dd',
    'Iteration Uuid Field':
        '//dt[span[contains(text(), "Iteration")]]/following-sibling::dd',
    'Status Field': '//dt[.="Status"]/following-sibling::dd[1]',
    'Imported Field':
        '//dt[span[contains(text(), "Imported")]]/following-sibling::dd',
    'Open Invite Field':
        '//dt[span[contains(text(), "Open Invite")]]/following-sibling::dd',
    'URL Field': '//dt[contains(text(), "URL")]/following-sibling::dd',
    'Password Field':
        '//dt[contains(text(), "Password")]/following-sibling::dd/kbd',
    'Type Field': '//dt[span[contains(text(), "Type")]]/following-sibling::dd',
    'Duration Field':
        '//dt[span[contains(text(), "Duration")]]/following-sibling::dd',
    'Effective Dates Field':
        '//dt[span[contains(text(), "Effective Dates")]]/following-sibling::dd[1]',
    'Exam Contact Name Field':
        '//dt[span[contains(text(), "Name")]]/following-sibling::dd',
    'Exam Contact Email Field':
        '//dt[span[contains(text(), "Email")]]/following-sibling::dd',
    'Exam Contact Phone Field':
        '//dt[span[contains(text(), "Phone")]]/following-sibling::dd',
    'Exam Notes Field':
        '//dt[span[contains(text(), "Notes")]]/following-sibling::dd',
    'Exam Summary': 'a[aria-controls="summary"]',
    Notes: 'a[aria-controls="notes"]',
    'Additional Exam notes': '#notes',
    'Other Resources Text': '#notes',
    'Permitted Resources':
        '//h4[contains(text(), "Permitted Resources")]/following-sibling::ul',
    "Message Textbox": "//*[@name='message_template[body_html]']",

    // Exam Messages
    'Messages Dropdown Option': '//a[contains(text(),"Messages")]',
    'Update Template Button': '//input[@value="Update Message template"]',
    'Revert to Original Button':
        '//button[contains(text(),"Revert to Original")]',
    'trix editor': '//form[@class="edit_message_template"]//trix-editor',
    'Administration Reservation Cancel':
        '//a[contains(text(),"Administration Reservation Cancel")]',
    'Administration Reservation Update':
        '//a[contains(text(),"Administration Reservation Update")]',
    'Bluebird Schedule Reminder':
        '//a[contains(text(),"Bluebird Schedule Reminder")]',
    'Escalation Created': '//a[contains(text(),"Escalation Created")]',
    'Incident Reported': '//a[contains(text(),"Incident Reported")]',
    'In Person Reservation Confirmation':
        '//a[contains(text(),"In Person Reservation Confirmation")]',
    'In Person Reservation Reminder':
        '//a[contains(text(),"In Person Reservation Reminder")]',
    'Multi Reservation Confirmation':
        '//a[contains(text(),"Multi Reservation Confirmation")]',
    'Multi Reservation Scheduled':
        '//a[contains(text(),"Multi Reservation Scheduled")]',
    'Pending Reservation': '//a[contains(text(),"Pending Reservation")]',
    'Proctoru Reservation Confirmation':
        '//a[contains(text(),"Proctoru Reservation Confirmation")]',
    'Proctoru Reservation Update':
        '//a[contains(text(),"Proctoru Reservation Update")]',
    'Reservation Confirmation':
        '//a[contains(text(),"Reservation Confirmation")][not(contains(text(),"Person"))][not(contains(text(),"Multi"))][not(contains(text(),"Proctoru"))]',
    'Reservation Invitation Reminder':
        '//a[contains(text(),"Reservation Invitation Reminder")]',
    'Reservation Reminder':
        '//a[contains(text(),"Reservation Reminder")][not(contains(text(),"Person"))][not(contains(text(),"Multi"))][not(contains(text(),"Proctoru"))]',
    'Reservation Scheduled':
        '//a[contains(text(),"Reservation Scheduled")][not(contains(text(),"Person"))][not(contains(text(),"Multi"))][not(contains(text(),"Proctoru"))]',
    'Reservation Update':
        '//a[contains(text(),"Reservation Update")][not(contains(text(),"Administration"))][not(contains(text(),"Proctoru"))]',
    'Edited Exam Template':
        '//div[contains(text(),"Automated_Edited_Exam_Message")]',
    'Edited Institution Template':
        '//div[contains(text(),"Automated_Edited_Message")]',
    'Service Level Badge':
        "(//div[@class='card-body']//span[contains(@class,'badge')])[1]",
    'Service Line Badge':
        "(//div[@class='card-body']//span[contains(@class,'badge')])[2]",
    'Exam Summary Tab': 'a[aria-controls="summary"]',
    'Notes Tab': 'a[aria-controls="notes"]',
    'Toast Message': '//div[@role="alert"]',
};
