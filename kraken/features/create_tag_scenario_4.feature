Feature: Crear tag

@user3 @web
Scenario: Crear un tag con descripción valida >500 caracteres

  Given I navigate to page "<GHOST_LOGIN_URL>"
  And I wait for 2 seconds
  When I fill the login with right email with "<GHOST_USERNAME>"
  And I wait for 2 seconds
  And I fill the login form password with "<GHOST_PASSWORD>"
  And I wait for 2 seconds
  And I try to login
  And I wait for 2 seconds
  And I wait for the dashboard to be visible
  And I wait for 2 seconds
  And I navigate to ghost page "<GHOST_TAGS_URL>"
  And I wait for 2 seconds
  And I start to create a new tag
  And I wait for 2 seconds
  And I fill the tag form title with "<VALID_TAG_TITLE>"
  And I wait for 2 seconds
  And I fill the tag description with "<LONG_DESCRIPTION>"
  And I wait for 2 seconds
  Then I expect to be fill with >500 characters with "<LONG_DESCRIPTION>"