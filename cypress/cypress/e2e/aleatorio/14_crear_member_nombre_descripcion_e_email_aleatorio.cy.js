import { faker } from '@faker-js/faker'

describe("Funcionalidad: Crear miembro", () => {

  //Login
  beforeEach(() => {
    // Given I go to Ghost login screen.
    cy.visit(Cypress.env("GHOST_LOGIN_URL"));
    cy.wait(5000);

    // And I fill the login form with <GHOST_USERNAME> and <GHOST_PASSWORD>
    cy.get("input.gh-input.email").type(Cypress.env("GHOST_USERNAME"));
    cy.get("input.gh-input.password").type(Cypress.env("GHOST_PASSWORD"));

    // And I try to login
    cy.get("button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view").click();
    cy.wait(2000);

    // And I wait for the dashboard to be visible
    cy.url().should("eq", Cypress.env("GHOST_DASHBOARD_URL"));
  });

  it("Crear un miembro con campos nombre, email y descripción aleatorios inválidos", () => {
    // When I try to create a new member
    cy.visit(Cypress.env("GHOST_MEMBERS_URL"));
    cy.wait(3000);
    cy.url().should("eq", Cypress.env("GHOST_MEMBERS_URL"));
    cy.get('a[href="#/members/new/"]').eq(0).click();
    cy.wait(3000);

    // And I fill the member information with random data
    cy.get('input[name="name"]').type(faker.string.alpha({ length: { min: 192, max: 300 }}));
    cy.wait(3000);
    cy.get('input[name="email"]').type(faker.string.alpha({ length: { min: 1, max: 50 }}));
    cy.wait(3000);
    cy.get('textarea[name="note"]').type(faker.string.alpha({ length: { min: 500, max: 600 }}));
    cy.wait(3000);

    // And I try to save the new member
    cy.get("button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view").click();
    cy.wait(5000);

    // Then I expect that the creation message contains <EMAIL_MEMBER_ERROR_MESSAGE>
    cy.get('div.form-group.max-width.error p.response').then(($p)=>{
      expect($p.text()).contains(Cypress.env('EMAIL_MEMBER_ERROR_MESSAGE'));
    });

    // Then I expect that the creation message contains <NOTE_MEMBER_ERROR_MESSAGE>
    cy.get('div.form-group.gh-member-note.error p.response').then(($p)=>{
      expect($p.text()).contains(Cypress.env('NOTE_MEMBER_ERROR_MESSAGE'));
    });

    // Then I expect that the creation message contains <NAME_MEMBER_ERROR_MESSAGE>
    cy.get('div.form-group.max-width p.response').then(($p)=> {
      expect($p.text()).contains(Cypress.env("NAME_MEMBER_ERROR_MESSAGE"));
    });
  
    // And I expect that the create button message contains "Retry"
    cy.get("span[data-test-task-button-state='failure']").then((span) => {
      expect(span.text()).contains(Cypress.env("ERROR_MESSAGE_ON_SAVE_BUTTON"));
    });
  });
});