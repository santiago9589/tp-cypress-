describe('Búsqueda de eventos por localidad - Caso de prueba TC-38', () => {

    beforeEach(() => {
        cy.intercept('GET', 'api/backend/auth/session', {
            statusCode: 200,
            body: {}
        }).as('getSession');
        cy.visit('https://ticketazo.com.ar/');
        cy.wait('@getSession');
        cy.wait(6000); //Para que cargue bien la página
    });

    it('Debería buscar eventos con la Provincia "Morón"', () => {
       cy.get('[aria-label="Provincia"]').click();
       cy.wait(3000); 
       cy.contains('span', 'Buenos Aires').should('be.visible').click({ force: true });
       cy.wait(3000);
       cy.get('[aria-label="Localidad"]').click();
       cy.wait(3000);
       cy.contains('span', 'Morón').scrollIntoView().should('be.visible').click({ force: true });
       cy.wait(3000);
    });
});