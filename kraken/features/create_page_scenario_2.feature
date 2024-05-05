Feature: Crear páginas

@user1 @web
Scenario: Crear una página con título y descripción válidos y programar su publicación.
  Given I navigate to page "<GHOST_LOGIN_URL>"
  And I wait for 5 seconds
  And I fill the login form email with "<GHOST_USERNAME>"
  And I wait for 1 seconds
  And I fill the login form password with "<GHOST_PASSWORD>"
  And I wait for 1 seconds
  And I try to login
  And I wait for 2 seconds
  And I wait for the dashboard to be visible
  When I navigate to page "<GHOST_PAGES_URL>"
  And I wait for 2 seconds
  And I start to create a new page
  And I wait for 2 seconds
  And I fill the page form title with "<VALID_PAGE_TITLE>"
  And I wait for 1 seconds
  And I fill the page form body with "<VALID_PAGE_BODY>"
  And I wait for 1 seconds
  And I click the Publish button
  And I wait for 3 seconds
  And I schedule the publication of the page
  And I wait for 2 seconds
  And I set the schedule date and time
  And I wait for 2 seconds
  And I click the Final Review button
  And I wait for 3 seconds
  And I click the Publish Page button
  And I wait for 7 seconds
  Then I expect to see "<SCHEDULE_PAGE_SUCCESS_MESSAGE>"