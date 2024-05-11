describe('Funcionalidad: Crear tag', () => {
    //Login 
    beforeEach(() => {
      //Given I go to Login page
      cy.visit(Cypress.env('GHOST_LOGIN_URL'))
      cy.wait(7000)
      cy.screenshot('create_tag_scenario_1/1', {overwrite: true})

      //And I fill input form with GHOST_USERNAME and GHOST_PASSWORD
      cy.get('input.gh-input.email').type(Cypress.env('GHOST_USERNAME'))
      cy.screenshot('create_tag_scenario_1/2', {overwrite: true})
      cy.get('input.gh-input.password').type(Cypress.env('GHOST_PASSWORD'))
      cy.screenshot('create_tag_scenario_1/3', {overwrite: true})
      cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(2000)
      cy.screenshot('create_tag_scenario_1/4', {overwrite: true})

      // And I wait for the dashboard to be visible
      cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))
      cy.screenshot('create_tag_scenario_1/5', {overwrite: true})
      
      // And I go to the Tags page.
      cy.visit(Cypress.env('GHOST_TAG_URL'))
      cy.screenshot('create_tag_scenario_1/6', {overwrite: true})
    })
    it('Crear tag con un solo un titulo', ()=>{

        //When I create a new tag with a title
        cy.get('a[href="#/tags/new/"]').eq(0).click()
        cy.wait(5000)
        cy.screenshot('create_tag_scenario_1/7', {overwrite: true})
        cy.get('#tag-name').type('Tag1')
        cy.wait(3000)
        cy.screenshot('create_tag_scenario_1/8', {overwrite: true})

        //And I publish it 
        cy.get('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click()
        cy.wait(3000)
        cy.screenshot('create_tag_scenario_1/9', {overwrite: true, disableTimersAndAnimations: false})

        //Then I expect that the tag is created.
        cy.visit(Cypress.env('GHOST_TAG_URL'))
        cy.wait(2000)
        cy.screenshot('create_tag_scenario_1/10', {overwrite: true})
        cy.url().should('eq', Cypress.env('GHOST_TAG_URL'))
    })
})