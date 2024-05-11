describe('Funcionalidad: Crear draf', () => {
    //Login 
    beforeEach(() => {
      // Given I go to Login page
      cy.visit(Cypress.env('GHOST_LOGIN_URL'))
      cy.wait(7000)
      cy.screenshot('create_draft_scenario_3/1', {overwrite: true})

      // And I Fill input form with GHOST_USERNAME and GHOST_PASSWORD
      cy.get('input.gh-input.email').type(Cypress.env('GHOST_USERNAME'))
      cy.screenshot('create_draft_scenario_3/2', {overwrite: true})

      cy.get('input.gh-input.password').type(Cypress.env('GHOST_PASSWORD'))
      cy.screenshot('create_draft_scenario_3/3', {overwrite: true})
      
      cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(2000)
      cy.screenshot('create_draft_scenario_3/4', {overwrite: true})
      
      
      // And I Wait for the dashboard to be visible
      cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))
      cy.wait(2000)
      cy.screenshot('create_draft_scenario_3/5', {overwrite: true})


      // And I go to the drafts page
      cy.get('.gh-nav-viewname').eq(0).click()
      cy.screenshot('create_draft_scenario_3/6', {overwrite: true})


    })
    it('Eliminar un draft', ()=>{
      // When I create a new draft with a tittle and description
      cy.get('.ember-view.gh-btn.gh-btn-primary').eq(0).click()
      cy.wait(3000)
      cy.screenshot('create_draft_scenario_3/7', {overwrite: true})


      cy.get('.gh-editor-title').type('this is a draft title')
      cy.wait(3000)
      cy.screenshot('create_draft_scenario_3/8', {overwrite: true})

      cy.get('.kg-prose').type('this is a draft text!')
      cy.wait(6000)
      cy.screenshot('create_draft_scenario_3/9', {overwrite: true})

      // And I go back to drafts page.
      cy.get('.ember-view.gh-btn-editor.gh-editor-back-button').eq(0).click()
      cy.wait(6000)
      cy.screenshot('create_draft_scenario_3/10', {overwrite: true})
      
      // And I right click on the draft.
      cy.get('.ember-view.permalink.gh-list-data.gh-post-list-title').eq(0).trigger('contextmenu');
      cy.wait(3000)
      cy.screenshot('create_draft_scenario_3/11', {overwrite: true})
      
      // And I delete the draft.
      cy.get('.mr2').eq(4).click()
      cy.wait(3000)
      cy.screenshot('create_draft_scenario_3/12', {overwrite: true})
      
      // Then I expect to see the deleted draft.
      cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').eq(0).click()
      cy.screenshot('create_draft_scenario_3/13', {overwrite: true})
    })
  })