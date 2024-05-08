Feature: Crear páginas

@user1 @web
Scenario: Crear una página con título pero sin cuerpo y publicarla directamente.
  Given I navigate to page "<GHOST_LOGIN_URL>"
  And I wait for 5 seconds
  And I take a screenshot and save it in "create_page_scenario_3/1"
  And I fill the login form email with "<GHOST_USERNAME>"
  And I wait for 2 seconds
  And I take a screenshot and save it in "create_page_scenario_3/2"
  And I fill the login form password with "<GHOST_PASSWORD>"
  And I wait for 2 seconds
  And I take a screenshot and save it in "create_page_scenario_3/3"
  And I try to login
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_page_scenario_3/4"
  And I wait for the dashboard to be visible
  When I navigate to page "<GHOST_PAGES_URL>"
  And I take a screenshot and save it in "create_page_scenario_3/5"
  And I wait for 3 seconds
  And I start to create a new page
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_page_scenario_3/6"
  And I fill the page form title with "<VALID_PAGE_TITLE>"
  And I take a screenshot and save it in "create_page_scenario_3/7"
  And I wait for 2 seconds
  And I fill the page form body with "<EMPTY_PAGE_BODY>"
  And I take a screenshot and save it in "create_page_scenario_3/8"
  And I wait for 2 seconds
  And I click the Publish button
  And I take a screenshot and save it in "create_page_scenario_3/9"
  And I wait for 4 seconds
  And I click the Final Review button
  And I take a screenshot and save it in "create_page_scenario_3/10"
  And I wait for 4 seconds
  And I click the Publish Page button
  And I take a screenshot and save it in "create_page_scenario_3/11"
  And I wait for 7 seconds
  Then I expect to see "<PUBLISH_PAGE_SUCCESS_MESSAGE>"