export const adminPageScantron = {
    // General / Extra Selectors
    'Logout Button': '//a[@id="menuLogout"]',

    // Exception Management Panel
    'Search Criteria Button':
        '//cas-exception-management-container//button[contains(@class, "btn-advanced-search")]',
    'Site Dropdown': '//select[@ng-model="advancedSearch.Site"]',
    'Username Input': '//input[@id="inputUserName"]',
    'First Application (Testing)':
        '//div[@class="exception-management-results-grid-container"]//td[@data-title-text="Status" and contains(text(),"Testing")]',
    'I want to Button': '//button[contains(text(),"I want to...")]',
    'Search Button':
        '//div[@class="advanced-search-btn-container"]//button[contains(text(), "Search")]',

    // Selectors because of bad UI
    'First Application':
        '(//div[@class="exception-management-results-grid-container"]//td[@data-title-text="Status"])[1]',
    'Second Application':
        '(//div[@class="exception-management-results-grid-container"]//td[@data-title-text="Status"])[2]',
    'Third Application':
        '(//div[@class="exception-management-results-grid-container"]//td[@data-title-text="Status"])[3]',
    'Fourth Application':
        '(//div[@class="exception-management-results-grid-container"]//td[@data-title-text="Status"])[4]',
    'Fifth Application':
        '(//div[@class="exception-management-results-grid-container"]//td[@data-title-text="Status"])[5]',
    'Sixth Application':
        '(//div[@class="exception-management-results-grid-container"]//td[@data-title-text="Status"])[6]',
    'Seventh Application':
        '(//div[@class="exception-management-results-grid-container"]//td[@data-title-text="Status"])[7]',

    // I want to... Modal
    'Give Extension Button':
        '//div[contains(@class, "action-panel")]//i[contains(@class,"fa-calendar")]',
    'Waive Eligibility Requirement Button':
        '//div[contains(@class, "action-panel")]//i[contains(@class,"fa-hand-o-right")]',
    'Change Status Button':
        '//div[contains(@class, "action-panel")]//i[contains(@class,"fa-share")]',
    'Delete App Button':
        '//div[contains(@class, "action-panel")]//i[contains(@class,"fa-trash-o")]',
    'Create App Button':
        '//div[contains(@class, "action-panel")]//i[contains(@class,"fa-file-o")]',
    'Edit App Button':
        '//div[contains(@class, "action-panel")]//i[contains(@class,"fa-edit")]',
};
