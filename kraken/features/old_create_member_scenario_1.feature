Feature: Crear Miembro

@user5 @web
Scenario: Crear un miembro con todos los campos diligenciados correctamente.
  Given I navigate to page "<GHOST_LOGIN_URL_OLD>"
  And I wait for 5 seconds
  And I take a screenshot and save it in "create_member_scenario_1_old/1"
  And I fill the old login form email with "<GHOST_USERNAME_OLD>"
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_member_scenario_1_old/2"
  And I fill the old login form password with "<GHOST_PASSWORD_OLD>"
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_member_scenario_1_old/3"
  And I try to login in the old site
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_member_scenario_1_old/4"
  And I wait for the old dashboard to be visible
  When I navigate to page "<GHOST_MEMBERS_URL_OLD>"
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_member_scenario_1_old/5"
  And I wait for the members to be visible
  And I start to create a new member
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_member_scenario_1_old/6"
  And I fill the member name with random data
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_member_scenario_1_old/7"
  And I fill the member email with random data
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_member_scenario_1_old/8"
  And I fill the member note with random data
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_member_scenario_1_old/9"
  And I click on the old save member button
  And I wait for 2 seconds
  And I take a screenshot and save it in "create_member_scenario_1_old/10"
  Then I expect the old member creation message contains "<MEMBER_SUCCESS_MESSAGE>"
  And I wait for 7 seconds
  And I navigate to page "<GHOST_MEMBERS_URL_OLD>"
  And I wait for 7 seconds
  And I take a screenshot and save it in "create_member_scenario_1_old/11"
  And I expect the new member in the old members list