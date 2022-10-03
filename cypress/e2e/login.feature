Feature: Testing the sign in page
    
    Scenario: Login with empty fields
        When I click the “Log in” button
        Then I should see the fields highlighted in red color
        And I should see the error messages below the fields
    
    Scenario: Login with a randomly generated email and password
        Given randomly generated user credentials
        When I enter a randomly generated user credentials
        And I click the “Log in” button
        Then I should see the error message
