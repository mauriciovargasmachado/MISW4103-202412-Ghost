describe('Funcionalidad: Crear draf', () => {
    //Login 
    beforeEach(() => {
      // Given I go to Login page
      cy.visit(Cypress.env('GHOST_LOGIN_URL'))
      cy.wait(7000)
      cy.screenshot('create_draft_scenario_2/1', {overwrite: true})

      // And fill input form with GHOST_USERNAME and GHOST_PASSWORD
      cy.get('input.gh-input.email').type(Cypress.env('GHOST_USERNAME'))
      cy.screenshot('create_draft_scenario_2/2', {overwrite: true})

      cy.get('input.gh-input.password').type(Cypress.env('GHOST_PASSWORD'))
      cy.screenshot('create_draft_scenario_2/3', {overwrite: true})

      cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(2000)
      cy.screenshot('create_draft_scenario_2/4', {overwrite: true})

      // And I Wait for the dashboard to be visible
      cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))
      cy.wait(2000)
      cy.screenshot('create_draft_scenario_2/5', {overwrite: true})

      // And I go to the Drafts page
      cy.get('.gh-nav-viewname').eq(0).click()
      cy.screenshot('create_draft_scenario_2/6', {overwrite: true})
    })
    it('Edit un draft', ()=>{
      //When I edit the description of an existing draft 
      cy.get('.ember-view.permalink.gh-list-data.gh-post-list-title').eq(0).click()
      cy.wait(3000)
      cy.screenshot('create_draft_scenario_2/7', {overwrite: true})

      cy.get('.kg-prose').type(' This draft test was edited!')
      cy.wait(6000)
      cy.screenshot('create_draft_scenario_2/8', {overwrite: true})

      // And I go back to drafts page
      cy.get('.ember-view.gh-btn-editor.gh-editor-back-button').eq(0).click()
      cy.wait(6000)
      cy.screenshot('create_draft_scenario_2/9', {overwrite: true})

      cy.get('.ember-view.permalink.gh-list-data.gh-post-list-title').eq(0).click()
      cy.wait(6000)
      cy.screenshot('create_draft_scenario_2/10', {overwrite: true})

      //Then I expect to see the updated draft.
      cy.get('.kg-prose').should('contain', ' This draft test was edited!');
      cy.screenshot('create_draft_scenario_2/11', {overwrite: true})

    })
  })