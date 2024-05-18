describe('Funcionalidad: Crear post', () => {

    let dataPool = {}

    //Login 
    beforeEach(() => {
      // Given I go to Login page
      cy.visit(Cypress.env('GHOST_LOGIN_URL'))
      cy.wait(7000)

      // And I load the apriori datapool.
      const datapoolFile = 'post_apriori_datapool.json';
      cy.fixture(datapoolFile).then((data) => {
        dataPool = data;
      });

      // And I fill input form with GHOST_USERNAME and GHOST_PASSWORD
      cy.get('input.gh-input.email').type(Cypress.env('GHOST_USERNAME'))
      cy.get('input.gh-input.password').type(Cypress.env('GHOST_PASSWORD'))
      cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(2000)
      
      // And I wait for the dashboard to be visible
      cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))
  
      // And I go to the Posts page.
      cy.visit(Cypress.env('GHOST_POSTS_URL'))
    })
    it('Crear post que solo contega un titulo inválido', ()=>{
      // When I create a new post with a tittle
      cy.get('a[href="#/editor/post/"]').eq(0).click()
      cy.wait(5000)
      cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(dataPool.title)
      cy.wait(1000)
      cy.get('.kg-prose').click()
      cy.wait(3000)
      cy.get('p[data-koenig-dnd-droppable="true"]').type(dataPool.body);
      cy.wait(1000)
      cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(dataPool.invalid_title)
      cy.wait(3000)
      
      
  
      // And I publish it 
      cy.wait(5000)
      cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').eq(0).click()
      cy.wait(5000)

      //Then I expect to see error message.
      expect(cy.contains(Cypress.env('PAGE_TITLE_ERROR_MESSAGE')))
      
    })
  })