describe('Funcionalidad: Crear post', () => {
    //Login 
    beforeEach(() => {
      //Given I go to Login page
      cy.visit(Cypress.env('GHOST_LOGIN_URL'))
      cy.wait(7000)
      cy.screenshot('create_post_scenario_2/1', {overwrite: true})
      // And I fill input form with GHOST_USERNAME and GHOST_PASSWORD
      cy.get('input.gh-input.email').type(Cypress.env('GHOST_USERNAME'))
      cy.screenshot('create_post_scenario_2/2', {overwrite: true})
      cy.get('input.gh-input.password').type(Cypress.env('GHOST_PASSWORD'))
      cy.screenshot('create_post_scenario_2/3', {overwrite: true})
      cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(2000)
      cy.screenshot('create_post_scenario_2/4', {overwrite: true})
      // And I wait for the dashboard to be visible
      cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))
      cy.screenshot('create_post_scenario_2/5', {overwrite: true})

      // And I go to the Posts page
      cy.visit(Cypress.env('GHOST_POSTS_URL'))
      cy.screenshot('create_post_scenario_2/6', {overwrite: true})
    })
    it('Crear post con titulo y descripcion', ()=>{

        //When I create a new post with a title and description
        cy.get('a[href="#/editor/post/"]').eq(0).click()
        cy.wait(5000)
        cy.screenshot('create_post_scenario_2/7', {overwrite: true})
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type('Segunda Prueba Automatizada')
        cy.wait(3000)
        cy.screenshot('create_post_scenario_2/8', {overwrite: true})
        cy.get('.kg-prose').type('Esta es una breve descripcion de prueba')
        cy.wait(3000)
        cy.screenshot('create_post_scenario_2/9', {overwrite: true})

        // And I publish it 
        cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').eq(0).click()
        cy.wait(3000)
        cy.screenshot('create_post_scenario_2/10', {overwrite: true, disableTimersAndAnimations: false})
        cy.get('button.gh-btn.gh-btn-black.gh-btn-large').click()
        cy.wait(3000)
        cy.screenshot('create_post_scenario_2/11', {overwrite: true, disableTimersAndAnimations: false})
        cy.get('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view').click()
        cy.wait(5000)
        cy.screenshot('create_post_scenario_2/12', {overwrite: true, disableTimersAndAnimations: false})

        // Then I expect that the post is created.
        cy.get('a[href="#/dashboard/"]').eq(0).click({ force: true })
        cy.wait(2000)
        cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))
        cy.visit(Cypress.env('GHOST_POSTS_URL'))
        cy.wait(2000)
        cy.screenshot('create_post_scenario_2/13', {overwrite: true})
        cy.url().should('eq', Cypress.env('GHOST_POSTS_URL'))
    })
})