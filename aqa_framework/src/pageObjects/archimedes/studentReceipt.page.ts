export const StudentReceiptPage = {
    url: '/students/order/receipt',
    'My Sessions button on Receipt Page': '//a[@href="/students/reservations"]',
    'Order Success Message': '#content > div > div:nth-child(1) > div > h1',
    'My Sessions Header Button':
        '//div[@id="navbarSupportedContent"]//a[@href="/students/reservations"]',
    'Continue Button': '//input[@value="Continue"]',
    'Charge to Account Button': '//input[@value="Charge to Account"]',
    'Reschedule Reservation Id Link':
        '//a[contains(@href,"/students/reschedule/reservations/")]',
    'Reservation Id Link':
        '//*[contains(@href,"/students/detail/reservations")] | //*[contains(@href,"/students/reschedule/reservations")]',
    'Alert Success Banner': '#flash-wrapper > div > div',
};
