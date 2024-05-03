describe('Iniciar sesion satisfactoriamente', () => {
    beforeEach(() => {

        // Go to Ghost login screen.
      cy.visit(Cypress.env('GHOST_LOGIN_URL'))

      // Wait for the login screen to load.
      cy.wait(2000)
    })
  
    it('Ingresar usuario y contraseña correctas.', () => {

        // Fill the email input with the right user-email.
      cy.get('input.gh-input.email').type(Cypress.env('GHOST_USERNAME'))

      // Fill the password input with the right password.
      cy.get('input.gh-input.password').type(Cypress.env('GHOST_PASSWORD'))

      // Click on login button.
      cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(2000)
  
      // Wait for the dashboard URL to load.
      cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))

    })
  })