describe('Iniciar sesión con contraseña equivocada', () => {
    beforeEach(() => {

        // Go to Ghost login screen.
      cy.visit(Cypress.env('GHOST_LOGIN_URL'))

      // Wait for the login screen to load.
      cy.wait(2000)
    })
  
    it('Ingresar usuario y contraseña correctas.', () => {

        // Fill the email input with the user-email.
      cy.get('input.gh-input.email').type(Cypress.env('GHOST_USERNAME'))

      // Fill the password input with the wrong password.
      cy.get('input.gh-input.password').type(Cypress.env('GHOST_WRONG_PASSWORD'))

      // Click on login button.
      cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(2000)
  
      // I wait for a message that show the email address is <INVALID_EMAIL> 
      cy.get('p.main-error').should('be.visible').contains('Your password is incorrect.')

    })
  })