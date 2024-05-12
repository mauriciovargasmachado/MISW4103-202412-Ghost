describe('Funcionalidad: Crear draf', () => {
    //Login 
    beforeEach(() => {
      // Given I go to Login page
      cy.visit(Cypress.env('GHOST_LOGIN_URL'))
      cy.wait(7000)
      cy.screenshot('create_draft_scenario_1/1', {overwrite: true})

      // And fill input form with GHOST_USERNAME and GHOST_PASSWORD
      cy.get('input.gh-input.email').type(Cypress.env('GHOST_USERNAME'))
      cy.get('input.gh-input.password').type(Cypress.env('GHOST_PASSWORD'))
      cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(2000)
      cy.screenshot('create_draft_scenario_1/2', {overwrite: true})

      // And I Wait for the dashboard to be visible
      cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))
      cy.screenshot('create_draft_scenario_1/3', {overwrite: true})

      // And I go to the Drafts page
      cy.wait(2000)
      cy.get('.gh-nav-viewname').eq(0).click()
      cy.screenshot('create_draft_scenario_1/4', {overwrite: true})
    })

    it('Crear un draft', ()=>{
      // When I create a new draft with a tittle and description
      cy.get('.ember-view.gh-btn.gh-btn-primary').eq(0).click()
      cy.wait(3000)
      cy.screenshot('create_draft_scenario_1/5', {overwrite: true})

      cy.get('.gh-editor-title').type('this is a draft title')
      cy.wait(3000)
      cy.screenshot('create_draft_scenario_1/6', {overwrite: true})

      cy.get('.kg-prose').type('this is a draft text!')
      cy.wait(6000)
      cy.screenshot('create_draft_scenario_1/7', {overwrite: true})

      // And I go back to drafts page
      cy.get('.ember-view.gh-btn-editor.gh-editor-back-button').eq(0).click()

      Cypress.on('uncaught:exception', (err, runnable, promise) => {
        return false
      });

      cy.wait(6000)
      cy.screenshot('create_draft_scenario_1/8', {overwrite: true})

      //Then I expect to see the new draft.
      cy.get('.draft').should('contain', 'Draft');
      cy.screenshot('create_draft_scenario_1/9', {overwrite: true})

    })
  })