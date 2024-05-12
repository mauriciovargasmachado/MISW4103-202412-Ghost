Feature: Crear tag

@user3 @web
Scenario: Crear un tag con descripción válida >500 caracteres
  
  Given I navigate to page "<GHOST_LOGIN_URL>"
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_tag_scenario_4/1"
  And I fill the login with right email with "<GHOST_USERNAME>"
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_tag_scenario_4/2"
  And I fill the login form password with "<GHOST_PASSWORD>"
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_tag_scenario_4/3"
  And I try to login
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_tag_scenario_4/4"
  And I wait for the dashboard to be visible
  And I wait for 4 seconds
  When I navigate to page "<GHOST_TAGS_URL>"
  And I take a screenshot and save it in "create_tag_scenario_4/5"
  And I wait for 4 seconds
  And I start to create a new tag
  And I take a screenshot and save it in "create_tag_scenario_4/6"
  And I wait for 4 seconds
  And I fill the tag form title with "<VALID_TAG_TITLE>"
  And I take a screenshot and save it in "create_tag_scenario_4/7"
  And I wait for 4 seconds
  And I fill the tag description with "<LONG_DESCRIPTION>"
  And I take a screenshot and save it in "create_tag_scenario_4/8"
  And I wait for 4 seconds
  And I click the Publish tag button
  And I take a screenshot and save it in "create_tag_scenario_4/9"
  And I wait for 4 seconds
  Then I expect to an length error to show