Feature: Specify Number of Events

  Scenario: The App should display 32 events by default.
    Given the user has not specified number of events
    When the user is on the main page of the App
    Then 32 events will be displayed

  Scenario: User can change the number of events they want to see.
    Given user is on the main page of the App
    When when user sets number of events in the events textbox
    Then the number of events matching the users selected number will be displayed