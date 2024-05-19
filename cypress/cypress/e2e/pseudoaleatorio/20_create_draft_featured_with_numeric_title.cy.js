describe('Funcionalidad: Crear draf', () => {
    let dataPool = {};
  
    //Login 
    beforeEach(() => {
       // Given I go to Login page
       cy.visit(Cypress.env('GHOST_LOGIN_URL'))
       cy.wait(7000)
  
       // And I load the pseudoaleatorio datapool.
       const url = Cypress.env('PSEUDO_ALEATORIO_DATAPOOLS')["DRAFT"];
       cy.request(url).then((response) => {
         dataPool = response.body;
     });

      // And I Fill input form with GHOST_USERNAME and GHOST_PASSWORD
      cy.get('input.gh-input.email').type(Cypress.env('GHOST_USERNAME'))

      
      cy.get('input.gh-input.password').type(Cypress.env('GHOST_PASSWORD'))

      
      cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(2000)

      
      // And I Wait for the dashboard to be visible
      cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))
      cy.wait(2000)


      // And I go to the drafts page.
      cy.get('.gh-nav-viewname').eq(0).click()
      cy.wait(3000)


    })
    it('Añadir un feature a un draft creado con un titlo con numeros', ()=>{
      // When I create a new draft with a title and description
      cy.get('.ember-view.gh-btn.gh-btn-primary').eq(0).click()
      cy.wait(3000)

      cy.get('.gh-editor-title').type(dataPool.tag_numeric_title)
      cy.wait(3000)

      cy.get('.kg-prose').type(dataPool.draft_valid_description)
      cy.wait(6000)

      
      // And I go back to drafts page
      cy.get('.ember-view.gh-btn-editor.gh-editor-back-button').eq(0).click()
      cy.wait(6000)

      
      // And I set the draft as featured.
      cy.get('.ember-view.permalink.gh-list-data.gh-post-list-title').eq(0).trigger('contextmenu');
      cy.wait(3000)

      
      cy.get('.mr2').eq(0).click()
      cy.wait(3000)

      
      // Then I expect to see the updated featured draft.
      cy.get('.gh-featured-post').should('exist');

      
      // And the URL to be the Posts URL.
      cy.url().should('contains', Cypress.env('GHOST_POSTS_URL'))
    })
  })