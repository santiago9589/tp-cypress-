describe('Cargar Evento - Validación de campos obligatorios', () => {
  beforeEach(() => {
    cy.viewport(1280, 720); 
    cy.visit('https://ticketazo.com.ar/auth/login');

    // Login
    cy.get('[data-cy="input-email"]').type('maribouhid@hotmail.com');
    cy.get('[data-cy="input-password"]').type('Password123.');
    cy.get('[data-cy="btn-login"]').click();
    cy.contains('Cargar Evento').click();
  });

  it('No permite avanzar si falta un campo obligatorio', () => {
    // Solo completar título
    cy.get('[data-cy="input-titulo"]').type('Evento incompleto');

    cy.contains('button', 'Siguiente').click({ force: true });

  
    cy.contains('Este campo es obligatorio').should('be.visible');
    
  });
});
