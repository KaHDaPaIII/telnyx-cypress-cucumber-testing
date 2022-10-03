import { Before, When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { TelnyxHomePage } from '../../pageobjects/telnyx-home-page.js';
import { TelnyxRegistrationPage } from '../../pageobjects/telnyx-registration-page.js';
import { UserCredentials } from "../../support/generate-credentials.js";
import { Helper } from "../../support/helper.js";

const homePage = new TelnyxHomePage();
const registrationPage = new TelnyxRegistrationPage();
const helper = new Helper();

Before(() => {
    cy.fixture('mockup-data.json').then(function (mockupData) {
        this.mockupData = mockupData
    })
    homePage.visit();
    helper.closeCookiePopup();
    homePage.clickSignUpButton();
});

When("I click the “Create Account” button", () => {
    registrationPage.clickCreateAccountButton();
});

Then("I should see the error below the “Work email” field", () => {
    registrationPage.getEmailErrorMessage().should('be.visible');
});

Then("I should see the error below the “Full name” field", () => {
    registrationPage.getFullnameErrorMessage().should('be.visible');
});

Given("randomly generated user credentials", function() {
    this.testuser = new UserCredentials(this.mockupData);
});

When("I enter a randomly generated user credentials", function() {
    helper.typeRegistration(registrationPage, this.testuser);
});

When("I check the “I agree to the Terms and Conditions…” checkbox", function() {
    registrationPage.clickTermsCheckbox();
});

Then("I should see the message about successful registration or the captcha error message", function() {
    helper.ifNoCaptchaErrorThenAssertRegistration(this.testuser.email);
});
