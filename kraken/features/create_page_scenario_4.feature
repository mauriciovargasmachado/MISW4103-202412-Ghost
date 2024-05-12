Feature: Crear páginas

@user1 @web
Scenario: Crear una página con cuerpo pero sin título y publicarla directamente.
  Given I navigate to page "<GHOST_LOGIN_URL>"
  And I wait for 5 seconds
  And I take a screenshot and save it in "create_page_scenario_4/1"
  And I fill the login form email with "<GHOST_USERNAME>"
  And I wait for 2 seconds
  And I take a screenshot and save it in "create_page_scenario_4/2"
  And I fill the login form password with "<GHOST_PASSWORD>"
  And I wait for 2 seconds
  And I take a screenshot and save it in "create_page_scenario_4/3"
  And I try to login
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_page_scenario_4/4"
  And I wait for the dashboard to be visible
  When I navigate to page "<GHOST_PAGES_URL>"
  And I take a screenshot and save it in "create_page_scenario_4/5"
  And I wait for 3 seconds
  And I start to create a new page
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_page_scenario_4/6"
  And I fill the page form title with "<EMPTY_PAGE_TITLE>"
  And I take a screenshot and save it in "create_page_scenario_4/7"
  And I wait for 2 seconds
  And I fill the page form body with "<VALID_PAGE_BODY>"
  And I take a screenshot and save it in "create_page_scenario_4/8"
  And I wait for 2 seconds
  And I click the Publish button
  And I take a screenshot and save it in "create_page_scenario_4/9"
  And I wait for 4 seconds
  And I click the Final Review button
  And I take a screenshot and save it in "create_page_scenario_4/10"
  And I wait for 4 seconds
  And I click the Publish Page button
  And I take a screenshot and save it in "create_page_scenario_4/11"
  And I wait for 7 seconds
  Then I expect to see "<PUBLISH_PAGE_SUCCESS_MESSAGE>"