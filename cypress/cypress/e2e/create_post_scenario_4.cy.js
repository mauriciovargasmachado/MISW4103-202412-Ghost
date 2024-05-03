describe('Funcionalidad: Crear post', () => {
    //Login 
    beforeEach(() => {
      //Go to Login page
      cy.visit(Cypress.env('GHOST_LOGIN_URL'))
      cy.wait(7000)
      //Fill input form with GHOST_USERNAME and GHOST_PASSWORD
      cy.get('input.gh-input.email').type(Cypress.env('GHOST_USERNAME'))
      cy.get('input.gh-input.password').type(Cypress.env('GHOST_PASSWORD'))
      cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(2000)
      //Go to main page
      cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))
      //Then post page
      cy.visit(Cypress.env('GHOST_POSTS_URL'))
    })
    it('Crear post con titulo, descripcion, divider y boton', ()=>{
        //Create a new post with a title, description and divider between title, description and button
        cy.get('a[href="#/editor/post/"]').eq(0).click()
        cy.wait(5000)
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type('Cuarta Prueba Automatizada')
        cy.wait(3000)
        cy.get('.kg-prose').click()
        cy.wait(3000)
        cy.get('.kg-prose').type('/hr{enter}')
        cy.wait(3000)
        cy.get('.kg-prose').type('Esta es una breve descripcion de prueba{enter}')
        cy.wait(3000)
        cy.get('.kg-prose').type('/button{enter}')
        cy.wait(3000)
        cy.get('input[placeholder="Add button text"]').type('Ir a Pagina')
        cy.wait(2000)
        cy.get('input[placeholder="https://yoursite.com/#/portal/signup/"]').type('https://www.youtube.com/')
        //Then publish it 
        cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').eq(0).click()
        cy.wait(3000)
        cy.get('button.gh-btn.gh-btn-black.gh-btn-large').click()
        cy.wait(3000)
        cy.get('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view').click()
        cy.wait(5000)
        //Finally verify the post was created
        cy.get('a[href="#/dashboard/"]').eq(0).click({ force: true })
        cy.wait(2000)
        cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))
        cy.visit(Cypress.env('GHOST_POSTS_URL'))
        cy.wait(2000)
        cy.url().should('eq', Cypress.env('GHOST_POSTS_URL'))
    })
})