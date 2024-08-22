export const AllUsersView = {
    url: '/users',
    'All Users Count Header': '#content > div.container > div > div > h1',
    'All Users Title': '//h1[contains(text(),"All Users")]',
    'Add New User Button':
        '#content > div.container > div > div > h1 > span > a',
    'Search Box': '#search',
    'Search button': 'input[name="commit"]',
    'Reset Search button':
        '#filter-content > div > div:nth-child(2) > div > div > span > a',
    'Users Dropdown Header':
        "//li[@class='nav-item dropdown']//a[@id='usersDropdown']",
    'All Users Dropdown Option': 'a[href="/users"]',
    'Add New User Dropdown Option': 'a[href="/users/new"]',
    'New User Title': '//h1[contains(text(),"New User")]',
    'Institutions Dropdown Header':
        "//li[@class='nav-item dropdown']//a[@id='institutionsDropdown']",
    'Institution Dropdown': '#select2-select2-institution-container',
    'Institution Input':
        '//input[@class="select2-search__field"]',
    'Institutions Title': '//h1[contains(text(), "All Active Institutions")]',
    'Orders Tab': 'a[href="#orders"]',
    'Orders Title': '//h1[contains(text(), "Orders")]',
    'Orders Dropdown Option':
        "//div[@class='dropdown-menu show']//a[@href='/orders']",
    'Orders Balance': '#orders div.card-header',
    'Ledgers Title': '//h1[contains(text(), "Service Fees Income")]',
    'Ledgers Dropdown Option':
        "//div[@class='dropdown-menu show']//a[@href='/ledgers/revenues/service-fees-income']",
    'Adjust Ledgers Title': '//h1[contains(text(), "Adjust Ledger")]',
    'Adjust Ledgers Dropdown Option':
        "//div[@class='dropdown-menu show']//a[@href='/adjust/fulfillments']",
    'Adjust Ledgers Exam': 'input[name="exam"]',
    'Adjust Ledgers Institution Dropdown': 'span#select2-select2-institution-container',
    'Adjust Ledgers Institution Search Box': '//input[@class="select2-search__field"]',
    'Adjust Ledgers Test-Taker': 'input[name="search"]',
    'Adjust Ledgers Search': 'input[value="Search"]',
    'Adjust Ledgers First Result Checkbox': '(//input[@class="check"])[1]',
    'Adjust Button': '//input[@value="Adjust"]',
    'Statements Title': '//h1[contains(text(), "Statements")]',
    'Statements Dropdown Option':
        "//div[@class='dropdown-menu show']//a[@href='/statements']",
    'New Institution Title': '//h1[contains(text(), "New Institution")]',
    'Add New Institution Dropdown Option': 'a[href="/institutions/new"]',
    'All Institutions Dropdown Option':
        "//div[@class='dropdown-menu show']//a[@href='/institutions']",
    'Role Dropdown': '#role',
    'Role Dropdown Admin': '//option[@value="1"]',
    'Status Dropdown': '#status',

    'Reservation Status Dropdown Option':
        "//div[@class='dropdown-menu show']//a[@href='/reservations/status']",
    'Reservation Status Title': '//h1[contains(text(),"Reservation Status")]',
    'Sessions Dropdown Header':
        "//li[@class='nav-item dropdown']//a[@id='reservationsDropdown']",
    'All Sessions Dropdown Option':
        "//div[@class='dropdown-menu show']//a[@href='/reservations']",
    'Sessions Title': '//h1[contains(text(), "All Sessions")]',
    'Escalations Title': '//h1[contains(text(),"Escalations")]',
    'Escalations Dropdown Option': '//a[contains(text(),"Escalations")]',
    'Incident Center Title': '//h1[contains(text(),"Incident Report Center")]',
    'Incident Center Dropdown Option':
        '//a[contains(text(),"Incident Center")]',
    'Schedule Dropdown Header':
        "//li[@class='nav-item']//a[contains(@href,'/schedule')]",
    'Schedule Title': '//h1[contains(text(), "Schedule")]',
    'Accounting Dropdown Header':
        "//li[@class='nav-item dropdown']//a[@id='accountingDropdown']",
    'Accounting Title': '//h1[contains(text(), "Accounting")]',
    'Reports Dropdown Header': '//*[@id="reportsDropdown"]',
    'Reports Title': '//h1[contains(text(), "Reports")]',
    'Access Codes Dropdown Header':
        "//li[@class='nav-item dropdown']//a[@id='accessCodesDropdown']",
    'Access Codes Dropdown Option':
        "//div[@class='dropdown-menu show']//a[@href='/access-codes']",
    'Access Code Shipments Dropdown Option':
        "//div[@class='dropdown-menu show']//a[@href='/access-code-shipments']",
    'Access Code Batches Dropdown Option':
        "//div[@class='dropdown-menu show']//a[@href='/access-code-batches']",
    'Access Codes Title': '//h1[contains(text(), "Access Codes")]',
    'Access Code Batches Title':
        '//h1[contains(text(), "Access Code Batches")]',

    'Access Code Shipments Link':
        '//a[contains(text(), "Access Code Shipments")]',

    'Access Code Shipments Title':
        "//li[@class='breadcrumb-item']//a[contains(text(), 'Access Code Shipments')]",
    'Locations Dropdown Header':
        "//li[@class='nav-item']//a[@href='/locations']",
    'Locations Title': '//h1[contains(text(), "Locations")]',
    'Locations Settings Dropdown Option':
        "//div[@class='dropdown-menu show']//a[contains(@href,'/locations')]",
    'Locations Loads Dropdown Option':
        "//div[@class='dropdown-menu show']//a[contains(@href,'/location-loads')]",
    'Utilities Dropdown Header':
        "//li[@class='nav-item dropdown']//a[@id='settingsDropdown']",
    'Settings Dropdown Option':
        "//div[@class='dropdown-menu show']//a[contains(@href,'/settings/edit')]",
    'Messaging Dropdown Option':
        "//div[@class='dropdown-menu show']//a[contains(@href,'/message_templates')]",
    'Throttles Dropdown Option':
        "//div[@class='dropdown-menu show']//a[contains(@href,'/throttles')]",
    'Incident Subtypes Dropdown Option':
        "//div[@class='dropdown-menu show']//a[contains(@href,'/incident-subtypes')]",
    'Tools Dropdown Option':
        "//li[@class='nav-item dropdown']//a[@id='toolsDropdown']",
    'Remove a Negative Balance Option':
        "//div[@class='dropdown-menu show']//a[contains(@href,'/negative_balance_removals')]",
    'Remove a Negative Balance Header':
        '//h1[contains(text(), "Negative Balance Removal Tool")]',
    'Negative Balance Success': 'div.alert.alert-wide.alert-success',
    'Negative Balance Failure': 'div.alert.alert-wide.alert-danger',
    'Messaging Title':
        '//h1[contains(text(), "Edit Account Confirmation Message Template")]',
    'Global Throttle Title': '//div[contains(text(), "Global Throttle")]',
    'Global Settings Title': '//h1[contains(text(), "Global Settings")]',
    'Incident Subtypes Title': '//h1[contains(text(), "Incident Subtypes")]',
    'Utilities Title': '//h1[contains(text(), "Global Settings")]',
    'Log in':
        '(//*[@id="content"]/div[2]/form/div[2]/div[1]/table/tbody/tr[1]/td[5]/span[1]/a[contains(text(), "Log in")])[1]',

    // table
    'Users Table': '//table',
    Users: '//table//tbody//tr',
    'Edit Icon': '//table//tr//td//a[contains(text(), "Edit")]',
    'Reset Button': 'button[id="reset"]',
    'First Result Link': '(//table//a[contains(@href,"/users/")])[1]',

    //Negative Balance Tool
    'Balance User Input': '//input[@id="user_id"]',
    Submit: "//input[@value='Submit']",
    
};
