export const MyCartPage = {
    url: '',
    Heading: '#content > div > div:nth-child(1) > div > h1',
    'Cart Table':
        '#content > div > div:nth-child(2) > div.col-md-8 > div > div > table',
    'Access Code Input': '#access_code',
    'Apply Access Code Button':
        'div[class*="student-access-code"] > div > span > button',
    'Error Toast Message': "//div[@class='alert-toast-container']//div",
    'Access Code Used': 'table > tbody > tr > th.text-success',
    'Balance Payment': '//tr[contains(@class, "balance_payment")]/th[2]',
    Total:
        'table > tbody > tr.totals.text-muted > th.js-order-total.text-right',
    'Proceed to Payment button': 'a[href="/students/order/payment"]',
};
