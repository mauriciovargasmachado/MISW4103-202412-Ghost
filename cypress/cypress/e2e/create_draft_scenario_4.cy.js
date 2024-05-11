describe('Funcionalidad: Crear draf', () => {
    //Login 
    beforeEach(() => {
      // Given I go to Login page
      cy.visit(Cypress.env('GHOST_LOGIN_URL'))
      cy.wait(7000)
      cy.screenshot('create_draft_scenario_4/1', {overwrite: true})

      // And I Fill input form with GHOST_USERNAME and GHOST_PASSWORD
      cy.get('input.gh-input.email').type(Cypress.env('GHOST_USERNAME'))
      cy.screenshot('create_draft_scenario_4/2', {overwrite: true})
      
      cy.get('input.gh-input.password').type(Cypress.env('GHOST_PASSWORD'))
      cy.screenshot('create_draft_scenario_4/3', {overwrite: true})
      
      cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(2000)
      cy.screenshot('create_draft_scenario_4/4', {overwrite: true})
      
      // And I Wait for the dashboard to be visible
      cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))
      cy.wait(2000)
      cy.screenshot('create_draft_scenario_4/5', {overwrite: true})

      // And I go to the drafts page.
      cy.get('.gh-nav-viewname').eq(0).click()
      cy.screenshot('create_draft_scenario_4/6', {overwrite: true})

    })
    it('Añadir un feature a un draft', ()=>{
      // When I create a new draft with a title and description
      cy.get('.ember-view.gh-btn.gh-btn-primary').eq(0).click()
      cy.wait(3000)
      cy.screenshot('create_draft_scenario_4/7', {overwrite: true})
      
      cy.get('.gh-editor-title').type('This is a draft title')
      cy.wait(3000)
      cy.screenshot('create_draft_scenario_4/8', {overwrite: true})
      
      cy.get('.kg-prose').type('This is a draft text!')
      cy.wait(6000)
      cy.screenshot('create_draft_scenario_4/9', {overwrite: true})
      
      // And I go back to drafts page
      cy.get('.ember-view.gh-btn-editor.gh-editor-back-button').eq(0).click()
      cy.wait(6000)
      cy.screenshot('create_draft_scenario_4/10', {overwrite: true})
      
      // And I set the draft as featured.
      cy.get('.ember-view.permalink.gh-list-data.gh-post-list-title').eq(0).trigger('contextmenu');
      cy.wait(3000)
      cy.screenshot('create_draft_scenario_4/11', {overwrite: true})
      
      cy.get('.mr2').eq(0).click()
      cy.wait(3000)
      cy.screenshot('create_draft_scenario_4/12', {overwrite: true})
      
      // Then I expecto to see the updated featured draft.
      cy.get('.gh-featured-post').should('exist');
      cy.screenshot('create_draft_scenario_4/13', {overwrite: true})

    })
  })