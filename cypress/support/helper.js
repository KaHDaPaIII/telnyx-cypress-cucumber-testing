export class Helper {
    typeLogin(page, user) {
        page.typeEmail(user.email);
        page.typePassword(user.password);
    }
    typeRegistration(page, user) {
        page.typeEmail(user.email);
        page.typeFullname(user.fullname);
        page.typePassword(user.password);
    }
    closeCookiePopup() {
        cy.get('body').then(($body) => { //Close the cookie pop-up window, if present
            if($body.find('footer + div button[aria-label="close and deny"]').length){
                cy.get('footer + div button[aria-label="close and deny"]').click();
            }
        })
    }
    ifNoCaptchaErrorThenAssertRegistration(email) {
        cy.wait(10000); // Wait for page response
        cy.get('body').then(($body) => {
            if ($body.find('#signup-form_error').length) { // If error, then it should be a CAPTCHA error
                cy.get('#signup-form_error span').contains(/captcha|CAPTCHA/g);
            } else {
                cy.get('svg[name="emailNew"] + h1').should('be.visible');
                cy.get('svg[name="emailNew"] + h1 + div strong').should('be.visible').contains(email);
            }
        });
    }
}