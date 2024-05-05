Feature: Hacer Log In

@user3 @web
Scenario: Iniciar sesión con el correo electrónico equivocado.

  Given I navigate to page "<GHOST_LOGIN_URL>"
  And I wait for 3 seconds
  When I fill the login with right email with "<GHOST_WRONG_USERNAME>"
  And I wait for 3 seconds
  And I fill the login form with the correct password with "<GHOST_PASSWORD>"
  And I wait for 3 seconds
  And I try to click login
  And I wait for 4 seconds
  Then I expect to see a message with "<INVALID_EMAIL_ADDRESS_MESSAGE>"
