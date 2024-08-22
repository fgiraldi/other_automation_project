@BROWSER|chrome
Feature: Archimedes - All Exams

    @regression @C16080
    Scenario: Only "Active" Exams are displayed by default (1)
        Given I am an institution_instructor for "moodle_lmi"
        When I navigate to "Archimedes"
            And I am on the "Login" page in "Archimedes" site
            And I type "_my email" into the "Username Input" field
            And I type "_my password" into the "Password Input" field
            And I click Sign In on Archimedes
        When I am on the "All Exams" page
            And I wait "15" seconds
        Then Every "Exam Status Field in Table" element text should be "Active"
        When I log out of Archimedes
