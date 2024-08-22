export const StudentMyOrdersPage = {
    'Date Column Header': '(//table//th)[1]',
    'Session name Column Header': '(//table//th)[2]',
    'Purchase Column Header': '(//table//th)[3]',
    'Refund Column Header': '(//table//th)[4]',
    'Receipt Column Header': '(//table//th)[5]',
    'Payment method Column Header': '(//table//th)[6]',
    'First View Receipt Button': '(//a[contains(@href,"/print")])[1]',
    // Receipt Page
    'Print Button': 'button.print-btn',
    'Billing Address Name': '(//h5[text()="Billing Address"]/following-sibling::ul/li)[1]',
    'Receipt Total': '//*[@id="price"]',
    'Last Transaction - Purchase total': '//table/tbody/tr[1]/td[3]'
}