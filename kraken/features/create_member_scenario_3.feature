Feature: Crear Miembro

@user5 @web
Scenario: Crear un miembro con el campo "Note" mayor a 500 caracteres.
  Given I navigate to page "<GHOST_LOGIN_URL>"
  And I wait for 5 seconds
  And I fill the login form email with "<GHOST_USERNAME>"
  And I wait for 1 seconds
  And I fill the login form password with "<GHOST_PASSWORD>"
  And I wait for 1 seconds
  And I try to login
  And I wait for 2 seconds
  And I wait for the dashboard to be visible
  When I navigate to page "<GHOST_MEMBERS_URL>"
  And I wait for 2 seconds
  And I wait for the members to be visible
  And I start to create a new member
  And I wait for 2 seconds
  And I fill the member name with random data
  And I wait for 2 seconds
  And I fill the member email with random data
  And I wait for 2 seconds
  And I fill the member note with a lot of data
  And I wait for 2 seconds
  And I click on the save member button
  And I wait for 3 seconds
  Then I expect the member note error message contains "<NOTE_MEMBER_ERROR_MESSAGE>"