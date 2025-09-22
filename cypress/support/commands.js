// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';

//COMMANDS PARA LOGIN
Cypress.Commands.add('login', (email, contraseña) => {
  cy.get('[data-cy="input-email"]').clear().type(email)
  cy.get('[data-cy="input-password"]').clear().type(contraseña)
  cy.get('[data-cy="btn-login"]').click()
})


//COMMANDS PARA REGISTRO CLIENTE
Cypress.Commands.add('RegistroCliente', (cliente) => {
  
  cy.get('[data-cy="input-razon-social"]').type(cliente.razonSocial)
  cy.get('[data-cy="input-cuit"]').type(cliente.cuit)
  cy.get('[data-cy="select-provincia"]').type(`${cliente.provincia}{enter}`)
  cy.get('[data-cy="select-localidad"]').type(`${cliente.localidad}{enter}`)
  cy.get('[data-cy="input-direccion"]').type(cliente.direccion)
  cy.get('[data-cy="input-telefono"]').type(cliente.telefono)
  cy.get('[data-cy="input-email"]').type(cliente.email)
  cy.get('[data-cy="input-confirmar-email"]').type(cliente.confirmarEmail)
  cy.get('[data-cy="input-password"]').type(cliente.contraseña)
  cy.get('[data-cy="input-repetir-password"]').type(cliente.repetirContraseña)
  cy.get('[data-cy="switch-establecimiento"] > .font-inherit').check({ force: true })
})

