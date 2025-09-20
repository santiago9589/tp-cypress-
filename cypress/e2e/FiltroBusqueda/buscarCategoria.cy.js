describe('Búsqueda de eventos por categoría - Caso de prueba TC-35', () => {

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
    it('Debería buscar eventos con la categoría "Teatro"', () => {
       cy.get('[aria-label="Categoría"]').click();
       cy.wait(3000); 
       cy.get('[data-key="Teatro"]').click();
       cy.wait(3000);
    });
});