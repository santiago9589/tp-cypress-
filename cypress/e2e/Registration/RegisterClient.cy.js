describe('Test Registrar Cliente Ticketazo', () => {
    beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerClient')
    cy.fixture('ClientsRegister').as('clientes')
})

    //CAMPOS OBLIGATORIOS VACÍOS
    it('Campos obligatorios vacíos', () => {
        cy.get('[data-cy="btn-registrarse"]').click()
        cy.contains('Completa este campo').should('be.visible')
        cy.wait(2000)
    })


    //ERROR CON EMAIL YA EXISTENTE
    it('Error con email ya existente', () => {
        cy.get('@clientes').then((clientes) => {
            cy.RegistroCliente(clientes.clienteExistente)
            cy.get('[data-cy="btn-registrarse"]').click()
            cy.contains('El usuario con este correo electrónico ya existe').should('be.visible')
            cy.wait(2000)
        })
  })
  

    //ERROR POR CONFIRMACIÓN DE EMAIL DISTINTA
    it('Error por confirmación de email distinta', () => {
        cy.get('@clientes').then((clientes) => {
            cy.RegistroCliente(clientes.emailsDistintos)
            cy.get('[data-cy="btn-registrarse"]').click()
            cy.contains('Los correos electrónicos no coinciden').should('be.visible')
            cy.wait(2000)
        })
    })

    
    //CONTRASEÑA DÉBIL RECHAZADA (MUY CORTA)
    it('Contraseña débil rechazada (muy corta)', () => {
        cy.get('@clientes').then((clientes) => {
            cy.RegistroCliente(clientes.contraseñaDebil)
            cy.get('[data-cy="btn-registrarse"]').click()
            cy.contains('La contraseña debe tener al menos 6 caracteres').should('be.visible')
        })  
    })


    //REGISTRO EXITOSO CON DATOS VÁLIDOS
    it('Registro exitoso con datos válidos', () => {
        cy.get('@clientes').then((clientes) => {
            cy.RegistroCliente(clientes.clienteNuevo)
            //cy.get('[data-cy="btn-registrarse"]').click()
            //cy.url().should('include', '/auth/login')
        })
    })

})