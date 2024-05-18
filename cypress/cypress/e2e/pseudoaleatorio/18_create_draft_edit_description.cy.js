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

      // And fill input form with GHOST_USERNAME and GHOST_PASSWORD
      cy.get('input.gh-input.email').type(Cypress.env('GHOST_USERNAME'))


      cy.get('input.gh-input.password').type(Cypress.env('GHOST_PASSWORD'))

      // And I click in the log in button
      cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(2000)


      // And I Wait for the dashboard to be visible
      cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))
      cy.wait(2000)
  

      // And I go to the Drafts page
      cy.get('.gh-nav-viewname').eq(0).click()
 
    })
    it('Edit un draft', ()=>{
      //When I edit the description of an existing draft 
      cy.get('.ember-view.permalink.gh-list-data.gh-post-list-title').eq(0).click()
      cy.wait(6000)


      cy.get('.kg-prose').type(dataPool.draft_description_edited)
      cy.wait(6000)


      // And I go back to drafts page
      cy.get('.ember-view.gh-btn-editor.gh-editor-back-button').eq(0).click()
      cy.wait(6000)

      cy.get('.ember-view.permalink.gh-list-data.gh-post-list-title').eq(0).click()
      cy.wait(6000)


      //Then I expect to see the updated draft.
      cy.get('.kg-prose').should('contain', dataPool.draft_description_edited);


    })
})