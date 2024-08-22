export const NavigationHeader = {
    url: '',
    Utilities: 'div.app-navigation li > a[href="/settings/edit"]',
    Reports: "//a[@href='/reports']",
    Institutions: '//a[contains(@id,"institutionsDropdown")]',
    'All Institutions':
        "//div//a[@class='dropdown-item' and @href='/institutions'][contains(text(), 'All Institutions')]",
    'Utility Settings':
        "//div//a[@class='dropdown-item' and @href='/settings/edit'][contains(text(), 'Settings')]",
};
