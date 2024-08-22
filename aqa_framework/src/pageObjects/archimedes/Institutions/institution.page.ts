export const institutionPage = {
    url: '',
    'Departments Link':
        '//div[contains(@class,"card-body")]//a[contains(@href,"/department")]',
    'Terms Link':
        '//div[contains(@class,"card-body")]//a[contains(@href,"/terms")]',
    'Instructors Link':
        '//div[contains(@class,"card-body")]//a[contains(@href,"/instructors")]',
    'Exams Link':
        '//div[contains(@class,"card-body")]//a[contains(@href,"/iterations")]',
    'Test-Takers Link': 'tbody [href^="/institutions/"][href$="/enrollments"]',
    'Add New Dropdown': 'button.btn.btn-primary.dropdown-toggle',
    'Department Dropdown Option': '//a[contains(@href,"/departments/new")]',
    'Term Dropdown Option': '//a[contains(@href,"/terms/new")]',
    'Instructor Dropdown Option':
        "//div[contains(@class,'dropdown-menu')]//a[contains(text(), 'Instructor')]",
    'User Dropdown Option':
        "//div[@class='dropdown-menu dropdown-menu-right show']//a[contains(text(), 'User')]",
    'Exam Dropdown Option':
        "//ul[@class='dropdown-menu dropdown-menu-right']//a[contains(text(), 'Exam')]",
    'Import from Excel Dropdown Option':
        "//ul[@class='dropdown-menu dropdown-menu-right']//a[contains(text(), 'Import from Excel')]",

    // Institution Tabs
    'Summary Tab': '//*[@id="institution-tabs"]//a[contains(text(),"Summary")]',
    'Settings Tab':
        '//*[@id="institution-tabs"]//a[contains(text(),"Settings")]',
    'Notes Tab': '//*[@id="institution-tabs"]//a[contains(text(),"Notes")]',
    'Advanced Tab':
        '//*[@id="institution-tabs"]//a[contains(text(),"Settings")]',
    'Test it out Tab':
        '//*[@id="institution-tabs"]//a[contains(text(),"Test it out results")]',

    // Settings Pane
    'Message Template Dropdown': '#email-select',
    'Message Template Edit': '//a[contains(@class, "edit-message")]',
    // Settings Template Dropdown Options
    'Account Confirmation':
        '//*[@id="email-dropdown"]//a[contains(@href,"account_confirmation")]',
    'Activated Iteration Notifier':
        '//*[@id="email-dropdown"]//a[contains(@href,"iteration_notifier")]',
    'Administration Account Confirmation':
        '//*[@id="email-dropdown"]//a[contains(@href,"administration_account_confirmation")]',
    'Administration Reservation Cancel':
        '//*[@id="email-dropdown"]//a[contains(@href,"administration_reservation_cancel")]',
    'Administration Reservation Update':
        '//*[@id="email-dropdown"]//a[contains(@href,"administration_reservation_update")]',
    'Admin Password Reset Confirmation':
        '//*[@id="email-dropdown"]//a[contains(@href,"admin_password_reset_confirmation")]',
    'Api Disabled':
        '//*[@id="email-dropdown"]//a[contains(@href,"api_disabled")]',
    'Appointment Cancelled':
        '//*[@id="email-dropdown"]//a[contains(@href,"appointment_cancelled")]',
    'Bluebird Schedule Reminder':
        '//*[@id="email-dropdown"]//a[contains(@href,"bluebird_schedule_reminder")]',
    'Escalation Created':
        '//*[@id="email-dropdown"]//a[contains(@href,"escalation_created")]',
    'Edit Button': "//h2//a[contains(text(),'Edit')]",
    'Incident Reported':
        '//*[@id="email-dropdown"]//a[contains(@href,"incident_reported")]',
    'In Person Reservation Confirmation':
        '//*[@id="email-dropdown"]//a[contains(@href,"in_person_reservation_confirmation")]',
    'In Person Reservation Reminder':
        '//*[@id="email-dropdown"]//a[contains(@href,"in_person_reservation_reminder")]',
    'Iteration Import Alert':
        '//*[@id="email-dropdown"]//a[contains(@href,"iteration_import_alert")]',
    'Multi Reservation Confirmation':
        '//*[@id="email-dropdown"]//a[contains(@href,"multi_reservation_confirmation")]',
    'Multi Reservation Scheduled':
        '//*[@id="email-dropdown"]//a[contains(@href,"multi_reservation_scheduled")]',
    'New Exam': '//*[@id="email-dropdown"]//a[contains(@href,"new_exam")]',
    'Password Reset Confirmation':
        '//*[@id="email-dropdown"]//a[contains(@href,"password_reset_confirmation")]',
    'Pending Reservation':
        '//*[@id="email-dropdown"]//a[contains(@href,"pending_reservation")]',
    'Proctoru Reservation Confirmation':
        '//*[@id="email-dropdown"]//a[contains(@href,"proctoru_reservation_confirmation")]',
    'Proctoru Reservation Update':
        '//*[@id="email-dropdown"]//a[contains(@href,"proctoru_reservation_update")]',
    'Reschedule Request':
        '//*[@id="email-dropdown"]//a[contains(@href,"reschedule_request")]',
    'Reservation Confirmation':
        '//*[@id="email-dropdown"]//a[contains(@href,"reservation_confirmation")]',
    'Reservation Invitation Reminder':
        '//*[@id="email-dropdown"]//a[contains(@href,"reservation_invitation")]',
    'Reservation Reminder':
        '//*[@id="email-dropdown"]//a[contains(@href,"reservation_reminder")]',
    'Reservation Scheduled':
        '//*[@id="email-dropdown"]//a[contains(@href,"reservation_scheduled")]',
    'Reservation Update':
        '//*[@id="email-dropdown"]//a[contains(@href,"reservation_update")]',
    'Reset Password':
        '//*[@id="email-dropdown"]//a[contains(@href,"reset_password")]',
    'Throttle Max Alert':
        '//*[@id="email-dropdown"]//a[contains(@href,"throttle_max_alert")]',
    'Verified Confirmation':
        '//*[@id="email-dropdown"]//a[contains(@href,"verified_confirmation")]',

    // Message Template Edit Page
    'Message Template Body': "//input[@name='message_template[body_html]']",
    'Update Template Button': "//input[@value='Update Message template']",
    'Revert to Original Button':
        "//button[contains(text(),'Revert to Original')]",
    'trix editor': 'trix-editor',
    'Edited Template': '//div[contains(text(),"Automated_Edited_Message")]',

    // Departments View
    'Departments Table':
        '#content > div.container > form > div.panel.panel-default.pal > div > table > tbody > tr',
    'Department Name Link':
        'a[href^="/institutions/"][href*="/departments/"][href$="/iterations"]',
    'Edit Department Icon':
        'a[href^="/institutions/"][href*="/departments/"][href$="/edit"]',
    'Search Box': '//input[@id="search"]',
    'First Edit Link': '(//table//a[contains(@href,"/edit")])[1]',

    // Terms View

    // Instructors View

    // Exams View
    'Exams Table': 'table > tbody > tr',
    'Exam Search Box': '#exam',
    'Edit Exam Icon': '//table//a[contains(@href,"/edit")',
    'First Edit Button': '//table//a[@title="Edit"]',
    'Search Button': '//input[@value="Search"]',

    // Test-Takers View

    //Reservations View
    'First Reservation Link': '(//table//a[contains(@href,"/reservations/")])[1]',
};
