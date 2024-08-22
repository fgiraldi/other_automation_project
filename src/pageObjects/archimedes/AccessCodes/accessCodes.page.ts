export const AccessCodesPage = {
    url: '/access/codes',
    'Add New Button': 'a.btn[href="/access-codes/new"]',
    'Search Input': '#search_code',
    'Search Button': 'input[type="submit"][name="commit"][value="Search"]',
    'Access Codes Table':
        '#content > div.container > div.panel.panel-default.pal > div.table-responsive > table > tbody > tr',
    Order: 'table td[name="order-link-element"] > a',
    Code: 'table td:nth-child(1)',
    Expiration: 'table td:nth-child(4)',
    'Reactivate Button':
        'table td[name="action-element"] button[name="reactivate-button"]',
    'Toast Message': "//div[@class='alert-toast-container']//div",
};
