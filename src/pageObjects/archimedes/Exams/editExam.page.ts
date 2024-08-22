export const EditExamPage = {
    url: '',
    'Edit Exam Header': '//h1[contains(text(),"Edit")]',
    'Error Message Header': '#flash-wrapper > div > div',
    'Low Button Checked': 'input[id="iteration_preset_low"][checked="checked"]',
    'Medium Button Checked':
        'input[id="iteration_preset_medium"][checked="checked"]',
    'High Button Checked':
        'input[id="iteration_preset_high"][checked="checked"]',
    'Custom Button Checked':
        'input[id="iteration_preset_custom"][checked="checked"]',
    'Toast Message': '//div[@role="alert"]',
    'Browser Tabs DropDown': '//select[@id="iteration_browser_tabs"]',
    'Copy Paste DropDown': '//select[@id="iteration_allow_copy_paste"]',
    'Browser Tabs Allowed Option':
        '//select[@id="iteration_browser_tabs"]//option[@value="allowed"]',
    'Exam Window Size DropDown':
        '//select[@id="iteration_window_size_allowed"]',
    'Copy Paste Allowed Option':
        '//select[@id="iteration_allow_copy_paste"]//option[@value="enabled"]',
    'Exam Window Size Resizable Option':
        '//select[@id="iteration_window_size_allowed"]//option[@value="resized"]',
    'Third Party DropDown': '//select[@id="iteration_lost_focus"]',
    'Third Party Allowed Option':
        '//select[@id="iteration_lost_focus"]//option[@value="allowed"]',
    'Browser Tabs Restricted Option':
        '//select[@id="iteration_browser_tabs"]//option[@value="restricted"]',
    'Copy Paste Restricted Option':
        '//select[@id="iteration_allow_copy_paste"]//option[@value="disabled"]',
    'Exam Window Size Fullscreen Option':
        '//select[@id="iteration_window_size_allowed"]//option[@value="fullscreen"]',
    'Exam Window Size Maximized Option':
        '//select[@id="iteration_window_size_allowed"]//option[@value="maximized"]',
    'Third Party Restricted Option':
        '//select[@id="iteration_lost_focus"]//option[@value="secure_restricted"]',
    'Third Party Create Incident Option':
        '//select[@id="iteration_lost_focus"]//option[@value="restricted"]',
    'Exam Title Input': '#iteration_exam_attributes_name',
    'Exam Password Input': '#iteration_exam_password',
    'Exam Password Confirmation Input': '#iteration_exam_password_confirmation',
    'Password Injection URL':
        '#iteration_password_injection_config_attributes_url',
    'On Demand Scheduling Label':
        '//label[@for="iteration_on_demand_scheduling"]',
    'Disabled On Demand Checkbox':
        '//input[@id="iteration_on_demand_scheduling"][@disabled]',
    'On Demand Scheduling Checkbox': 'input#iteration_on_demand_scheduling',
    'Other Resources Input':
        '//textarea[@id="iteration_other_resources"]/ancestor::div[@class="col-form-field col-sm-12"]',
    'Other Resources Toolbox Bar': '//div[@role="toolbar"]',
    'Exam Duration Input': '#iteration_duration',
    'Submit Button': "//input[contains(@value,'Submit')]",
    'Submission Fail Message': '#flash-wrapper .alert-danger',
    'Additional Exam Notes': '//textarea[@id="iteration_notes_html"]',
    'Whitelist Url': '#iteration_whitelist_urls_attributes_1_url',
    'Custom Radio Button': '#iteration_preset_custom',
    'Enable Annual Fee Label':
        'label[for="iteration_annual_fee_attributes_annual_fee"]',
    'Enable Annual Fee Checkbox': '#iteration_annual_fee_attributes_annual_fee',
    'Student Pay Model Radio': 'input#student_pay_model',
    'Institution Pay Model Radio': 'input#institution_pay_model',
    'Suspend Annual Fee Checkbox': '#iteration_annual_fee_attributes_suspended',
    'Annual Fee Cost Dropdown': '#iteration_annual_fee_attributes_cost_id',
    'Department Dropdown': '#iteration_exam_attributes_department_id',
    'Active Checkbox': '#iteration_active',
    'Term Dropdown': '#iteration_term_id',
    'Type Dropdown': '#iteration_type',
    'Cost Dropdown': '#iteration_cost_id',
    'Split Dropdown': '#iteration_split_id',
    'No Resources Allowed Checkbox': '#iteration_no_resources_allowed',
    'Expected No. of Test-Takers Input': '#iteration_expected_test_takers',
    'Name Input': '#iteration_contact_name',
    'Email Input': '#iteration_contact_email',
    'Phone Number Input': '#iteration_contact_phone',
    'Disable Max Attempts Checkbox': '#max_attempts',
    'Exam URL': '#iteration_exam_url',
    'Last Appointment Year Dropdown':
        "(//div[contains(@class,'exam-window-picker')]//select[contains(@id,'ends_at')])[1]",
    'Low Preset': 'input#iteration_preset_low',
    'Medium Preset': 'input#iteration_preset_medium',
    'High Preset': 'input#iteration_preset_high',
    'Custom Preset': 'input#iteration_preset_custom',
    'Enforce Retake Policy Checkbox': '#iteration_enforce_retake_policy',
    'Failed Attempt Input':
        '(//input[contains(@name, "iteration[retake_periods_attributes]")][@value="1"])[1]',
    'Cooldown Period Input 1':
        "(//input[@data-behavior='retake-period-value'])[1]",
    'Cooldown Period Input 2':
        "(//input[@data-behavior='retake-period-value'])[1]",
    'Disable Verification Step in Prechecks Checkbox':
        'input#iteration_disable_verification_step',
    'Disabled and Checked Verification Step Checkbox':
        '//input[contains(@name, "iteration[disable_verification_step]")][@disabled="disabled"][@checked="checked"]',
    'Password Injection Error': '.form-text.text-danger.is-invalid',
    'Password Field':
        '#iteration_password_injection_config_attributes_field_id',
    'Password Submit':
        '#iteration_password_injection_config_attributes_password_submit_button_id',
    'Exam Submit':
        '#iteration_password_injection_config_attributes_exam_submit_button_id',
    'Lost Focus Modal No': '#iteration-lost-focus-modal-no',
    'Lost Focus Modal Yes': '#iteration-lost-focus-modal-yes',
    'Service Type Live+ Selected': '//li[@title="Live+"]',
    'Service Type Pro Selected': '//li[@title="Pro"]',
    'Service Type Unintegrated Auto Selected':
        '//li[@title="Unintegrated Auto"]',
    'Service Type List Label': '//label[contains(text(),"Service type list")]',
    'Terms of Service Tab': '//a[@href="#terms-of-service"]',
    'Terms of Service Trix Editor':
        '//trix-editor[@id="iteration_terms_of_service"]',
    'Terms of Service Trix Content':
        '//trix-editor[@id="iteration_terms_of_service"]//div',
    'Alert Success Banner': '#flash-wrapper > div > div',
    'Service Type List Dropdown': '//select[@id="iteration_service_type_list"]',
    'Remove Icon': "//span[contains(@class,'remove')][contains(text(),'×')]",
};
