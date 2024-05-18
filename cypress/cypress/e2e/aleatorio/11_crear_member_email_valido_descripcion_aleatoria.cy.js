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

  it("Crear un miembro con campos email valido y descripción aleatoria", () => {
    // When I try to create a new member
    cy.visit(Cypress.env("GHOST_MEMBERS_URL"));
    cy.wait(3000);
    cy.url().should("eq", Cypress.env("GHOST_MEMBERS_URL"));
    cy.get('a[href="#/members/new/"]').eq(0).click();
    cy.wait(3000);

    // And I fill the member information with random data
    var email = faker.internet.email();
    cy.get('input[name="email"]').type(email);
    cy.wait(3000);
    cy.get('textarea[name="note"]').type(faker.string.alpha({ length: { min: 1, max: 150 }}));
    cy.wait(3000);

    // And I try to save the new member
    cy.get("button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view").click();
    cy.wait(7000);

    // Then I expect that the creation message contains <MEMBER_SUCCESS_MESSAGE>
    cy.get("div.gh-member-details-attribution p").then(($p) => {
      expect($p.text()).contains(Cypress.env("MEMBER_SUCCESS_MESSAGE"));
    });
    cy.wait(7000);

    // And I check the new member in the members list
    cy.visit(Cypress.env("GHOST_MEMBERS_URL"));
    cy.wait(7000);
    cy.url().should("eq", Cypress.env("GHOST_MEMBERS_URL"));
    var emails = [];
    cy.get("div table.gh-list tbody tr").each(($tr) => {
      cy.wrap($tr).find("a").then(($a) => {
          var h3 = $a.find("h3");
          h3.each((_, element) => {
            emails.push(Cypress.$(element).text());
          });
      });
    }).then(() => {
      expect(emails).to.include(email);
    });
  });

  afterEach(() => {
    cy.get("div table.gh-list tbody tr a").first().click({force: true});
    cy.wait(2000);
    cy.get("section span.dropdown").click();
    cy.contains("span", "Delete member").click();
    cy.wait(2000);
    cy.get("button.gh-btn.gh-btn-red.gh-btn-icon.ember-view").click();
    cy.wait(5000);
  });
});