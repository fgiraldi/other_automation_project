export const AdjustLedgersPage = {
    url: '/adjust',
    'Add New User Button':
        '#content > div.container > div > div > h1 > span > a',
    'Search Box': '#search',
    'Search Button': 'input[name="commit"]',
    'Reset Search button':
        '#filter-content > div > div:nth-child(2) > div > div > span > a',
    'Institutions Dropdown': '#select2-select2-institution-container',
    'Institution Search Box': '//input[@class="select2-search__field"]',
    'Institution Input':
        'body > span > span > span.select2-search.select2-search--dropdown > input',
    'Exam Search Box': '//input[@name="exam"]',
    'Adjust Ledgers Title': '//h1[contains(text(), "Adjust Ledger")]',
    'Adjust Ledgers Dropdown Option':
        "//div[@class='dropdown-menu show']//a[@href='/adjust/fulfillments']",
    'Adjust Button': '//input[@value="Adjust"]',

    // table
    'Users Table': '//table',
    Users: '//table//tbody//tr',
    'Edit Icon': '//table//tr//td//a[contains(text(), "Edit")]',
    'Reset Button': 'button[id="reset"]',
    'First Checkbox': '(//table//input[@type="checkbox"])[1]',
};
