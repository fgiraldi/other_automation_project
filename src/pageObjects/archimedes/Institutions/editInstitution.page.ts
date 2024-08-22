export const EditInstitutionPage = {
    url: '',
    'Payment Methods Tab': 'a[href="#payment_methods"]',
    'Seconds to Inactivity Alert': '#institution_seconds_until_inactive_alert',
    'Duration of Inactivity Alert': '#institution_inactive_alert_duration',
    'On Demand Scheduling Label':
        '//label[@for="institution_on_demand_scheduling"]',
    'On Demand Scheduling Checkbox': 'input#institution_on_demand_scheduling',
    'Disable Verification Step in Prechecks Checkbox':
        'input#institution_disable_verification_step',
    'Update Institution': '//input[@value="Update Institution"]',
    'Active Pane Update Institution':
        '//div[@class="tab-pane active"]//input[@value="Update Institution"]',
    'Integrations sub-nav': '#edit-institution-integrations',
    'Add New Role Mapping Button':
        '//a[contains(text(), "Add new role mapping")]',
    'SAML Remove Attribute Button':
        '//a[contains(text(), "Rcemove Attribute")]',
    'SAML Remove Configuration Button':
        '//a[contains(text(), "Remove SAML Configuration")]',
    'SAML Student Dropdown Option': '//option[contains(text(), "Student")]',
    'SAML Single Sign-on Header':
        '//legend[contains(text(), "SAML Single Sign-on")]',
    'IDP Information Header': '//h4[contains(text(), "IDP Information")]',
    'SAML Profile Mappings': '//h5[contains(text(), "SAML Profile Mappings")]',
    'SAML Role Mappings': '//h5[contains(text(), "SAML Role Mappings")]',
    'SAML IDP Attribute':
        '(//div[@class="form-group"]//input[contains(@id,"institution_sso_saml_configuration_attributes_saml_role_mappings_attributes")])[1]',
    'Internal Attribute Dropdown':
        '//select[contains(@name,"institution[sso_saml_configuration_attributes][saml_role_mappings_attributes]")]',
    'IDP Metadata URL':
        '//input[contains(@name,"institution[sso_saml_configuration_attributes][metadata_url]")]',
    'Update Institution Error':
        '//div[@class="col-form-field"]//span[@class="help-block error"]',
    'SAML External Identifier':
        '//input[@name="institution[sso_saml_configuration_attributes][saml_attribute_mappings_attributes][0][external_attribute]"]',
    'SAML Email Address':
        '//input[@name="institution[sso_saml_configuration_attributes][saml_attribute_mappings_attributes][1][external_attribute]"]',
    'SAML First Name':
        '//input[@name="institution[sso_saml_configuration_attributes][saml_attribute_mappings_attributes][2][external_attribute]"]',
    'SAML Last Name':
        '//input[@name="institution[sso_saml_configuration_attributes][saml_attribute_mappings_attributes][3][external_attribute]"]',
    'SAML Phone Number':
        '//input[@name="institution[sso_saml_configuration_attributes][saml_attribute_mappings_attributes][4][external_attribute]"]',
    'SAML Address':
        '//input[@name="institution[sso_saml_configuration_attributes][saml_attribute_mappings_attributes][5][external_attribute]"]',
    'SAML Role':
        '//input[@name="institution[sso_saml_configuration_attributes][saml_attribute_mappings_attributes][6][external_attribute]"]',
    'LMI Workflow': '#institution_lmi_workflow',
    'LMI Download Option':
        '//*[@id="institution_lmi_workflow"]/option[@value="lmi_download"]',
    'LMI PreChecks Option':
        '//*[@id="institution_lmi_workflow"]/option[@value="lmi_pre_checks"]',
    'Show Administrator Dashboard Checkbox':
        '#institution_show_admin_dashboard',
    'Multiple Enrollments Checkbox': '#institution_multiple_enrollments',
    'Assigned Starts Tab': '//a[@href="#assigned-starts"]',
    'Service Type List Label': '//label[@for="institution_service_type_list"]',
    'Service Type Live+ Selected': '//li[@title="Live+"]',
    'Service Type List Dropdown':
        '//select[@id="institution_service_type_list"]',
    'Active Tab Update Institution':
        '//div[@class="tab-pane active"]//input[@value="Update Institution"]',
    'Populated Service Type Option':
        '//div[@id="assigned-starts"]//span[contains(@class,"remove")]',
    'Terms of Service Tab': '//a[@href="#terms_of_service"]',
    'Terms of Service Active Dialog':
        '//div[@class="tab-pane active"]//div[@class="js-form"]',
    'Toast Message': '//div[@role="alert"]',
    'Active Notepad':
        '//div[@class="tab-pane active"]//div[@class="note-editable"]',
    'Alert Success Banner': '#flash-wrapper > div > div',
    'Alert Banner 2': '(//*[@class="container"])[4]',
    'Remove Icon': "//span[contains(@class,'remove')][contains(text(),'×')]",
    'Payment Update Institution': '(//input[@value="Update Institution"])[2]',
};

export const InstitutionPaymentMethodsView = {
    url: '',
    'Enable Annual Fee Label':
        'label[for="institution_annual_fee_attributes_annual_fee"]',
    'Enable Annual Fee Checkbox': 'input[data-element="annual-fee-checkbox"]',
    'K12 Checkbox': '#institution_k12',
    'Proctor Free Submission Checkbox': '#institution_proctor_free_submission',
};
