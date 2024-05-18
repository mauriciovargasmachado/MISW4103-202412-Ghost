describe('Funcionalidad: Crear draf', () => {
    let dataPool = {};

    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('TransitionAborted')) {
        // return false to prevent Cypress from failing the test
        return false;
      }
    });

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
      cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(2000)

      // And I Wait for the dashboard to be visible
      cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))

      // And I go to the Drafts page
      cy.wait(2000)
      cy.get('.gh-nav-viewname').eq(0).click()
      cy.wait(3000)
    })

    it('Crear un draft', ()=>{
      // When I create a new draft with a tittle and description
      cy.get('.ember-view.gh-btn.gh-btn-primary').eq(0).click()
      cy.wait(3000)

      cy.get('.gh-editor-title').type(dataPool.draft_valid_tittle)
      cy.wait(3000)

      cy.get('.kg-prose').type(dataPool.draft_valid_description)
      cy.wait(3000)


      // I go to drafts settings
      cy.get('.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').eq(0).click()
      cy.wait(3000)

      cy.get('.post-setting-custom-excerpt.ember-text-area.gh-input.ember-view').type(dataPool.draft_valid_description)
      cy.wait(6000)

      // And I go back to drafts page
      cy.get('.ember-view.gh-btn-editor.gh-editor-back-button').eq(0).click()
      cy.wait(3000)

      //When I click in the existing draft
      cy.get('.ember-view.permalink.gh-list-data.gh-post-list-title').eq(0).click()
      cy.wait(6000)

      // I go to drafts settings
      cy.get('.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').eq(0).click()
      cy.wait(3000)

      //Then I expect to see excerpt field fille
      cy.get('.post-setting-custom-excerpt.ember-text-area.gh-input.ember-view').invoke('val').then((excerptText) => {
        expect(excerptText).to.include(dataPool.draft_valid_description);
    });
    })
  })