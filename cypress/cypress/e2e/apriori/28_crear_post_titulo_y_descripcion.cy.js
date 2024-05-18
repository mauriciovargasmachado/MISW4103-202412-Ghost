describe('Funcionalidad: Crear páginas', () => {
    let dataPool = {}

    beforeEach(() => {
      // Given I go to Ghost login screen.
      cy.visit(Cypress.env('GHOST_LOGIN_URL'))
      cy.wait(5000)

      // And I load the apriori datapool.
      const datapoolFile = 'post_apriori_datapool.json';
      cy.fixture(datapoolFile).then((data) => {
        dataPool = data;
      });

      // And I fill the login form with <GHOST_USERNAME> and <GHOST_PASSWORD>	
      cy.get('input.gh-input.email').type(Cypress.env('GHOST_USERNAME'))
      
      cy.get('input.gh-input.password').type(Cypress.env('GHOST_PASSWORD'))
  
      // And I try to login
      cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(2000)
  
      // And I wait for the dashboard to be visible
      cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))
    })
    it('Crear una página con título y descripción válidos y programar su publicación.', ()=>{
      // When I try to create a new page
      cy.visit(Cypress.env('GHOST_PAGES_URL'))
      
      cy.get('a[href="#/editor/page/"]').eq(0).click()
      cy.wait(5000)
      
  
      // And I fill the page form with <VALID_PAGE_TITLE> and <VALID_PAGE_BODY>
      cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(dataPool.title)
      
      cy.wait(1000)
      cy.get('.kg-prose').click()
      cy.wait(1000)
      
      cy.get('p[data-koenig-dnd-droppable="true"]').type(dataPool.body);
      cy.wait(1000)
      
  
      // And I try to publish the page
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
      
  
      // Then I expect to see <SCHEDULE_PAGE_SUCCESS_MESSAGE>
      cy.get('span.green').then(($span)=>{
        expect($span.text()).to.equal(Cypress.env('SCHEDULE_PAGE_SUCCESS_MESSAGE'))
    }) 
    })
  })