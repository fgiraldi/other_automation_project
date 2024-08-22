export const AccessCodeShipmentsPage = {
    url: '/access-code-shipments',
    'Content Body': 'body[data-page]',
    'Flash Message': '#flash-wrapper > div.alert',
    'Add New Button': 'a[href="/access-code-shipments/new"]',
    'Access Code Shipments Table Rows': '//table//tr',
    'View Button': '.js-acs-show',
    'Edit Icon':
        '//a[contains(@href,"/access-code-shipments")][contains(@href,"/edit")]',
};

export const ViewAcessCodeShipmentModal = {
    url: '',
    Institution: '//dt[contains(text(), "Institution")]/following-sibling::dd',
    'Date Ordered':
        '//dt[contains(text(), "Date Ordered")]/following-sibling::dd',
    'Code Type': '//dt[contains(text(), "Code Type")]/following-sibling::dd',
    'Order Number':
        '//dt[contains(text(), "Order Number")]/following-sibling::dd',
    'Requested By':
        '//dt[contains(text(), "Requested By")]/following-sibling::dd',
    'Contact Name':
        '//dt[contains(text(), "Contact Name")]/following-sibling::dd',
    'Contact Email':
        '//dt[contains(text(), "Contact Email")]/following-sibling::dd',
    'Contact Phone':
        '//dt[contains(text(), "Contact Phone")]/following-sibling::dd',
    'Quantity of 30 Minutes':
        '//dt[contains(text(), "Quantity of 30")]/following-sibling::dd',
    'Quantity of 1 Hour':
        '//dt[contains(text(), "Quantity of 1 hour")]/following-sibling::dd',
    'Quantity of 2 Hours':
        '//dt[contains(text(), "Quantity of 2 hours")]/following-sibling::dd',
    'Quantity of 3 Hours':
        '//dt[contains(text(), "Quantity of 3 hours")]/following-sibling::dd',
    'Quantity of 4 Hours':
        '//dt[contains(text(), "Quantity of 4 hours")]/following-sibling::dd',
    'Bookstore Address':
        '//dt[contains(text(), "Bookstore Address")]/following-sibling::dd',
    'Overnight Shipping':
        '//dt[contains(text(), "Overnight Shipping?")]/following-sibling::dd',
    Printed: '//dt[contains(text(), "Printed?")]/following-sibling::dd',
    Shipped: '//dt[contains(text(), "Shipped?")]/following-sibling::dd',
    'Date Shipped':
        '//dt[contains(text(), "Date Shipped")]/following-sibling::dd',
    'Delete Shipment Button':
        '#js-acs-modal > div > div > div.modal-footer.text-muted.text-strong > p > a[data-method="delete"]',
    'Close Modal Button': 'button.close[data-dismiss="modal"]',
    'Show Results Dropdown':
        "//span[@class='select2-dropdown select2-dropdown--above']",
};
