describe('Ver Evento', () => {

    beforeEach(() => {
        // Intercepta la llamada para que no abra una nueva pestaña
        // Esto debe ir ANTES de cy.visit()
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen').callsFake((url) => {
                win.location.href = url;
            });
        });
        cy.visit('https://ticketazo.com.ar/');
        cy.wait(6000); //Para que cargue bien la página
    });

    it('Debería completar el flujo de compra y redirigir a Mercado Pago en la misma pestaña', () => {
        // Tu código de inicio de sesión y selección de entradas
        cy.contains('button', 'Login').click();
        cy.wait(3000);
        cy.get('[data-cy="input-email"]').click().type('eugemunoz15@gmail.com');
        cy.get('[data-cy="input-password"]').click().type('ticketazo');
        cy.get('[data-cy="btn-login"]').click();
        cy.wait(10000);
        cy.get('[role="button"]').contains('4').click();
        cy.wait(5000);
        cy.get('[data-cy="btn-ver-evento-305"]').click();
        cy.wait(5000);
        cy.contains('button', 'Adquirir entrada').click();
        cy.get('.mx-auto > .relative > .transition-all').click();
        cy.wait(3000);
        cy.get('[title="Fila 2, Columna 3"]').click();
        cy.wait(1000);
        cy.get('[title="Fila 2, Columna 4"]').click();
        cy.wait(1000);
        cy.get('[title="Fila 2, Columna 5"]').click();
        cy.wait(1000);
        cy.get('[title="Fila 2, Columna 6"]').click();
        cy.wait(5000);
        cy.get('.relative > .flex-col > .w-full').click();
        cy.wait(5000);
        cy.get('.group > .font-inherit').click();
        cy.wait(5000);
        cy.get(':nth-child(4) > :nth-child(1) > .z-0').click();
        cy.wait(5000);
    });
});