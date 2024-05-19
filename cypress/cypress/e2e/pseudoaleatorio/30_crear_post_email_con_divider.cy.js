describe('Funcionalidad: Crear post', () => {

    let dataPool = {}
    //Login 
    beforeEach(() => {
      //Given I go to Login page
      cy.visit(Cypress.env('GHOST_LOGIN_URL'))
      cy.wait(4000)
    
      // And I load the pseudoaleatorio datapool.
      const url = Cypress.env('PSEUDO_ALEATORIO_DATAPOOLS')["POSTS"];
      cy.request(url).then((response) => {
       dataPool = response.body;
      });

      //And I Fill input form with GHOST_USERNAME and GHOST_PASSWORD
      cy.get('input.gh-input.email').type(Cypress.env('GHOST_USERNAME'))
      cy.get('input.gh-input.password').type(Cypress.env('GHOST_PASSWORD'))
      cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(5000)

      // And I wait for the dashboard to be visible
      cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))

      //And I go to the Posts page
      cy.visit(Cypress.env('GHOST_POSTS_URL'))
      cy.wait(2000)
      //cy.wait(3000)
    })
    it('Crear post con titulo, email y divider', ()=>{

        //When I create a new post with a title, description, email and divider
        cy.wait(2000)
        cy.get('a[href="#/editor/post/"]').eq(0).click()
        cy.wait(2000)
        cy.wait(2000)
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(dataPool.title)
        cy.wait(5000)
        cy.get('.kg-prose').type(`${dataPool.short_description}{enter}`)
        cy.wait(5000)
        cy.get('.kg-prose').type('/hr{enter}')
        cy.wait(5000)
        cy.get('.kg-prose').type('/email-cta{enter}')
        cy.wait(5000)
        cy.get('div[role="textbox"]').each(($div) => {
            if ($div.find('p').length > 0 && $div.find('p').text().trim() === '') {
              cy.wrap($div).type(`${dataPool.long_description}{enter}`);
            }
        })
        cy.wait(5000)
        

        // And I publish it
        cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').eq(0).click()
        cy.wait(3000)
        cy.get('button.gh-btn.gh-btn-black.gh-btn-large').click()
        cy.wait(3000)
        cy.get('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view').click()
        cy.wait(5000)

        // Then I expect that the post is created.
        cy.get('a[href="#/dashboard/"]').eq(0).click({ force: true })
        cy.wait(2000)
        cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))
        cy.visit(Cypress.env('GHOST_POSTS_URL'))
        cy.wait(2000)
        cy.url().should('eq', Cypress.env('GHOST_POSTS_URL'))
    })
})