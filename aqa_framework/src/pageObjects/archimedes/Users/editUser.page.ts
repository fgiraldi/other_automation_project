export const EditUserPage = {
    url: '',
    'First Name': '#user_first_name',
    'Active Checkbox': "//input[@id='user_active']",
    'Assign Password Checkbox': 'input#user_assign_password',
    'Assign Password Input': '#user_password',
    'Assign Password Confirmation Input': '#user_password_confirmation',
    State: '#state-select',
    'Update User Button': 'input[value="Update User"]',
    'Delete User Button': '//a[contains(text(),"Delete")]',

    // Extra Selectors
    'First Identifier Error':
        '(//span[contains(text(),"Identifier can")][contains(text(),"be blank")])[1]',
    'Second Identifier Error':
        '(//span[contains(text(),"Identifier can")][contains(text(),"be blank")])[1]',
    'Add Enrollment': '//a[contains(text(),"Add Enrollment")]',
    'Remove Enrollment': '//a[contains(text(),"Remove Enrollment")]',
    'Institution Enrollment Dropdown':
        "//select[contains(@name,'user[enrollments_attributes]')][contains(@name,'[institution_id]')]",
    'Enrollment Institution ID Label':
        "(//div[contains(@class,'enrollment-fields')])[2]//label[contains(text(),'Institution ID')]",
    'Enrollment API ID Label':
        "(//div[contains(@class,'enrollment-fields')])[2]//label[contains(text(),'API ID')]",
    'Remove First Enrollment': "//a[contains(text(),'Remove Enrollment')]",
    'Enrollment Institution ID Input':
        '(//input[@id="user_enrollments_attributes_0_identifier"])[1]',
    'Enrollment API ID Input':
        '(//input[@id="user_enrollments_attributes_0_identifier"])[2]',
    'Student ID Input':
        '//input[@id="user_enrollments_attributes_0_student_id"]',
    'Alert Success Banner': '#flash-wrapper > div > div',

    // Edit Instructor
    'User Dropdown': '//span[@aria-labelledby="select2-instructor_user_id-container"]',
    'User Dropdown Search': '//input[@role="searchbox"]',
    'Instructor Name Field': '//input[@name="instructor[name]"]',
    'Deactivate Button': '//a[contains(text(),"Deactivate")]',
    'Create Instructor Button': '//input[@value="Create Instructor"]',
    'Toast Message': '//div[@role="alert"]',
};
