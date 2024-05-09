describe('Funcionalidad: Crear post', () => {
  //Login 
  beforeEach(() => {
    //Go to Login page
    cy.visit(Cypress.env('GHOST_LOGIN_URL'))
    cy.wait(7000)
    cy.screenshot('create_post_scenario_1/1', {overwrite: true})
    //Fill input form with GHOST_USERNAME and GHOST_PASSWORD
    cy.get('input.gh-input.email').type(Cypress.env('GHOST_USERNAME'))
    cy.screenshot('create_post_scenario_1/2', {overwrite: true})
    cy.get('input.gh-input.password').type(Cypress.env('GHOST_PASSWORD'))
    cy.screenshot('create_post_scenario_1/3', {overwrite: true})
    cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click()
    cy.wait(2000)
    cy.screenshot('create_post_scenario_1/4', {overwrite: true})
    //Go to main page
    cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))
    //Then post page
    cy.visit(Cypress.env('GHOST_POSTS_URL'))
    cy.screenshot('create_post_scenario_1/5', {overwrite: true})
  })
  it('Crear post con un solo titulo', ()=>{
    //Create a new post with a tittle
    cy.get('a[href="#/editor/post/"]').eq(0).click()
    cy.wait(5000)
    cy.screenshot('create_post_scenario_1/6', {overwrite: true})
    cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type('Primera Prueba Automatizada')
    cy.wait(3000)
    cy.screenshot('create_post_scenario_1/7', {overwrite: true})
    cy.get('.kg-prose').click()
    cy.wait(3000)
    cy.screenshot('create_post_scenario_1/8', {overwrite: true})
    //Then publish it 
    cy.wait(5000)
    cy.screenshot('create_post_scenario_1/9', {overwrite: true})
    cy.wait(5000)
    cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').eq(0).click()
    cy.wait(5000)
    cy.get('button.gh-btn.gh-btn-black.gh-btn-large').click()
    cy.wait(3000)
    cy.screenshot('create_post_scenario_1/10', {overwrite: true})
    cy.wait(3000)
    cy.get('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view').click()
    cy.wait(3000)
    cy.screenshot('create_post_scenario_1/11', {overwrite: true})
    cy.wait(5000)
    //Finally verify the post was created
    cy.get('a[href="#/dashboard/"]').eq(0).click({ force: true })
    cy.wait(2000)
    cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))
    cy.visit(Cypress.env('GHOST_POSTS_URL'))
    cy.wait(2000)
    cy.screenshot('create_post_scenario_1/12', {overwrite: true})
    cy.url().should('eq', Cypress.env('GHOST_POSTS_URL'))
  })
})