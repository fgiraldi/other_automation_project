export const AllInstitutionsView = {
    url: '/institutions',
    'Add New Institution Button': '//a[contains(@href,"/institutions/new")]',
    'Alert Success Banner': '#flash-wrapper > div > div',
    'Exams Card': '//th//a[contains(text(), "Exams")]',
    'Exam Name': '#exam',
    'Search button': 'input[value=Search]',
    'Institutions Dropdown':
        '//div[@data-react-class="Select2/Select2Institution"]//span[@class="selection"]',
    'Institution Search Box': '//input[@class="select2-search__field"]',
    'First Search Box Result': '(//li[contains(@class, "results__option")])[1]',
    Status: '//select[@id="status"]',
    'Edit Icon': 'a[data-toggle=tooltip]',
    'Institution Name Link': 'td:nth-child(1) a[href^="/institutions/"]',
    'All Institutions': 'tbody tr',
    'Institution Link': 'td > a[href*="/institutions/"]',
    'Institutions Table':
        '#content > div.container > form > div.panel.panel-default.pal > div > table > tbody > tr',
    'First Result Link': '(//table//a[contains(@href,"/institutions/")])[1]',
    'First Edit Link': '(//table//a[contains(@href,"/edit")])[1]',
    Reports: '//*[@href="/reports"]',
    'Reports Dropdown Header': '//*[@id="reportsDropdown"]',
    'Administrator Dashboard':
        '//a[@class="dropdown-item"][contains(@href,"administrator_dashboards")]',
};
