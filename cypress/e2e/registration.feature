Feature: Testing the registration page
    
    Scenario: Registration with blank inputs
        When I click the “Create Account” button
        Then I should see the error below the “Work email” field
        And I should see the error below the “Full name” field
    
    Scenario: Registration with valid random generated inputs
        Given randomly generated user credentials
        When I enter a randomly generated user credentials
        And I check the “I agree to the Terms and Conditions…” checkbox
        And I click the “Create Account” button
        Then I should see the message about successful registration or the captcha error message
