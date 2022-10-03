export class TelnyxHomePage {
    visit() {
        cy.visit('https://telnyx.com/');
    }
    getTryForFreeButton() {
        return cy.get('main button[type="submit"]');
    }
    clickTryForFreeButton() {
        this.getTryForFreeButton().click();
    }
    getTalkToAnExpertButton() {
        return cy.get('header a[href="/contact-us"]').first();
    }
    getSignUpButton() {
        return cy.get('header a[href="/sign-up"]').first();
    }
    getLogInButton() {
        return cy.get('header a[href="https://portal.telnyx.com/"]:last-of-type');
    }
    getResourcesLabel() {
        return cy.get('header ul > li:nth-of-type(4)');
    }
    getHamburgerButton() {
        return cy.get('[role="button"]');
    } 
    getResourcesNavButton() {
        return cy.xpath('//nav//div[count(div)=6]/div[4]/button');
    }
    getPricingNavButton() {
        return cy.xpath('//nav//div[count(div)=6]/div[6]/button');
    }
    getDeveloperDocsNavLink() {
        return cy.xpath('//nav//div[count(div)=6]/div[1]/a');
    }
    getSeeAllPricingNavLink() {
        return cy.xpath('//nav//div[count(div)=9]/div[9]/a');
    }
    getPricingLabel() {
        return cy.get('header ul > li:nth-of-type(6)');
    }
    getDeveloperDocsLink() {
        return cy.get('header ul > li:nth-of-type(4) a').first();
    }
    getSeeAllPricingLink() {
        return cy.get('header ul > li:nth-of-type(6) a[href="/pricing"]');
    }
    getLinkedInLink() {
        return cy.get('[data-e2e="Footer--navItem-social"] ul > li:nth-child(1) > a');
    }
    getTwitterLink() {
        return cy.get('[data-e2e="Footer--navItem-social"] ul > li:nth-child(2) > a');
    }
    getFacebookLink() {
        return cy.get('[data-e2e="Footer--navItem-social"] ul > li:nth-child(3) > a');
    }
    getCopyrightMessage() {
        return cy.xpath('//footer//div[contains(text(),"©")]');
    }
    hoverResourcesLabel() {
        this.getResourcesLabel().realHover({scrollBehavior: false});
    }
    clickHamburgerButton() {
        this.getHamburgerButton().click();
    }
    clickResourcesNavButton() {
        this.getResourcesNavButton().click();
    }
    clickPricingNavButton() {
        this.getPricingNavButton().click();
    }
    clickSeeAllPricingNavLink() {
        this.getSeeAllPricingNavLink().click();
    }
    clickDeveloperDocsNavLink() {
        this.getDeveloperDocsNavLink().click();
    }
    hoverPricingLabel() {
        this.getPricingLabel().realHover({scrollBehavior: false});
    }
    clickTalkToAnExpertButton() {
        this.getTalkToAnExpertButton().click();
    }
    clickLogInButton() {
        this.getLogInButton().click();
    }
    clickDeveloperDocsLink() {
        this.getDeveloperDocsLink().click();
    }
    clickSeeAllPricingLink() {
        this.getSeeAllPricingLink().click();
    }
    clickSignUpButton() {
        this.getSignUpButton().click();
    }
}