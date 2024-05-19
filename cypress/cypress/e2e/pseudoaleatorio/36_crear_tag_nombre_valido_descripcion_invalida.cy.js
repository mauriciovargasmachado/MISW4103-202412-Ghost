describe("Funcionalidad: Crear tag", () => {
  let dataPool = {};

  //Login
  beforeEach(() => {
    //Given I go to Login page
    cy.visit(Cypress.env("GHOST_LOGIN_URL"));
    cy.wait(5000);

    // And I load the apriori datapool.
    const datapoolUrl = Cypress.env("PSEUDO_ALEATORIO_DATAPOOLS")["TAGS"];
    cy.request(datapoolUrl).then((response) => {
      dataPool = response.body;
    });

    //And I fill input form with GHOST_USERNAME and GHOST_PASSWORD
    cy.get("input.gh-input.email").type(Cypress.env("GHOST_USERNAME"));
    cy.get("input.gh-input.password").type(Cypress.env("GHOST_PASSWORD"));
    cy.get("button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view").click();
    cy.wait(2000);

    // And I wait for the dashboard to be visible
    cy.url().should("eq", Cypress.env("GHOST_DASHBOARD_URL"));

    // And I go to the Tags page.
    cy.visit(Cypress.env("GHOST_TAG_URL"));
    cy.wait(3000);
    cy.url().should("eq", Cypress.env("GHOST_TAG_URL"));
  });

  it("Crear tag con nombre válido y descripción inválido.", () => {
    //When I create a new tag with a title
    cy.get('a[href="#/tags/new/"]').eq(0).click();
    cy.wait(5000);
    cy.get("#tag-name").type(dataPool.name);
    cy.wait(2000);
    cy.get('#tag-description').type(dataPool.invalid_description)
    cy.wait(3000)

    //And I try to create it
    cy.get("button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view").click();
    cy.wait(3000);

    //Then I expect that the creation message contains <TAG_DESCRIPTION_ERROR_MESSAGE>
    cy.get('div.form-group.no-margin.error p.response').then(($p)=> {
      expect($p.text()).contains(Cypress.env("TAG_DESCRIPTION_ERROR_MESSAGE"));
    });

    // And I expect that the create button message contains "Retry"
    cy.get("span[data-test-task-button-state='failure']").then((span) => {
      expect(span.text()).contains(Cypress.env("ERROR_MESSAGE_ON_SAVE_BUTTON"));
    });
  });
});