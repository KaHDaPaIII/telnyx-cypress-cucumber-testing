import { Before, When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { TelnyxHomePage } from '../../pageobjects/telnyx-home-page.js';
import { TelnyxLoginPage } from '../../pageobjects/telnyx-login-page.js';
import { UserCredentials } from "../../support/generate-credentials.js";
import { Helper } from "../../support/helper.js";

const homePage = new TelnyxHomePage();
const loginPage = new TelnyxLoginPage();
const helper = new Helper();

Before(() => {
    cy.fixture('mockup-data.json').then(function (mockupData) {
        this.mockupData = mockupData
    })
    homePage.visit();
    helper.closeCookiePopup();
    homePage.clickLogInButton();
});

When("I click the “Log in” button", () => {
    loginPage.clickLoginButton();
});

Then("I should see the fields highlighted in red color", () => {
    loginPage.getEmailInput()
    .should('have.css', 'border-color', 'rgb(255, 102, 102)');
    loginPage.getPasswordInput()
    .should('have.css', 'border-color', 'rgb(255, 102, 102)');
});

Then("I should see the error messages below the fields", () => {
    loginPage.getEmailErrorMessage()
    .should('be.visible')
    .invoke('attr', 'class').should('contain','TextField__ErrorMessage');
    loginPage.getPasswordErrorMessage()
    .should('be.visible')
    .invoke('attr', 'class').should('contain','TextField__ErrorMessage');
});

Given("randomly generated user credentials", function() {
    this.testuser = new UserCredentials(this.mockupData);
});

When("I enter a randomly generated user credentials", function() {
    helper.typeLogin(loginPage, this.testuser);
});

Then("I should see the error message", () => {
    cy.get('[data-testid="login.signin.message"]').should('be.visible');
});