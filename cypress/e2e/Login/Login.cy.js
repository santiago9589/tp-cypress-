describe('Test - Login Ticketazo', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('https://ticketazo.com.ar/auth/login')
    cy.fixture('UsersLogin').as('users')
  })
  
  //LOGIN EXITOSO CON CREDENCIALES VÁLIDAS
  it('Login exitoso con credenciales válidas', () => {
    cy.get('@users').then((users) => {
      cy.login(users.usuarioValido.email, users.usuarioValido.contraseña)
      cy.get('[data-cy="btn-login"]').should('not.exist')
      cy.wait(3000)
    })
  })
  
  //ERROR CON CONTRASEÑA INCORRECTA
  it('Error con contraseña incorrecta', () => {
    cy.get('@users').then((users) => {
      cy.login(users.contraseñaIncorrecta.email, users.contraseñaIncorrecta.contraseña)
      cy.contains('Correo o contraseña incorrectos').should('be.visible')
      cy.wait(3000)
    })
  })

  //LOGIN CON USUARIO REGISTRADO PERO NO APROBADO
  it('Login con usuario registrado pero no aprobado', () => {
    cy.get('@users').then((users) => {
      cy.login(users.usuarioNoAprobado.email, users.usuarioNoAprobado.contraseña)
      cy.contains('Usuario no confirmado. Te reenviamos el link por correo.').should('be.visible')
      cy.wait(3000)
    })
  })

  //ERROR CON USUARIO INEXISTENTE
  it('Error con usuario inexistente', () => {
    cy.get('@users').then((users) => {
      cy.login(users.usuarioInexistente.email, users.usuarioInexistente.contraseña)
      cy.contains('Correo o contraseña incorrectos').should('be.visible')
      cy.wait(3000)
    })   
  })
  
})