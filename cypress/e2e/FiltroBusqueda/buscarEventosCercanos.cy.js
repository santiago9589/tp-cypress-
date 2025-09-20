describe('Búsqueda de eventos cercanos - Caso de prueba TC-36', () => {

    beforeEach(() => {
        cy.intercept('GET', 'api/backend/auth/session', {
            statusCode: 200,
            body: {}
        }).as('getSession');
        cy.visit('https://ticketazo.com.ar/');
        cy.wait('@getSession');
        cy.wait(6000); 
    });

    it('Debería filtrar los eventos cercanos a la ubicación del usuario', () => {
        // Simular la geolocalización
        const mockLocation = {
            coords: {
                latitude: -34.6037, // Latitud de Buenos Aires
                longitude: -58.3816, // Longitud de Buenos Aires
            },
        };
        cy.window().then((win) => {
            cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake((callback) => {
                return callback(mockLocation);
            });
        });

        // Asegurar de que el checkbox esté habilitado antes de continuar
        cy.get('#locationFilter').should('be.enabled');

        // Ahora sí, haz clic en el checkbox y verifica que está marcado
        cy.get('#locationFilter').check().should('be.checked');

    });
});