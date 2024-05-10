Feature: Crear draft

@user3 @web
Scenario: Crear un borrador con titulo y descripcion.

  Given I navigate to page "<GHOST_LOGIN_URL_OLD>"
  And I wait for 5 seconds
  And I take a screenshot and save it in "create_drat_scenario_1_old/1"

  And I fill the old login form email with "<GHOST_USERNAME_OLD>"
  And I wait for 2 seconds
  And I take a screenshot and save it in "create_draft_scenario_1_old/2"

  And I fill the old login form password with "<GHOST_PASSWORD_OLD>"
  And I wait for 2 seconds
  And I take a screenshot and save it in "create_draft_scenario_1_old/3"

  And I try to login in the old site
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_drat_scenario_1_old/4"

  And I wait for the old dashboard to be visible

  When I navigate to page "<GHOST_DRAFT_URL_OLD>"
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_1_old/5"

  And I click in the old draft button
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_1_old/6"

  And I click in the old new post button
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_1_old/6"

  And I fill the old draft title with "<VALID_DRAFT_TITLE>"
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_1_old/7"

  And I fill the olf draft with a valid description with "<VALID_DRAFT_DESCRIPTION>"
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_1_old/8"

  And I click old back to draft
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_1_old/9"

  Then I expect to see the old draft save
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_1_old/10"
  