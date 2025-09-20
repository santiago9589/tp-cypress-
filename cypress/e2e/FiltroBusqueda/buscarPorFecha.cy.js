describe('Búsqueda de eventos por rango de fecha - Caso de prueba TC-34', () => {

    beforeEach(() => {
        cy.intercept('GET', 'api/backend/auth/session', {
            statusCode: 200,
            body: {}
        }).as('getSession');
        cy.visit('https://ticketazo.com.ar/');
        cy.wait('@getSession');
        cy.wait(5000); // Espera adicional para la carga de eventos
    });

    it('Debería mostrar solo eventos dentro del rango de fechas (20/09/2025 al 30/11/2025)', () => {
        // Ingresar el rango de fechas
        cy.get('[data-type="day"]').eq(0).click().type('20');
        cy.get('[data-type="month"]').eq(0).click().type('09');
        cy.get('[data-type="year"]').eq(0).click().type('2025');
        cy.get('[data-type="day"]').eq(1).click().type('30');
        cy.get('[data-type="month"]').eq(1).click().type('11');
        cy.get('[data-type="year"]').eq(1).click().type('2025');
    });
});