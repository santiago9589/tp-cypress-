describe('Limpiar filtros - Caso de prueba TC-40', () => {

    beforeEach(() => {
        cy.intercept('GET', 'api/backend/auth/session', {
            statusCode: 200,
            body: {}
        }).as('getSession');
        cy.visit('https://ticketazo.com.ar/');
        cy.wait('@getSession');
        cy.wait(6000); //Para que cargue bien la página
    });

    it('Cargar los filtros y hacer clic en el botón "Limpiar filtros"', () => {

        // Completar campo de texto y verificar
        cy.get('[placeholder="Busca tu próxima función!"]').type('prueba');
        cy.wait(2000); 
        cy.get('[data-cy="eventos-grid"]').should('contain', 'prueba');
        cy.wait(3000); 
    
        // Ingresar el rango de fechas
        cy.get('[data-type="day"]').eq(0).click().type('20');
        cy.get('[data-type="month"]').eq(0).click().type('09');
        cy.get('[data-type="year"]').eq(0).click().type('2025');
        cy.get('[data-type="day"]').eq(1).click().type('30');
        cy.get('[data-type="month"]').eq(1).click().type('11');
        cy.get('[data-type="year"]').eq(1).click().type('2025');
        cy.wait(3000);

        // Seleccionar categoría
        cy.get('[aria-label="Categoría"]').click();
        cy.wait(3000); 
        cy.get('[data-key="StandUp"]').click();
        cy.wait(3000);
      
        // Seleccionar provincia y localidad
        cy.get('[aria-label="Provincia"]').click();
        cy.wait(3000); 
        cy.contains('span', 'Buenos Aires').should('be.visible').click({ force: true });
        cy.wait(3000);
        cy.get('[aria-label="Localidad"]').click();
        cy.wait(3000);
        cy.contains('span', '12 de Octubre').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(3000);

        // Hacer clic en el botón "Limpiar filtros"
        cy.contains('button', 'Limpiar filtros').click();
        cy.wait(3000);

        // --- Verificaciones de limpieza de filtros ---
        // 1. Verificar que el campo de texto está vacío
        cy.get('[placeholder="Busca tu próxima función!"]').should('have.value', '');

        // 2. Verificar que los campos de fecha están vacíos
        cy.get('[data-type="day"]').eq(0).should('have.value', '');
        cy.get('[data-type="month"]').eq(0).should('have.value', '');
        cy.get('[data-type="year"]').eq(0).should('have.value', '');
        cy.get('[data-type="day"]').eq(1).should('have.value', '');
        cy.get('[data-type="month"]').eq(1).should('have.value', '');
        cy.get('[data-type="year"]').eq(1).should('have.value', '');

        // 3. Verificar que los selectores de categoría y ubicación se han reseteado
        cy.get('[aria-label="Categoría"]').should('have.text', 'Categoría');
        cy.get('[aria-label="Provincia"]').should('have.text', 'Provincia');
        cy.get('[aria-label="Localidad"]').should('have.text', 'Localidad');
    });
});