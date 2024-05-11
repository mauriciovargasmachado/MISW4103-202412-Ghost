Feature: Crear draft

@user3 @web
Scenario: Borrar un borrador.

  Given I navigate to page "<GHOST_LOGIN_URL>"
  And I wait for 5 seconds
  And I take a screenshot and save it in "create_draft_scenario_3/1"

  And I fill the login form email with "<GHOST_USERNAME>"
  And I wait for 2 seconds
  And I take a screenshot and save it in "create_draft_scenario_3/2"

  And I fill the login form password with "<GHOST_PASSWORD>"
  And I wait for 2 seconds
  And I take a screenshot and save it in "create_draft_scenario_3/3"

  And I try to login
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_3/4"

  And I wait for the dashboard to be visible

  When I navigate to page "<GHOST_DRAFT_URL>"
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_3/5"

  And I click in the draft button
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_3/6"

  And I click in the new post button
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_3/7"

  And I fill the draft title with "<VALID_DRAFT_TITLE>"
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_3/8"

  And I fill the draf with a valid description with "<VALID_DRAFT_DESCRIPTION>"
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_3/9"

  And I click back to draft
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_3/10"

  And I click right button
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_3/11"

  And I click on the delete button
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_3/12"

  Then I delete the draft
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_3/13"






