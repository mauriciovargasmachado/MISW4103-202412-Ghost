describe('Funcionalidad: Crear tag', () => {
    
    //Login 
    beforeEach(() => {
      
      //Go to Login page
      cy.visit(Cypress.env('GHOST_LOGIN_URL'))
      cy.wait(2000)

      //Fill input form with GHOST_USERNAME and GHOST_PASSWORD
      cy.get('input.gh-input.email').type(Cypress.env('GHOST_USERNAME'))
      cy.get('input.gh-input.password').type(Cypress.env('GHOST_PASSWORD'))
      cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(2000)

      //Go to main page
      cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))

      //Then post page
      cy.visit(Cypress.env('GHOST_TAG_URL'))
    })
    it('Crear un tag con descripción valida >500 caracteres', ()=>{

        //Create a new tag with a title and color
        cy.get('a[href="#/tags/new/"]').eq(0).click()
        cy.wait(2000)
        cy.get('#tag-name').type('Test1')
        cy.wait(3000)
        cy.get('[placeholder="15171A"]').type('ff0080')
        cy.wait(2000)

       // Generate a string > 500 characters
       const longDescription = 'x'.repeat(501);

       // Fill tag description field with the longDescription
       cy.get('#tag-description').type(longDescription)

       // Verify that the length of the tag description is > 500 characters
       cy.get('#tag-description').invoke('val').then(description => {
           expect(description.length).to.be.gt(500);
       });
        
        //Then publish it 
        cy.get('#tag-name').type(' This is part of the test')
        cy.get('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click()
        cy.wait(2000)
        
        //Finally verify the post was created
        cy.visit(Cypress.env('GHOST_TAG_URL'))
        cy.wait(2000)
        cy.url().should('eq', Cypress.env('GHOST_TAG_URL'))
    })
})