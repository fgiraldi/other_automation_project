export const Utilities_GlobalSettingsPage = {
    url: '/settings/edit',

    /**
     * @Note Pre-checks
     */
    'Soft Reconnect Timeout Label':
        'label[for="setting_soft_reconnect_timeout"]',
    'Soft Reconnect Timeout Input': '#setting_soft_reconnect_timeout',
    'Hard Reconnect Timeout Input': '#setting_hard_reconnect_timeout',
    'Chrome OS Version Label':
        'label[for="setting_test_it_out_configuration_attributes_test_it_out_minimum_version_chrome_os"]',
    'Chrome OS Version Input':
        '#setting_test_it_out_configuration_attributes_test_it_out_minimum_version_chrome_os',
    'Chrome OS Version Input Error Message':
        "//span[@class='form-text text-danger is-invalid']",

    /**
     * @Note Other
     */
    'Update Settings Button':
        '#edit_setting_1 input[name="commit"][value="Update Settings"]',
    'Proctorless Password Injection':
        '#setting_enable_proctorless_password_injection_configuration',
    'Alert Success Banner': '#flash-wrapper > div > div',
};
