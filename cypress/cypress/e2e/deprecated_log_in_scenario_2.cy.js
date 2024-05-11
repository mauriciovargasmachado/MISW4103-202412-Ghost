describe('Iniciar sesión con correo electrónico equivocado', () => {
    beforeEach(() => {

        // Go to Ghost login screen.
      cy.visit(Cypress.env('GHOST_LOGIN_URL'))

      // Wait for the login screen to load.
      cy.wait(2000)
    })
  
    it('Ingresar usuario equivocado y contraseña correcta.', () => {

        // Fill the email input with the wrong user-email.
      cy.get('input.gh-input.email').type(Cypress.env('GHOST_WRONG_USERNAME'))

      // Fill the password input with the right password.
      cy.get('input.gh-input.password').type(Cypress.env('GHOST_PASSWORD'))

      // Click on login button.
      cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(2000)
  
      // I wait for a message that show the email address is <INVALID_EMAIL> 
      cy.get('p.main-error').should('be.visible').contains(Cypress.env('INVALID_EMAIL_ADDRESS_MESSAGE'))

    })
  })