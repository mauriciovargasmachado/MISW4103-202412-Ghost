Feature: Hacer Log In

@user3 @web
Scenario: Iniciar sesión con contraseña equivocada.

  Given I navigate to page "<GHOST_LOGIN_URL>"
  And I wait for 2 seconds
  When I fill the login with right email with "<GHOST_USERNAME>"
  And I wait for 2 seconds
  And I fill the login form with the wrong password with "<GHOST_WRONG_PASSWORD>"
  And I wait for 2 seconds
  And I try to click login
  And I wait for 2 seconds
  Then I expect to see a message with "<INVALID_PASSWORD_MESSAGE>"