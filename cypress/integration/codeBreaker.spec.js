describe('CodeBreaker testing', () => {
    it('Test game with secret value = 1234', () => {
        cy.visit('http://localhost:4200/');
        cy.get('#response')
            .should('contain', 'ok, let the game begins');

        cy.get('#form__input')
            .clear()
            .type('4321')
            .should('have.value', '4321');
        cy.get('.form__button')
            .click();
        cy.get('#response')
            .should('contain', '____');

        cy.get('#form__input')
            .clear()
            .type('1234')
            .should('have.value', '1234');

        cy.get('.form__button')
            .click();
        cy.get('#response')
            .should('contain', 'XXXX');
    });
});