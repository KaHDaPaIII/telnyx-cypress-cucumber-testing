Feature: Testing the main page
    
    Scenario: Clicking the “Try for free” button
        When I click the “Try for free” button
        Then I should see the sign up page
    
    Scenario: Clicking the “Developer Docs” link in the hoverable dropdown menu
        Given desktop viewport
        When I hover the “Resources” element in the header
        And I click the “Developer Docs” link in the dropdown menu
        Then I should see the “Telnyx API Documentation” page
    
    Scenario: Clicking the “See all Pricing” link in the hoverable dropdown menu
        Given desktop viewport
        When I hover the “Pricing” element in the header
        And I click the “See all Pricing” link in the dropdown menu
        Then I should see the pricing page
    
    Scenario: The “Connect on LinkedIn” link
        When I scroll down to the bottom of the page
        Then I should see the “Connect on LinkedIn” link
        And it should redirect to the Telnyx LinkedIn page

    Scenario: The “Follow on Twitter” link
        When I scroll down to the bottom of the page
        Then I should see the “Follow on Twitter” link
        And it should redirect to the Telnyx Twitter page

    Scenario: The “Follow on Facebook” link
        When I scroll down to the bottom of the page
        Then I should see the “Follow on Facebook” link
        And it should redirect to the Telnyx Facebook page

    Scenario: Clicking the “Developer Docs” link in the “hamburger menu”
        Given mobile viewport
        When I click the hamburger button in the header
        And I click the “Resources” button in the navigation menu
        And I click the “Developer Docs” link in the navigation menu
        Then I should see the “Telnyx API Documentation” page
    
    Scenario: Clicking the “See all Pricing” link in the “hamburger menu”
        Given mobile viewport
        When I click the hamburger button in the header
        And I click the “Pricing” button in the navigation menu
        And I click the “See all Pricing” link in the navigation menu
        Then I should see the pricing page
    
    Scenario: Checking the year in the copyright message in the footer
        When I scroll down to the bottom of the page
        Then I should see the copyright message
        And I should see the current year