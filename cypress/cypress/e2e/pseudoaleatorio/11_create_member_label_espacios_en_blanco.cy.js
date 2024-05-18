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

  it("Crear un miembro agregando una etiqueta con espacios en blanco", () => {
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
    cy.get("input.ember-power-select-trigger-multiple-input").type(dataPool.labelWithSpaces);
    cy.wait(3000);
    cy.get("li.ember-power-select-option").click();
    cy.wait(3000);

    // And I intercept the uncaught exception
    Cypress.on('uncaught:exception', (err, runnable, promise) => {
      return false
    });

    // And I intercept the POST request to validate the response
    cy.intercept("POST", "/ghost/api/admin/members/**").as("postAccionInvalida");

    // And I try to save the new member
    cy.get("button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view").click();
    cy.wait(2000);

    // Then I expect that the response is 422 and contains the error message
    cy.wait('@postAccionInvalida').its("response").should((response) => {
      expect(response.statusCode).to.equal(422);
      expect(response.body.errors).to.have.length(1);
      expect(response.body.errors[0]).to.include({
        message: "Validation error, cannot save member.",
        context: "Value in [labels.name] cannot be blank. labels.name",
        type: "ValidationError",
      });
    });

    // And I expect that the create button message contains "Retry"
    cy.get("span[data-test-task-button-state='failure']").then((span) => {
      expect(span.text()).contains(Cypress.env("ERROR_MESSAGE_ON_SAVE_BUTTON"));
    });
  });
});
