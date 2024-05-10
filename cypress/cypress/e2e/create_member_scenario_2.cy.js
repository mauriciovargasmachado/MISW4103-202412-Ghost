import { faker } from '@faker-js/faker'

describe('Funcionalidad: Crear miembro', () => {
  beforeEach(() => {
    // Go to Ghost login screen.
    cy.visit(Cypress.env('GHOST_LOGIN_URL'));
    cy.wait(5000);
    cy.screenshot('create_member_scenario_2/1', {overwrite: true})

    // Fill the login form with <GHOST_USERNAME> and <GHOST_PASSWORD>	
    cy.get('input.gh-input.email').type(Cypress.env('GHOST_USERNAME'));
    cy.screenshot('create_member_scenario_2/2', {overwrite: true})
    cy.get('input.gh-input.password').type(Cypress.env('GHOST_PASSWORD'));
    cy.screenshot('create_member_scenario_2/3', {overwrite: true})

    // Try to login
    cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click();    
    cy.wait(2000);
    cy.screenshot('create_member_scenario_2/4', {overwrite: true})

    // Wait for the dashboard to be visible
    cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'));
  })
  it('Crear un miembro con una dirección de correo electrónico ya existente', ()=> {
    // Try to create a new member
    cy.visit(Cypress.env('GHOST_MEMBERS_URL'));
    cy.wait(3000);    
    cy.url().should('eq', Cypress.env('GHOST_MEMBERS_URL'))
    cy.screenshot('create_member_scenario_2/5', {overwrite: true})
    cy.get('a[href="#/members/new/"]').eq(0).click();
    cy.wait(3000);
    cy.screenshot('create_member_scenario_2/6', {overwrite: true})

    // Fill the member information with random data
    var email = faker.internet.email();
    cy.get('input[name="name"]').type(faker.person.fullName());
    cy.wait(3000);
    cy.screenshot('create_member_scenario_2/7', {overwrite: true})
    cy.get('input[name="email"]').type(email);
    cy.wait(3000);
    cy.screenshot('create_member_scenario_2/8', {overwrite: true})

    // Try to save the new member
    cy.get('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
    cy.wait(2000);
    cy.screenshot('create_member_scenario_2/9', {overwrite: true})

    // Expect that the creation message contains <MEMBER_SUCCESS_MESSAGE>
    cy.get('div.gh-member-details-attribution p').then(($p)=>{
      expect($p.text()).contains(Cypress.env('MEMBER_SUCCESS_MESSAGE'));
    });

    // Check the new member in the members list
    cy.visit(Cypress.env('GHOST_MEMBERS_URL'));
    cy.wait(3000);
    cy.url().should('eq', Cypress.env('GHOST_MEMBERS_URL'))
    cy.screenshot('create_member_scenario_2/10', {overwrite: true})
    var emails = [];
    cy.get('div table.gh-list tbody tr').each(($tr) => {
        cy.wrap($tr).find('a').then(($a) => {
            var $p = $a.find('p');
            $p.each((_, element) => {
                emails.push(Cypress.$(element).text());
            });
        });
    }).then(() => {
        expect(emails).to.include(email); 
    });

    // Try to create a new member with the same email
    cy.get('a[href="#/members/new/"]').eq(0).click();
    cy.wait(3000);
    cy.screenshot('create_member_scenario_2/11', {overwrite: true})

    // Fill the member information with random data and the same email
    cy.get('input[name="name"]').type(faker.person.fullName());
    cy.wait(3000);
    cy.screenshot('create_member_scenario_2/12', {overwrite: true})
    cy.get('input[name="email"]').type(email);
    cy.wait(3000);
    cy.screenshot('create_member_scenario_2/13', {overwrite: true})

    // Ignore uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable, promise) => {
        return false
    });

    // Try to save the new member
    cy.get('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').eq(0).click();
    cy.wait(3000);
    cy.screenshot('create_member_scenario_2/14', {overwrite: true})
    
    // Expect that the creation message contains <EXISTING_MEMBER_ERROR_MESSAGE>
    cy.get('div.form-group.max-width.error p.response').then(($svg)=>{
        expect($svg.text()).contains(Cypress.env('EXISTING_MEMBER_ERROR_MESSAGE'));
    });
  })
})