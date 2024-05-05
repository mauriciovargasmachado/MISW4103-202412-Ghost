Feature: Crear post

@user2 @web
Scenario: Publicar un post solo con titulo
  Given I navigate to page "<GHOST_LOGIN_URL>"
  And I wait for 5 seconds
  And I fill the login form email with "<GHOST_USERNAME>"
  And I wait for 2 seconds
  And I fill the login form password with "<GHOST_PASSWORD>"
  And I wait for 2 seconds
  And I try to login
  And I wait for 3 seconds
  And I wait for the dashboard to be visible
  When I navigate to page "<GHOST_POSTS_URL>"
  And I wait for 3 seconds
  And I start to create a new post
  And I wait for 3 seconds
  And I fill the post form title with "<VALID_POST_TITLE>"
  And I wait for 2 seconds
  And I click the Publish button
  And I wait for 4 seconds
  And I click the Final Review button
  And I wait for 4 seconds
  And I click the Publish Post button
  And I wait for 7 seconds
  Then I expect to see "<PUBLISH_PAGE_SUCCESS_MESSAGE>"
  