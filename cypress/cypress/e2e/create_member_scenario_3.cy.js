import { faker } from '@faker-js/faker'

describe('Funcionalidad: Crear miembro', () => {
  beforeEach(() => {
    // Go to Ghost login screen.
    cy.visit(Cypress.env('GHOST_LOGIN_URL'));
    cy.wait(5000);

    // Fill the login form with <GHOST_USERNAME> and <GHOST_PASSWORD>	
    cy.get('input.gh-input.email').type(Cypress.env('GHOST_USERNAME'));
    cy.get('input.gh-input.password').type(Cypress.env('GHOST_PASSWORD'));

    // Try to login
    cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click();    
    cy.wait(2000);

    // Wait for the dashboard to be visible
    cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'));
  })
  it('Crear un miembro con el campo "Note" mayor a 500 caracteres', ()=> {    
    // Try to create a new member
    cy.visit(Cypress.env('GHOST_MEMBERS_URL'));
    cy.wait(3000);
    cy.url().should('eq', Cypress.env('GHOST_MEMBERS_URL'))
    cy.get('a[href="#/members/new/"]').eq(0).click();
    cy.wait(3000);

    // Fill the member information with random data
    cy.get('input[name="name"]').type(faker.person.fullName());
    cy.wait(3000);
    cy.get('input[name="email"]').type(faker.internet.email());
    cy.wait(3000);
    cy.get('textarea[name="note"]').type(faker.string.alphanumeric(501));
    cy.wait(3000);

    // Try to save the new member
    cy.get('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
    cy.wait(3000);

    // Expect that the creation message contains <NOTE_MEMBER_ERROR_MESSAGE>
    cy.get('div.form-group.gh-member-note.error p.response').then(($p)=>{
      expect($p.text()).contains(Cypress.env('NOTE_MEMBER_ERROR_MESSAGE'));
    });
  })
})