Feature: log in

  @login
  Scenario: As a User, I should be able to log-in with valid credentials.
    Given user is on login page
    When user enters valid username and password
    And user clicks on log-in button.
    Then user should be logged in and able to see welcome message.

    @nologin
  Scenario Outline: Invalid credentials.
    Given user is on log-in page
    When user enters username as "<username>" and "<password>"
    And user clicks on log-in button.
    Then user should not be logged in with "<error message>"

    Examples:
      | username | password | error message             |
      | Test     | Test123  | Invalid credentials       |
      | Test     | admin123 | Invalid credentials       |
      | Admin    | Test123  | Invalid credentials       |
      |          | admin123 | Username cannot be empty  |
      |          | Test123  | Username cannot be empty  |
      | Admin    |          | Password cannot be empty  |
      | Test     |          | Password cannot be empty  |