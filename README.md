# meet


##  DESCRIPTION

**Meet** is a serverless, progressive web application (PWA) built with React using a
test-driven development (TDD) technique. The app uses the Google Calendar API for information
about meet up events for web developers in cities around the world.  Users can filter events by
location, expand details to see more information about events, and view events information displayed
by charts.

## Tech-stack

-   React
-   Jest
-   Enzyme
-   jest-cucumber
-   Puppeteer
-   Serverless
-   Googleapis
-   Axios
-   Atatus
-   nprogress
-   Recharts
-   gh-pages

## Requirements

- React application
- Built using TDD technique
- Use the Google Calendar API and OAuth2 authentication flow.
- Use use serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server
- Work offline or in slow network conditions with the help of a service worker.
- Use React axios and async/await.
- Implement an alert system using an OOP approach to show information to the user.
- Make use of data visualization using the recharts library.

## FEATURES

#### FEATURE 1: FILTER EVENTS BY CITY
**User Story:** As a user, I would like to be able to filter events by city so that I can see the list of events that
take place in that city.

+ Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
+ Scenario 2: User should see a list of suggestions when they search for a city.
+ Scenario 3: User can select a city from the suggested list.

#### FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
**User Story:** As a user I want to be able to click on an event so that the event will expand and I will be able to see more details about the event. 

+ Scenario 1: An event element is collapsed by default
+ Scenario 2: User can expand an event to see its details
+ Scenario 3: User can collapse an event to hide its details

#### FEATURE 3: SPECIFY NUMBER OF EVENTS
**User Story:** As a user i want to specifiy the number of events listed so that I can see more or 	less events.

+ Scenario 1: When user hasn’t specified a number, 32 is the default number
+ Scenario 2: User can change the number of events they want to see

#### FEATURE 4: USE THE APP WHEN OFFLINE
**User Story:** As a user i want to be able to use the app to get information even if there is no	internet connection.

+ Scenario 1: Show cached data when there’s no internet connection
+ Scenario 2: Show error when user changes the settings (city, time range)

#### FEATURE 5: DATA VISUALIZATION
**User Story:** As a user i want to be able to see a chart of upcoming events in each city by 	dates. So that i can have an organized way to find events quickly.

+ Scenario 1: Show a chart with the number of upcoming events in each city
