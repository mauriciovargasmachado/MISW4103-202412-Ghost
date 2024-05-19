import { faker } from '@faker-js/faker'

describe('Funcionalidad: Crear tag', () => {

    //Login 
    beforeEach(() => {
      //Given I go to Login page
      cy.visit(Cypress.env('GHOST_LOGIN_URL'))
      cy.wait(5000)
  
      //And I fill input form with GHOST_USERNAME and GHOST_PASSWORD
      cy.get('input.gh-input.email').type(Cypress.env('GHOST_USERNAME'))
      cy.get('input.gh-input.password').type(Cypress.env('GHOST_PASSWORD'))
      cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(2000)
  
      // And I wait for the dashboard to be visible
      cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))
  
      // And I go to the Tags page.
      cy.visit(Cypress.env('GHOST_TAG_URL'))
      cy.url().should("eq", Cypress.env("GHOST_TAG_URL"));
      cy.wait(7000)
    })
    it('Crear tag con metadata, twitter card incompleto, facebook incompleto y code injecion', () => {
        
      //When I create a new tag with a title, incomplate metadata and incomplate twitter and incomplate facebook and code injection
      cy.wait(2000)
      cy.get('a[href="#/tags/new/"]').eq(0).click()
      cy.wait(5000)
      cy.get('#tag-name').type(faker.lorem.words(3))
      cy.wait(5000)
      cy.get('[placeholder="15171A"]').type('15171A')
      cy.wait(5000)
      cy.get('#tag-description').type(faker.lorem.words(6))
      cy.wait(3000)
      cy.get('button.gh-btn.gh-btn-expand').eq(0).click()
      cy.wait(3000)
      cy.get('#meta-title').type(faker.lorem.words(3))
      cy.wait(3000)
      cy.get('#meta-description').type(faker.lorem.words(6))
      cy.wait(3000)
      cy.get('#canonical-url').type(faker.internet.url())
      cy.wait(3000)
      cy.get('button.gh-btn.gh-btn-expand').eq(0).click()
      cy.wait(3000)
      cy.get('button.gh-btn.gh-btn-expand').eq(1).click()
      cy.wait(3000)
      cy.get('#twitter-title').type(faker.lorem.words(3))
      cy.wait(3000)
      cy.get('#twitter-description').type(faker.lorem.words(6))
      cy.wait(3000)
      cy.get('button.gh-btn.gh-btn-expand').eq(1).click()
      cy.wait(3000)
      cy.get('button.gh-btn.gh-btn-expand').eq(2).click()
      cy.wait(3000)
      cy.get('#og-title').type(faker.lorem.words(3))
      cy.wait(3000)
      cy.get('#og-description').type(faker.lorem.words(6))
      cy.wait(3000)
      cy.get('button.gh-btn.gh-btn-expand').eq(2).click()
      cy.wait(3000)
      cy.get('button.gh-btn.gh-btn-expand').eq(3).click()
      cy.wait(3000)
      cy.get('pre[class=" CodeMirror-line "]').eq(0).type(`<html>
        <head>
        <title>Page Title</title>
        </head>
        <body>
        <h1>${faker.lorem.words(5)}</h1>
        <p>${faker.lorem.words(20)}</p>
        </body>
        </html>`, { parseSpecialCharSequences: false })
      cy.wait(5000)
      cy.get('button.gh-btn.gh-btn-expand').eq(3).click()
      cy.wait(3000)

      //And I try to create it 
      cy.get('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click()
      cy.wait(3000)
  
      //Then I expect that the tag isn't created.
      cy.visit(Cypress.env('GHOST_TAG_URL'))
      cy.wait(2000)
      cy.url().should('eq', Cypress.env('GHOST_TAG_URL'))
    })
  })