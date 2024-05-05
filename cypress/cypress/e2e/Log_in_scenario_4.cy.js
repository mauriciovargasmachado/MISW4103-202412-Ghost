describe('Olvido su contraseña', () => {
    beforeEach(() => {

        // Go to Ghost login screen.
      cy.visit(Cypress.env('GHOST_LOGIN_URL'))

      // Wait for the login screen to load.
      cy.wait(2000)
    })
  
    it('Ingresar usuario correcto y contraseña contraseña equivocada y da click en olvido su contraseña.', () => {

        // Fill the email input with the right user-email.
      cy.get('input.gh-input.email').type(Cypress.env('GHOST_USERNAME'))

      // Fill the password input with the wrong password.
      cy.get('input.gh-input.password').type(Cypress.env('GHOST_WRONG_PASSWORD'))

      // Click on login button.
      cy.get('.forgotten-link.gh-btn.gh-btn-link.gh-btn-icon.ember-view').click()
      cy.wait(2000)
  
      // I wait for a message that show a message has been sent or failed to send email 
      cy.get('p.main-error').should('be.visible').contains(Cypress.env('Failed to send email. Reason: Sending failed'))

    })
  })