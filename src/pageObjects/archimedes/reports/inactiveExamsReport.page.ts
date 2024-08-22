export const inactiveExamsReportPage = {
    url: '/reports/inactive-exams',
    'Export Button': 'a[href^="/reports/inactive-exams"][href*="format="]',
    'Start Date Input': '//input[@name="start_date"]',
    'End Date Input': '//input[@name="end_date"]',
    'Error Message': '#flash-wrapper > div > div',
    Search: 'input[value="Search"]',
    'Edit Exam':
        '//div[@class="dropdown-menu dropdown-menu-right show"]//a[contains(text(), "Edit Exam")][1]',
    'Edit Exam Window': '//a[contains(text(), "Edit Exam Window")]',
    'View Exam': '//a[contains(text(), "View Exam")]',
    'View Term': '//a[contains(text(), "View Term")]',
    'View Institution': '//a[contains(text(), "View Institution")]',
    'Inactive Exams Table': 'table > tbody > tr',
    'First Result Link': '(//table//a[contains(@href,"/institutions/")])[1]',
    'Institution Name': 'table > tbody > tr:nth-child(1) > td:nth-child(2) > a',
    'Dropdown List': 'button.btn.btn-secondary.btn-sm.dropdown-toggle',
};
