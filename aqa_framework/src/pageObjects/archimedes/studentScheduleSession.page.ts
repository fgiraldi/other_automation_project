export const StudentScheduleSessionPage = {
    url: '/students/reservations/',
    'Select Best Match Button':
        '#reservation-content > div.preferred-slot button[data-behavior="reservation-select"]',
    'Select Second Session Button':
        '#reservation-content div.slots .slot:nth-child(2) .slot-inner button.btn.btn-primary.btn-slot', //  > .slot-inner > button.btn.btn-primary.btn-slot',
    'Select Third Session Button':
        '#reservation-content div.slots .slot:nth-child(3) .slot-inner button.btn.btn-primary.btn-slot',
    'Select Fourth Session Button':
        '#reservation-content div.slots .slot:nth-child(4) .slot-inner button.btn.btn-primary.btn-slot',
    'Select Fifth Session Button':
        '#reservation-content div.slots .slot:nth-child(5) .slot-inner button.btn.btn-primary.btn-slot',
    'Schedule Button': '#new_reservation > input.btn.btn-primary.btn-slot',
    'Second Schedule Button':
        '#reservation-content > div.slots > .active > div > form input[type="submit"]',
    'Sessions Submit Button': '//*[@id="js-find-slots"]',
    'On Demand Submit Button': 'input[type="submit"]',
    'Submit Button': '//*[@id="js-find-slots"]',
    'Schedule Later': '#on_demand_false',
    'On Demand Radio': '#on_demand_true',
    'Modal Paragraph Text': '//div[@class="modal-body"]//*',
    'Close Modal Button':
        '//div[@class="modal-dialog"]//button[@class="close"]',
    'ToS Toast Warning':
        '//div[contains(@class,"alert-danger")][contains(text(),"You must agree to the Terms and Conditions")]',
    'Time Of Selected Session': '//div[contains(@class,"active")]//u',
    'Select Data Title': '//div[contains(text(), "Select a Date")] ',
    'Agree to ToS Button': '//div[@class="modal-dialog"]//a[@data-behavior="agree-terms-of-service"]'
};
