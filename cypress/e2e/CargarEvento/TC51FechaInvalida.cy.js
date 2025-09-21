describe('Cargar Evento - Fecha inválida', () => {
  beforeEach(() => {
    cy.viewport(1280, 720); 
    cy.visit('https://ticketazo.com.ar/auth/login');

    // Login
    cy.get('[data-cy="input-email"]').type('maribouhid@hotmail.com');
    cy.get('[data-cy="input-password"]').type('Password123.');
    cy.get('[data-cy="btn-login"]').click();
    cy.contains('Cargar Evento').click();
  });

  it('No permite crear evento con fecha pasada', () => {
    cy.get('[data-cy="input-titulo"]').type('Evento inválido');

    // Fecha pasada (día 01)
    cy.get('button[aria-label="Calendario"]').click();
    cy.get('[data-type="day"]').click({ force: true })
      .type('{selectall}{backspace}01', { force: true });

    cy.contains('button', 'Siguiente').click({ force: true });

 
    cy.contains('La fecha seleccionada no puede ser anterior a hoy').should('be.visible');
  });
});
