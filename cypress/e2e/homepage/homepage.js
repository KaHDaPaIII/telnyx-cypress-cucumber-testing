import { Before, When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { TelnyxHomePage } from '../../pageobjects/telnyx-home-page.js';
import { Helper } from "../../support/helper.js";

const homePage = new TelnyxHomePage();
const helper = new Helper();

Before(() => {
    homePage.visit();
    helper.closeCookiePopup();
});

When("I click the “Try for free” button", () => {
    homePage.clickTryForFreeButton();
});

Then("I should see the sign up page", () => {
    cy.url().should('equal', 'https://telnyx.com/sign-up');
});

Given("desktop viewport", () => {
    cy.viewport(1600, 900);
});

Given("mobile viewport", () => {
    cy.viewport(540, 960);
});

When("I hover the “Resources” element in the header", () => {
    homePage.hoverResourcesLabel();
});

When("I click the “Developer Docs” link in the dropdown menu", () => {
    homePage.clickDeveloperDocsLink();
});

Then("I should see the “Telnyx API Documentation” page", () => {
    cy.get('#telnyx-api-v2-documentation').should('be.visible');
});

When("I hover the “Pricing” element in the header", () => {
    homePage.hoverPricingLabel();
});

When("I click the “See all Pricing” link in the dropdown menu", () => {
    homePage.clickSeeAllPricingLink();
});

Then("I should see the pricing page", () => {
    cy.url().should('equal', 'https://telnyx.com/pricing');
});

When("I scroll down to the bottom of the page", () => {
    cy.scrollTo('bottom');
});

Then("I should see the “Connect on LinkedIn” link", () => {
    homePage.getLinkedInLink().should('be.visible');
});

Then("it should redirect to the Telnyx LinkedIn page", () => {
    homePage.getLinkedInLink().should('have.attr', 'href', 'https://www.linkedin.com/company/telnyx/');
});

Then("I should see the “Follow on Twitter” link", () => {
    homePage.getTwitterLink().should('be.visible');
});

Then("it should redirect to the Telnyx Twitter page", () => {
    homePage.getTwitterLink().should('have.attr', 'href', 'https://twitter.com/telnyx');
});

Then("I should see the “Follow on Facebook” link", () => {
    homePage.getFacebookLink().should('be.visible');
});

Then("it should redirect to the Telnyx Facebook page", () => {
    homePage.getFacebookLink().should('have.attr', 'href', 'https://www.facebook.com/Telnyx/');
});

When("I click the hamburger button in the header", () => {
    homePage.clickHamburgerButton();
});

When("I click the “Resources” button in the navigation menu", () => {
    homePage.clickResourcesNavButton();
});

When("I click the “Developer Docs” link in the navigation menu", () => {
    homePage.clickDeveloperDocsNavLink();
});

When("I click the “Pricing” button in the navigation menu", () => {
    homePage.clickPricingNavButton();
});

When("I click the “See all Pricing” link in the navigation menu", () => {
    homePage.clickSeeAllPricingNavLink();
});

Then("I should see the copyright message", () => {
    homePage.getCopyrightMessage().should('be.visible');
});

Then("I should see the current year", () => {
    homePage.getCopyrightMessage().contains(new Date().getFullYear());
});