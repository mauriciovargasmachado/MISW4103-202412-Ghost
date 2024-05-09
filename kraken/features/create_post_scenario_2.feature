Feature: Crear post

@user2 @web
Scenario: Publicar un post solo con titulo y una descripcion
  Given I navigate to page "<GHOST_LOGIN_URL>"
  And I wait for 5 seconds
  And I take a screenshot and save it in "create_post_scenario_2/1"
  And I fill the login form email with "<GHOST_USERNAME>"
   And I take a screenshot and save it in "create_post_scenario_2/2"
  And I wait for 2 seconds
  And I fill the login form password with "<GHOST_PASSWORD>"
  And I take a screenshot and save it in "create_post_scenario_2/3"
  And I wait for 2 seconds
  And I try to login
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_post_scenario_2/4"
  And I wait for the dashboard to be visible
  When I navigate to page "<GHOST_POSTS_URL>"
  And I take a screenshot and save it in "create_post_scenario_2/5"
  And I wait for 3 seconds
  And I start to create a new post
  And I wait for 3 seconds
   And I take a screenshot and save it in "create_post_scenario_2/6"
  And I fill the post form title with "<VALID_POST_TITLE>"
  And I take a screenshot and save it in "create_post_scenario_2/7"
  And I wait for 2 seconds
  And I fill the page form body with "<VALID_POST_BODY>"
  And I take a screenshot and save it in "create_post_scenario_2/8"
  And I wait for 2 seconds
  And I click the Publish button
  And I take a screenshot and save it in "create_post_scenario_2/9"
  And I wait for 4 seconds
  And I click the Final Review button
  And I take a screenshot and save it in "create_post_scenario_2/10"
  And I wait for 4 seconds
  And I click the Publish Post button
  And I take a screenshot and save it in "create_post_scenario_2/11"
  And I wait for 7 seconds
  Then I expect to see "<PUBLISH_PAGE_SUCCESS_MESSAGE>"