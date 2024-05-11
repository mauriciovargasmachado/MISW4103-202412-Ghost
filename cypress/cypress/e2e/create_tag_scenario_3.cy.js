describe('Funcionalidad: Crear tag', () => {
    beforeEach(() => {
      
      //Given I go to Login page
      cy.visit(Cypress.env('GHOST_LOGIN_URL'))
      cy.wait(2000)

      //And I fill input form with GHOST_USERNAME and GHOST_PASSWORD
      cy.get('input.gh-input.email').type(Cypress.env('GHOST_USERNAME'))
      cy.get('input.gh-input.password').type(Cypress.env('GHOST_PASSWORD'))
      cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(2000)

      // And I wait for the dashboard to be visible
      cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))

      // And I go to the Tags page.
      cy.visit(Cypress.env('GHOST_TAG_URL'))
    })
    it('Crear un tag con descripción valida <=500 caracteres.', ()=>{

        // When I create a new tag with a title and color
        cy.get('a[href="#/tags/new/"]').eq(0).click()
        cy.wait(2000)
        cy.get('#tag-name').type('Test1')
        cy.wait(3000)
        cy.get('[placeholder="15171A"]').type('ff0080')
        cy.wait(2000)

        // I and check the tag description.
        cy.get('#tag-description').type('Test1')
        cy.get('#tag-description').invoke('val').then(tagName => {
        expect(tagName.length).to.be.lte(500);
        });
        
        // And I publish it.
        cy.get('#tag-name').type(' This is another part of the test')
        cy.get('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click()
        cy.wait(2000)
        
        // Then I expect that the tag is created.
        cy.visit(Cypress.env('GHOST_TAG_URL'))
        cy.wait(2000)
        cy.url().should('eq', Cypress.env('GHOST_TAG_URL'))
    })
})