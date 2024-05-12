Feature: Crear draft

@user3 @web
Scenario: Marcar un borrador como Featured.

  Given I navigate to page "<GHOST_LOGIN_URL>"
  And I wait for 5 seconds
  And I take a screenshot and save it in "create_draft_scenario_4/1"

  And I fill the login form email with "<GHOST_USERNAME>"
  And I wait for 2 seconds
  And I take a screenshot and save it in "create_draft_scenario_4/2"

  And I fill the login form password with "<GHOST_PASSWORD>"
  And I wait for 2 seconds
  And I take a screenshot and save it in "create_draft_scenario_4/3"

  And I try to login
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_4/4"

  And I wait for the dashboard to be visible

  When I navigate to page "<GHOST_DRAFT_URL>"
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_4/5"

  And I click in the new post button
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_4/6"

  And I fill the draft title with "<VALID_DRAFT_TITLE>"
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_4/7"

  And I fill the draf with a valid description with "<VALID_DRAFT_DESCRIPTION>"
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_4/8"

  And I click back to draft
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_4/9"

  And I click right button
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_4/10"

  And I click on the featured button
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_4/11"

  Then I expect to see the featured element
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_4/12"
