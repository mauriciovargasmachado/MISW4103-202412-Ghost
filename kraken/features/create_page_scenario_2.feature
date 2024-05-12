Feature: Crear páginas

@user1 @web
Scenario: Crear una página con título y descripción válidos y programar su publicación.
  Given I navigate to page "<GHOST_LOGIN_URL>"
  And I wait for 5 seconds
  And I take a screenshot and save it in "create_page_scenario_2/1"
  And I fill the login form email with "<GHOST_USERNAME>"
  And I wait for 2 seconds
  And I take a screenshot and save it in "create_page_scenario_2/2"
  And I fill the login form password with "<GHOST_PASSWORD>"
  And I wait for 2 seconds
  And I take a screenshot and save it in "create_page_scenario_2/3"
  And I try to login
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_page_scenario_2/4"
  And I wait for the dashboard to be visible
  When I navigate to page "<GHOST_PAGES_URL>"
  And I take a screenshot and save it in "create_page_scenario_2/5"
  And I wait for 3 seconds
  And I start to create a new page
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_page_scenario_2/6"
  And I fill the page form title with "<VALID_PAGE_TITLE>"
  And I take a screenshot and save it in "create_page_scenario_2/7"
  And I wait for 2 seconds
  And I fill the page form body with "<VALID_PAGE_BODY>"
  And I take a screenshot and save it in "create_page_scenario_2/8"
  And I wait for 2 seconds
  And I click the Publish button
  And I take a screenshot and save it in "create_page_scenario_2/9"
  And I wait for 4 seconds
  And I schedule the publication of the page
  And I take a screenshot and save it in "create_page_scenario_2/10"
  And I wait for 3 seconds
  And I set the schedule date and time
  And I take a screenshot and save it in "create_page_scenario_2/11"
  And I wait for 3 seconds
  And I click the Final Review button
  And I take a screenshot and save it in "create_page_scenario_2/12"
  And I wait for 4 seconds
  And I click the Publish Page button
  And I take a screenshot and save it in "create_page_scenario_2/13"
  And I wait for 7 seconds
  Then I expect to see "<SCHEDULE_PAGE_SUCCESS_MESSAGE>"