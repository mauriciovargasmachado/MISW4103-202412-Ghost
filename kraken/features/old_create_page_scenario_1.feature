Feature: Crear páginas

@user1 @web
Scenario: Crear una página con título y cuerpos válidos y publicarla directamente.
  Given I navigate to page "<GHOST_LOGIN_URL_OLD>"
  And I wait for 5 seconds
  And I take a screenshot and save it in "create_page_scenario_1_old/1"
  And I fill the old login form email with "<GHOST_USERNAME_OLD>"
  And I wait for 2 seconds
  And I take a screenshot and save it in "create_page_scenario_1_old/2"
  And I fill the old login form password with "<GHOST_PASSWORD_OLD>"
  And I wait for 2 seconds
  And I take a screenshot and save it in "create_page_scenario_1_old/3"
  And I try to login in the old site
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_page_scenario_1_old/4"
  And I wait for the old dashboard to be visible
  When I navigate to page "<GHOST_PAGES_URL_OLD>"
  And I take a screenshot and save it in "create_page_scenario_1_old/5"
  And I wait for 3 seconds
  And I start to create a new page
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_page_scenario_1_old/6"
  And I fill the page form title with "<VALID_PAGE_TITLE>"
  And I take a screenshot and save it in "create_page_scenario_1_old/7"
  And I wait for 2 seconds
  And I fill the old page form body with "<VALID_PAGE_BODY>"
  And I take a screenshot and save it in "create_page_scenario_1_old/8"
  And I wait for 2 seconds
  And I click the old Publish button
  And I take a screenshot and save it in "create_page_scenario_1_old/9"
  And I wait for 4 seconds
  And I click the old Final Review button
  And I take a screenshot and save it in "create_page_scenario_1_old/10"
  And I wait for 4 seconds
  And I take a screenshot and save it in "create_page_scenario_1_old/11"
  And I wait for 3 seconds
  Then I expect in the old site to see "<PUBLISH_PAGE_SUCCESS_MESSAGE_OLD>"
  