describe('Funcionalidad: Crear páginas', () => {
  beforeEach(() => {
    // Given I go to Ghost login screen.
    cy.visit(Cypress.env('GHOST_LOGIN_URL'))
    cy.wait(5000)
    cy.screenshot('create_page_scenario_3/1', {overwrite: true})

    // And I fill the login form with <GHOST_USERNAME> and <GHOST_PASSWORD>	
    cy.get('input.gh-input.email').type(Cypress.env('GHOST_USERNAME'))
    cy.screenshot('create_page_scenario_3/2', {overwrite: true})
    cy.get('input.gh-input.password').type(Cypress.env('GHOST_PASSWORD'))
    cy.screenshot('create_page_scenario_3/3', {overwrite: true})

    // And I try to login
    cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click()
    cy.wait(2000)
    cy.screenshot('create_page_scenario_3/4', {overwrite: true})

    // And I wait for the dashboard to be visible
    cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))
  })
  it('Crear una página con título pero sin cuerpo y publicarla directamente.', ()=>{
    // When I try to create a new page
    cy.visit(Cypress.env('GHOST_PAGES_URL'))
    cy.screenshot('create_page_scenario_3/5', {overwrite: true})
    cy.get('a[href="#/editor/page/"]').eq(0).click()
    cy.wait(5000)
    cy.screenshot('create_page_scenario_3/6', {overwrite: true})

    // And I fill the page form with <VALID_PAGE_TITLE> and <EMPTY_PAGE_BODY>
    cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(Cypress.env('VALID_PAGE_TITLE'))
    cy.screenshot('create_page_scenario_3/7', {overwrite: true})
    cy.wait(1000)
    cy.get('.kg-prose').click()
    cy.wait(1000)
    cy.screenshot('create_page_scenario_3/8', {overwrite: true})
    cy.get('p[data-koenig-dnd-droppable="true"]').invoke('val', Cypress.env('EMPTY_PAGE_BODY'));
    cy.wait(1000)
    cy.screenshot('create_page_scenario_3/9', {overwrite: true})

    // And I try to publish the page
    cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').eq(0).click()
    cy.wait(3000)
    cy.screenshot('create_page_scenario_3/10', {overwrite: true, disableTimersAndAnimations: false})
    cy.get('button.gh-btn.gh-btn-black.gh-btn-large').click()
    cy.wait(3000)
    cy.screenshot('create_page_scenario_3/11', {overwrite: true, disableTimersAndAnimations: false})
    cy.get('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view').click()
    cy.wait(5000)
    cy.screenshot('create_page_scenario_3/12', {overwrite: true, disableTimersAndAnimations: false})

    // Then I expect to see <PUBLISH_PAGE_SUCCESS_MESSAGE>
    cy.get('span.green').then(($span)=>{
      expect($span.text()).to.equal(Cypress.env('PUBLISH_PAGE_SUCCESS_MESSAGE'))
  }) 
  })
})