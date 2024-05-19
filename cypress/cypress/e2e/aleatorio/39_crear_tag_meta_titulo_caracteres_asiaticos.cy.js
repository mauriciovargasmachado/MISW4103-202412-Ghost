import { faker } from '@faker-js/faker'

describe('Funcionalidad: Crear tag', () => {

    const asianCharacters = '你好世界这是一个测试'.split('');
    function generateAsianString(length) {
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = faker.datatype.number({ min: 0, max: asianCharacters.length - 1 });
            result += asianCharacters[randomIndex];
        }
        return result;
        }

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
    cy.wait(3000)
    cy.url().should("eq", Cypress.env("GHOST_TAG_URL"));
  })
  it('Crear tag con nombre válido aleatorio y meta data title válido aleatorio.', () => {

    //When I create a new tag with a title
    cy.get('a[href="#/tags/new/"]').eq(0).click()
    cy.wait(5000)
    cy.get('#tag-name').type(faker.string.alpha({ length: { min: 1, max: 191 } }))
    cy.wait(2000)
    cy.get('.gh-btn.gh-btn-expand').first().click()
    cy.wait(2000)

    const asianString = generateAsianString(15);

    cy.get("#meta-title").type(asianString)
    cy.wait(2000)

    //And I try to create it 
    cy.get('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click()
    cy.wait(3000)

    //Then I expect that the tag is created.
    cy.get('.gh-canvas-breadcrumb').then(($elem) => {
      expect($elem.text()).contains(Cypress.env('EDIT_TAG_LABEL'))
    })
  })
})