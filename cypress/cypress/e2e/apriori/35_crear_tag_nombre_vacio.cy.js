describe("Funcionalidad: Crear tag", () => {
  let dataPool = {};

  //Login
  beforeEach(() => {
    //Given I go to Login page
    cy.visit(Cypress.env("GHOST_LOGIN_URL"));
    cy.wait(5000);

    // And I load the apriori datapool.
    const datapoolFile = "tag_apriori_datapool.json";
    cy.fixture(datapoolFile).then((data) => {
      dataPool = data;
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

  it("Crear tag con con el campo nombre vacio", () => {
    //When I create a new tag with a empty name
    cy.get('a[href="#/tags/new/"]').eq(0).click();
    cy.wait(5000);
    cy.get("#tag-name").invoke('val', dataPool.emptyName);
    cy.wait(3000);

    //And I try to create it
    cy.get("button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view").click();
    cy.wait(3000);

    //Then I expect that the tag isn't created.
    cy.get("p.response").then(($elem) => {
      expect($elem.text()).contains(Cypress.env("EMPTY_TAG_NAME_ERROR_MESSAGE"));
    });
  });
});