export const editDepartmentPage = {
    url: '',
    'Enable Annual Fee Checkbox': 'input[data-element="annual-fee-checkbox"]',
    'Enable Annual Fee Label':
        'label[for="department_annual_fee_attributes_annual_fee"]',
    'On Demand Scheduling Label':
        '//label[@for="department_on_demand_scheduling"]',
    'On Demand Scheduling Checkbox':
        '//input[@id="department_on_demand_scheduling"]',
    'Disabled On Demand Checkbox':
        '//input[@id="department_on_demand_scheduling"][@disabled]',
    'Toast Message': '//div[@role="alert"]',
    'Create Department Button': "//input[@value='Create Department']",
    'Department Name Textbox': '#department_name',
    'Department Centralized Checkbox': '#department_centralized',
    'Standalone Ucard Dropdown Option':
        '//option[contains(text(), "Standalone Ucard: $0 [$0/$0]")]',
    'Annual Fee Dropdown': '#department_annual_fee_attributes_cost_id',
    'Service Type List Dropdown': '//*[@id="department_service_type_list"]',
    'Service Type Pro Option': '//li[@role="option"][text()="Pro"]',
    'Service Type Auto Option':
        "(//div[@class='select2-drop select2-drop-multi select2-display-none select2-drop-active']/ul/li/div/span[contains(text(), 'Auto')])[1]",
    'Update Department': '//input[@value="Update Department"]',
    'Populated Service Type Option':
        '//div[@id="assigned-starts"]//button[contains(@class,"remove")]',
    'Service Type Selected': '//div[@id="assigned-starts"]//li[contains(@class,"choice")]',
    'Service Type Pro Selected': '//li[@title="Pro"]',
    'Service Type List Label': '//label[contains(text(),"Service type list")]',
    'Terms of Service Label':
        '//label[@for="department_terms_of_service_attributes_terms"]',
    'Terms of Service Notepad': '//div[@class="note-editable"]',
    'Terms of Service Textarea': '//textarea[contains(@id,"terms_of_service")]',
    'Update Department Button': '//input[@value="Update Department"]',
    'Department Disabled and Checked Verification Step Checkbox':
        '//input[contains(@name, "department[disable_verification_step]")][@disabled="disabled"][@checked="checked"]',
    'Alert Success Banner': '#flash-wrapper > div > div',
    'Remove Icon': "//button[contains(@title,'Remove item')]",
};
