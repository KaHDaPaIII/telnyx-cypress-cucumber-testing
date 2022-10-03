import { Before, When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { TelnyxContactUsPage } from '../../pageobjects/telnyx-contact-us-page.js';
import { Helper } from "../../support/helper.js";

const contactUsPage = new TelnyxContactUsPage();
const helper = new Helper();

Before(() => {
    contactUsPage.visit();
    helper.closeCookiePopup();
});

When("I see “Talk to our product experts” section", () => {
    contactUsPage.getTalkToOurProductExpertsText().should('be.visible');
});

Then("I should see the phone number", (datatable) => {
    datatable.hashes().forEach(element => {
        contactUsPage.getTalkToOurProductExpertsText().contains(element.phonenumber);
    });
});

When("I scroll down to the “Calling from overseas?” section", () => {
    contactUsPage.scrollCallingFromOverseasLabelIntoView();
});

Then("I should see the list of countries and corresponding phone numbers", (datatable) => {
    datatable.hashes().forEach(element => {
        contactUsPage.getListOfCountriesAndPhoneNumbers().children()
        .should('contain', element.country)
        .and('contain', element.phonenumber);
    });
});