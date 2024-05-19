import { faker } from '@faker-js/faker'

describe('Funcionalidad: Crear draf', () => {
    let dataPool = {};

    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('TransitionAborted')) {
        return false;
      }
    });

    function generate_tittle(words_in_tittle){
      let tittle = faker.lorem.words(words_in_tittle)
      return tittle
    }

    function generate_description(words_in_description){
      let description = faker.lorem.words(words_in_description)
      return description
    }

    //Login 
    beforeEach(() => {
        // Given I go to Login page
        cy.visit(Cypress.env('GHOST_LOGIN_URL'))
        cy.wait(7000)

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

    it('Crear un draft que edite el titulo y la descripcion de meta', ()=>{
      // When I create a new draft with a tittle and description
      cy.get('.ember-view.gh-btn.gh-btn-primary').eq(0).click()
      cy.wait(3000)

      let words_in_tittle =4
      cy.get('.gh-editor-title').type(generate_tittle(words_in_tittle))
      cy.wait(3000)

      let words_in_description = 15
      cy.get('.kg-prose').type(generate_description(words_in_description))
      cy.wait(3000)


      // I go to drafts settings
      cy.get('.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').eq(0).click()
      cy.wait(3000)

      //And I go to Meta
      cy.get('.nav-list-item').eq(3).click()
      cy.wait(3000)

      //And I edit meta tittle
      
      cy.get('.post-setting-meta-title.ember-text-field.gh-input.ember-view').type(generate_tittle(words_in_tittle))
      cy.wait(6000)

      //And I edit meta description
      
      cy.get('#meta-description').type(generate_description(words_in_description))
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

      //And I go to meta
      cy.get('.nav-list-item').eq(3).click()
      cy.wait(3000)

      //Then I expect to see meta description field fill
      cy.get('#meta-description').invoke('val').should('have.length.within', 50, 100);
    });
  });