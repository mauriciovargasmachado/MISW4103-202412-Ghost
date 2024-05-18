describe("Funcionalidad: Crear miembro", () => {
  let dataPool = {};

  //Login
  beforeEach(() => {
    // Given I go to Ghost login screen.
    cy.visit(Cypress.env("GHOST_LOGIN_URL"));
    cy.wait(5000);

    // And I load the pseudoaleatorio datapool.
    const datapoolUrl = Cypress.env("PSEUDO_ALEATORIO_DATAPOOLS")["MEMBERS"];
    cy.request(datapoolUrl).then((response) => {
      dataPool = response.body;
    });

    // And I fill the login form with <GHOST_USERNAME> and <GHOST_PASSWORD>
    cy.get("input.gh-input.email").type(Cypress.env("GHOST_USERNAME"));
    cy.get("input.gh-input.password").type(Cypress.env("GHOST_PASSWORD"));

    // And I try to login
    cy.get("button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view").click();
    cy.wait(2000);

    // And I wait for the dashboard to be visible
    cy.url().should("eq", Cypress.env("GHOST_DASHBOARD_URL"));
  });

  it("Crear un miembro agregando una etiqueta ya existente", () => {
    // When I try to create a new member
    cy.visit(Cypress.env("GHOST_MEMBERS_URL"));
    cy.wait(3000);
    cy.url().should("eq", Cypress.env("GHOST_MEMBERS_URL"));
    cy.get('a[href="#/members/new/"]').eq(0).click();
    cy.wait(3000);

    // And I fill the member information with pseudo-random data from the dataPool.
    cy.get('input[name="name"]').type(dataPool.name);
    cy.wait(3000);
    cy.get('input[name="email"]').type(dataPool.email);
    cy.wait(3000);
    cy.get('textarea[name="note"]').type(dataPool.note);
    cy.wait(3000);
    cy.get("input.ember-power-select-trigger-multiple-input").type(dataPool.label);
    cy.wait(3000);
    cy.get('li.ember-power-select-option').click();
    cy.wait(3000);

    // And I fill the label with an existing label
    cy.get("input.ember-power-select-trigger-multiple-input").type(dataPool.label);
    cy.wait(3000);

    // Then I expect that the label creation message contains <LABEL_NAME_NOT_FOUND>
    cy.get("li.ember-power-select-option.ember-power-select-option--no-matches-message").then((li) => {
      expect(li.text()).contains(Cypress.env("LABEL_NAME_NOT_FOUND"));
    });
  });
});
