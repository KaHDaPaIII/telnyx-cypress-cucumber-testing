export class TelnyxContactUsPage {
    visit(){
        cy.visit('https://telnyx.com/contact-us');
    }
    getTalkToOurProductExpertsText() {
        return cy.xpath('//main//div[2]//ul/li[1]/p[2]');
    }
    getCallingFromOverseasLabel() {
        return cy.get('section header');
    }
    getListOfCountriesAndPhoneNumbers() {
        return cy.get('section ul');
    }
    scrollCallingFromOverseasLabelIntoView() {
        this.getCallingFromOverseasLabel().scrollIntoView();
    }
}