@update_user_passwords
Feature: Update User Passwords

    Below is a scenario that will update a user's password in Archimedes.
    Add any users and their new passwords to the Examples list below to update
    the user's password.

    Scenario Outline: Update User passwords: "<User to Update>"
        Given I am a superadmin for "Archimedes"
        When I navigate to "Archimedes"
            And I am on the "Login" page in "Archimedes" site
            And I type "_my email" into the "Username Input" field
            And I type "_my password" into the "Password Input" field
            And I click the "Sign In Button" element
        When I am on the "All Users" page
            And I type "<User to Update>" into the "Search Box" field
            And I click the "Search button" element
            And I click the "Edit Icon" element for "<User to Update>" in "Users" list
        When I am on the "Edit User" page
            And I check the "Assign Password Checkbox" element
            And I type "<New Password>" into the "Assign Password Input" field
            And I type "<New Password>" into the "Assign Password Confirmation Input" field
            And I click the "Update User Button" element
            And I log out of Archimedes
        When I am on the "Login" page
            And I type "<User to Update>" into the "Username Input" field
            And I type "<New Password>" into the "Password Input" field
            And I click the "Sign In Button" element
            And I log out of Archimedes

        Examples:
            | id  | User to Update         | New Password           |
            | 130 | ahmed16@fakeqatest.com | WhatawonderfulPassw0rd |

