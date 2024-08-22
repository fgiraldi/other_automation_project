export const NewUserPage = {
    url: '/users/new',

    'Error Message Header': '#flash-wrapper > div > div',

    Username: '#user_username',
    'Username Error Message':
        '//span[contains(@class,"is-invalid")][contains(text(), "Username")]',
    Email: '#user_email',
    'Email Error Message':
        '//span[contains(@class,"is-invalid")][contains(text(), "Email")]',
    'First Name': '#user_first_name',
    'First Name Error Message':
        '//span[contains(@class,"is-invalid")][contains(text(), "First name")]',
    'Last Name': '#user_last_name',
    'Last Name Error Message':
        '//span[contains(@class,"is-invalid")][contains(text(), "Last name")]',
    'Assign Password checkbox': '#user_assign_password',
    'Assign Password input': '#user_password',
    'Assign Password Confirmation input': '#user_password_confirmation',
    'Require Password Reset checkbox': '#user_require_password_reset',
    'Active checkbox': "//input[@id='user_active']",
    'Role Dropdown': '#user_role_id',
    'Institution Enrollment': '//select[@class="form-control enroll-select js-institution-id"]',
    Institution: '#s2id_user_enrollments_attributes_0_institution_id',
    'Institution Type Box':
        '//*[@id="select2-user_enrollments_attributes_0_institution_id-container"]',
    'Institution Search Box': '//*[@class="select2-search__field"]',
    'Institution Dropdown': '#select2-drop',
    Department: '#s2id_user_enrollments_attributes_0_department_id',
    'Flag Notes': 'div[class="note-editable"]',
    'Add Accommodations Button':
        '#enrollments > div.enrollment-fields.nested-fields > div:nth-child(3) > div > div > a',
    'Always Recorded checkbox':
        '#user_enrollments_attributes_0_always_recorded',
    'Institution ID': '#user_enrollments_attributes_0_identifier',
    'Student ID': '#user_enrollments_attributes_0_student_id',
    'API ID': '#user_enrollments_attributes_0_identifier',
    'Notify List': '#user_enrollments_attributes_0_notify_on_schedule_emails',
    'Remove Enrollment Button':
        '#enrollments > div.enrollment-fields.nested-fields > div:nth-child(11) > div > a',
    'Add Enrollment Button': '#enrollments > div.links.clearfix > a',
    'Second Institution ID Dropdown':
        '(//div[contains(@class,"enrollment-fields")])[2]//select[contains(@class,"institution-id")]',
    'Enrollment Error Message':
        "//div[contains(@class,'alert')][contains(text(), 'At least one enrollment must be present.')]",
    'Time Zone':
        '#user-form > div:nth-child(17) > div > span > span.selection > span',
    'Time Zone Dropdown': '#user_timezone',
    'Time Zone Input':
        'body > span > span > span.select2-search.select2-search--dropdown > input',
    'Time Zone Error Message':
        '//span[contains(@class,"is-invalid")][contains(text(), "Timezone")]',
    'Phone Mobile': '#user_phone_mobile',
    'Phone Home': '#user_phone_home',
    'Phone Work': '#user_phone_work',
    'Phone Error Message':
        "//div[contains(@class,'alert')][contains(text(), 'At least one phone number must be present.')]",
    Country: '#user_country',
    'Country Error Message':
        '//span[contains(@class,"is-invalid")][contains(text(), "Country")]',
    'Street 1': '#user_street1',
    'Street 1 Error Message':
        '//span[contains(@class,"is-invalid")][contains(text(), "Street1")]',
    'Street 2': '#user_street2',
    City: '#user_city',
    'City Error Message':
        '//span[contains(@class,"is-invalid")][contains(text(), "City")]',
    State: '#state-select',
    'State Error Message':
        '//span[contains(@class,"is-invalid")][contains(text(), "State")]',
    Zip: '#user_zip',
    'Zip Error Message':
        '//span[contains(@class,"is-invalid")][contains(text(), "Zip")]',
    'Switch to Upload Button':
        '//button[contains(text(),"Switch to Upload")]',
    'Choose File Button': '#user_pictures_attributes_0_image',
    'First Enrollment Institution ID Field':
        '(//input[@id="user_enrollments_attributes_0_identifier"])[1]',
    'First Enrollment API ID Field':
        '(//input[@id="user_enrollments_attributes_0_identifier"])[2]',
    'Second Enrollment API ID Field':
        '((//div[contains(@class,"enrollment-fields")])[2]//input[contains(@name,"identifier")])[2]',
    'Second Enrollment Institution ID Field':
        '((//div[contains(@class,"enrollment-fields")])[2]//input[contains(@name,"identifier")])[1]',

    // 'Switch to Camera Button': '',
    'Cancel Button': '#user-form > div:nth-child(32) > div > span > a',
    'Create User Button': "//input[@value='Create User']",
    'Update User Button': "//input[@value='Update User']",
    'Alert Success Banner': '#flash-wrapper > div > div',
};
