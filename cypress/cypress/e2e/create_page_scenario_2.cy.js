describe('Funcionalidad: Crear páginas', () => {
  beforeEach(() => {
    // Go to Ghost login screen.
    cy.visit(Cypress.env('GHOST_LOGIN_URL'))
    cy.wait(5000)

    // Fill the login form with <GHOST_USERNAME> and <GHOST_PASSWORD>	
    cy.get('input.gh-input.email').type(Cypress.env('GHOST_USERNAME'))
    cy.get('input.gh-input.password').type(Cypress.env('GHOST_PASSWORD'))

    // Try to login
    cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click()
    cy.wait(2000)

    // Wait for the dashboard to be visible
    cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))
  })
  it('Crear una página con título y descripción válidos y programar su publicación.', ()=>{
    // Try to create a new page
    cy.visit(Cypress.env('GHOST_PAGES_URL'))
    cy.get('a[href="#/editor/page/"]').eq(0).click()
    cy.wait(5000)

    // Fill the page form with <VALID_PAGE_TITLE> and <VALID_PAGE_BODY>
    cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(Cypress.env('VALID_PAGE_TITLE'))
    cy.wait(1000)
    cy.get('.kg-prose').click()
    cy.wait(1000)
    cy.get('p[data-koenig-dnd-droppable="true"]').type(Cypress.env('VALID_PAGE_BODY'));
    cy.wait(1000)

    // Try to publish the page
    cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').eq(0).click()
    cy.wait(3000)
    cy.get('button.gh-publish-setting-title').click()
    cy.wait(3000)
    cy.get('div[data-test-radio="schedule"]').click({ force: true })
    cy.wait(3000)
    cy.get('button.gh-btn.gh-btn-black.gh-btn-large').click()
    cy.wait(3000)
    cy.get('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view').click()
    cy.wait(5000)

    // Expect to see <SCHEDULE_PAGE_SUCCESS_MESSAGE>
    cy.get('span.green').then(($span)=>{
      expect($span.text()).to.equal(Cypress.env('SCHEDULE_PAGE_SUCCESS_MESSAGE'))
  }) 
  })
})