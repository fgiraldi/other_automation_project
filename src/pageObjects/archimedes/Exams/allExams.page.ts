export const AllExamsPage = {
    url: '',
    'Exam Dropdown': 'input[id="exam"]',
    'Exam Status': 'select[id="status"]',
    'Instructor Searchbox': 'input#instructor',
    'Exams Table':
        'form[action^="/institutions/"][action$="/iterations"]  table > tbody > tr',
    'Exam Title Link': 'td:nth-child(1) > a',
    'Edit Icon': 'a[title="Edit"]',
    'Search button': "//input[@value='Search']",
    'First Result Link': '(//table//a[contains(@href,"/iterations/")])[1]',
    'Exam Status Field in Table': '//tbody//td[6]',
    'Add New Dropdown': 'button.btn.btn-primary.dropdown-toggle',
    'Exam Link': 'li > a[href*="/iterations/new"]',
    'First Edit Link': '(//table//a[contains(@href,"/edit")])[1]',
};
