describe('Búsqueda de eventos por campo de texto', () => {

    beforeEach(() => {
        cy.intercept('GET', 'api/backend/auth/session', {
            statusCode: 200,
            body: {}
        }).as('getSession');
        cy.visit('https://ticketazo.com.ar/');
        cy.wait('@getSession');
        cy.wait(6000); //Para que cargue bien la página
    });

    // Caso de prueba TC-31: Búsqueda con caracteres alfabéticos
    it('Debería buscar eventos con caracteres alfabéticos - Caso de prueba TC-31', () => {
        cy.get('[placeholder="Busca tu próxima función!"]').type('Fest');
        cy.wait(2000); 
        cy.get('[data-cy="eventos-grid"]').should('contain', 'Fest');
        cy.wait(5000); 
    });

    // Caso de prueba TC-32: Búsqueda con caracteres numéricos
    it('Debería buscar eventos con caracteres numéricos - Caso de prueba TC-32', () => {
        cy.get('[placeholder="Busca tu próxima función!"]').type('1234');
        cy.wait(2000); 
        cy.get('[data-cy="eventos-grid"]').should('contain', '1234');
        cy.wait(5000); 
    });

    // Caso de prueba TC-33: Búsqueda con caracteres especiales
    it('Debería buscar eventos con caracteres especiales - Caso de prueba TC-33', () => {
        cy.get('[placeholder="Busca tu próxima función!"]').type('@');
        cy.wait(2000); 
        cy.get('[data-cy="eventos-grid"]').should('contain', '@');
        cy.wait(5000); 
    });

});