describe('Búsqueda de eventos por provincia - Caso de prueba TC-37', () => {

    beforeEach(() => {
        cy.intercept('GET', 'api/backend/auth/session', {
            statusCode: 200,
            body: {}
        }).as('getSession');
        cy.visit('https://ticketazo.com.ar/');
        cy.wait('@getSession');
        cy.wait(6000); //Para que cargue bien la página
    });

    // Caso de prueba TC-35: Búsqueda por categoría
    it('Debería buscar eventos con la Provincia "Chubut"', () => {
       cy.get('[aria-label="Provincia"]').click();
       cy.wait(3000); 
        cy.contains('span', 'Buenos Aires').should('be.visible').click({ force: true });
       cy.wait(3000);
    });
});