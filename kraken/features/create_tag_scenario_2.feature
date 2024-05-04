Feature: Crear tag

@user1 @web
Scenario: Publicar un tag con titulo y un color
  Given I navigate to page "<GHOST_LOGIN_URL>"
  And I wait for 5 seconds
  And I fill the login form email with "<GHOST_USERNAME>"
  And I wait for 1 seconds
  And I fill the login form password with "<GHOST_PASSWORD>"
  And I wait for 1 seconds
  And I try to login
  And I wait for 2 seconds
  And I wait for the dashboard to be visible
  When I navigate to page "<GHOST_TAGS_URL>"
  And I wait for 2 seconds
  And I start to create a new tag
  And I wait for 2 seconds
  And I fill the tag form title with "<VALID_TAG_TITLE>"
  And I wait for 1 seconds
  And I fill the tag color with "<VALID_TAG_COLOR>"
  And I wait for 1 seconds
  And I click the Publish tag button
  And I wait for 3 seconds
  Then I navigate to page "<GHOST_TAGS_URL>"