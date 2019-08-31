describe('CodeBreaker testing', () => {
    it('Setting setSecret and guess, value = 1234', () => {
        cy.visit('http://localhost:4200/');
        cy.get('#set-secret__input')
            .type('1234')
            .should('have.value', '1234');
        cy.get('#set-secret__button')
            .click();
        cy.get('#response-set-secret')
            .should('contain', 'ok, let the game begins');

        cy.get('#set-guess__input')
            .type('1234')
            .should('have.value', '1234');
        cy.get('#set-guess__button')
            .click();
        cy.get('#response-guess')
            .should('contain', 'XXXX');
    });
});