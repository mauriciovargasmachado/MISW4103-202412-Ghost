Feature: Crear draft

@user3 @web
Scenario: Crear un borrador con titulo y descripcion.

  Given I navigate to page "<GHOST_LOGIN_URL_OLD>"
  And I wait for 5 seconds
  And I take a screenshot and save it in "create_draft_scenario_2_old/1"

  And I fill the old login form email with "<GHOST_USERNAME_OLD>"
  And I wait for 2 seconds
  And I take a screenshot and save it in "create_draft_scenario_2_old/2"

  And I fill the old login form password with "<GHOST_PASSWORD_OLD>"
  And I wait for 2 seconds
  And I take a screenshot and save it in "create_draft_scenario_2_old/3"

  And I try to login in the old site
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_2_old/4"

  And I wait for the old dashboard to be visible

  When I navigate to page "<GHOST_DRAFT_URL_OLD>"
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_2_old/5"

  And I click in existing old draft
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_2_old/6"

  And I edit the old description with "<EDIT_DRAFT_DESCRIPTION>"
  And I wait for 10 seconds
  And I take a screenshot and save it in "create_draft_scenario_2_old/7"

  And I click old back to draft
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_2_old/8"

  And I click in existing old draft
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_draft_scenario_2_old/9"

  Then I expect to see the edited old text "<EDIT_DRAFT_DESCRIPTION>"
  And I wait for 3 seconds