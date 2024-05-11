Feature: Crear draft

@user3 @web
Scenario: Editar la descripcion de un borrador.

  Given I navigate to page "<GHOST_LOGIN_URL>"
  And I wait for 5 seconds
  And I take a screenshot and save it in "create_draft_scenario_2/1"

  And I fill the login form email with "<GHOST_USERNAME>"
  And I wait for 2 seconds
  And I take a screenshot and save it in "create_draft_scenario_2/2"

  And I fill the login form password with "<GHOST_PASSWORD>"
  And I wait for 2 seconds
  And I take a screenshot and save it in "create_draft_scenario_2/3"

  And I try to login
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_2/4"

  And I wait for the dashboard to be visible

  When I navigate to page "<GHOST_DRAFT_URL>"
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_2/5"

  And I click in existing draft
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_2/6"

  And I edit the description with "<EDIT_DRAFT_DESCRIPTION>"
  And I wait for 10 seconds
  And I take a screenshot and save it in "create_draft_scenario_2/7"

  And I click back to draft
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_2/8"

  And I click in existing draft
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_2/9"

  Then I expect to see the edited text "<EDIT_DRAFT_DESCRIPTION>"
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_2/10"
  