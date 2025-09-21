describe('Cargar Evento fecha y horarios únicos', () => {
  beforeEach(() => {
    cy.viewport(1280, 720); 
    cy.visit('https://ticketazo.com.ar/auth/login')
  });

  it('Happy Path', () => {
    // ======================
    // LOGIN
    // ======================
    cy.get('[data-cy="input-email"]').type('maribouhid@hotmail.com');
    cy.get('[data-cy="input-password"]').type('Password123.');
    cy.get('[data-cy="btn-login"]').click();

    // ======================
    // CREAR EVENTO
    // ======================
    cy.contains('Cargar Evento').click();
    cy.get('[data-cy="input-titulo"]').type('Elio');

    // Fecha: día 30
    cy.get('button[aria-label="Calendario"]').click();
    cy.get('[data-type="day"]')
      .click({ force: true })
      .type('{selectall}{backspace}30', { force: true });

    // Edad y género
    cy.get('[data-cy="select-edad"]').click();
    cy.get('ul[role="listbox"] li').first().click();
    cy.get('[data-cy="select-genero"]').first().click();
    cy.get('ul[role="listbox"] li').first().click();

    // ======================
    // HORARIO DE INICIO 02:30
    // ======================
    cy.get('div[data-type="hour"][contenteditable="true"]')
      .eq(0)
      .click({ force: true })
      .type('{selectall}{backspace}02', { force: true });

    cy.get('div[data-type="minute"][contenteditable="true"]')
      .eq(0)
      .click({ force: true })
      .type('{selectall}{backspace}30', { force: true });

    // ======================
    // DURACIÓN DEL EVENTO 01:15
    // ======================
    cy.get('div[data-type="hour"][contenteditable="true"]')
      .eq(1)
      .click({ force: true })
      .type('{selectall}{backspace}01', { force: true });

    cy.get('div[data-type="minute"][contenteditable="true"]')
      .eq(1)
      .click({ force: true })
      .type('{selectall}{backspace}15', { force: true });

    // ======================
    // LUGAR DEL EVENTO
    // ======================
    cy.get('[data-cy="select-lugar-evento"]').first().click();
    cy.get('ul[role="listbox"] li').first().click();

    cy.get('[data-cy="input-nombre-lugar"]').type('Cine Opera');
    cy.get('[data-cy="input-calle-lugar"]').type('Caseros');
    cy.get('[data-cy="input-altura-lugar"]').type('1030');
    cy.get('[data-cy="input-codigo-postal-lugar"]').type('4400');

    cy.get('[aria-label="Provincia"]').click();
    cy.contains('span', 'Buenos Aires').should('be.visible').click({ force: true });

    cy.get('[aria-label="Localidad"]').first().click();
    cy.get('ul[role="listbox"] li').first().click();

    // Información adicional
    cy.get('[data-cy="input-info"]').type('Elio');

    // ======================
    // SIGUIENTE
    // ======================
    cy.contains('button', 'Siguiente').click({ force: true });
    cy.wait(500);

    // ======================
    // OTRA PAGINA
    // ======================

    cy.get('svg[data-slot="selectorIcon"]')   
    .parent()                              
    .click();

    //nombre de la entrada
    cy.get('ul[role="listbox"] li')
    .first()
        .click({ force: true });
        

    //capacidad
    cy.get('input[aria-label="Capacidad"]')
    .clear()
    .type('300');   

    //precio entrada

    cy.get('input[aria-label="Precio Entrada"]')
    .clear()
    .type('1500');

    //agregar entrada
    cy.contains('button', 'Agregar Entrada').click();

    //nombre de la entrada 2
    
    cy.contains('span', 'Seleccionar entrada').click({ force: true });


    cy.get('ul[role="listbox"] li')
  .eq(1)
  .click({ force: true });

  //capacidad 2
  cy.get('input[name="capacidadEntrada1"][aria-label="Capacidad"]')
  .type('200');

  //precio 2
  cy.get('input[name="precioEntrada1"][aria-label="Precio Entrada"]')
  .type('3000');

  //Siguiente
  cy.contains('button', 'Siguiente').click();

 // Paso: Cargar Imagen
cy.get('input[type="file"]').attachFile('mi.jpg');




// Paso: Siguiente
cy.contains('button', 'Siguiente').click({ force: true });

// Paso: Confirmar
cy.contains('button', 'Confirmar').click({ force: true });



  });
});
