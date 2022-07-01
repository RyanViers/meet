import React, { Component } from 'react';
import './App.css';
import meet_header_logo from './images/meet_header_logo.png';
import logo_meet_Auth from './images/logo_meet_Auth.png';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import EventGenre from './EventGenre';
import { OfflineAlert } from './Alert';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    locationSelected: 'all',
    showWelcomeScreen: undefined,
  };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');

    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(events),
          });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(', ').shift();
      return { city, number };
    });
    return data;
  };

  updateEvents = (location, eventCount) => {
    if (eventCount === undefined) {
      eventCount = this.state.numberOfEvents;
    } else {
      this.setState({ numberOfEvents: eventCount });
    }
    if (location === undefined) {
      location = this.state.locationSelected;
    }
    getEvents().then((events) => {
      const locationEvents =
        location === 'all'
          ? events
          : events.filter((event) => event.location === location);

      this.setState({
        events: locationEvents.slice(0, eventCount),
        numberOfEvents: eventCount,
        locationSelected: location,
      });
    });
  };

  render() {
    if (this.state.showWelcomeScreen === undefined) {
      return <div className="App" />;
    }

    return (
      <div className="App">
        <div className="header">
          <img
            src={logo_meet_Auth}
            className="meet-logo responsive"
            alt="meet-logo"
          ></img>
        </div>
        <div className="welcome-message">
          <p>Meet App</p>
          <p>
            The Meet App is a simple app that allows you to find coding events
            in major cities around the world. It allows your to search by city
            and select number of events you would like to see. It also includes
            charts to provide you with visual data on the app.
            <br></br>
            <br></br>
            No personal data is collected or saved at any stage and the calendar
            accessed is not a personal calendar, but one created specifically
            for the project.
            <br></br>
            <br></br>
            The Meet App uses sensitive scopes from Google Calendar API to allow
            access to a calendar specifically for the project. This app adheres
            to the Google API Services User Data Policy, including the Limited
            Use requirements.
          </p>
          <p>Web Development!</p>
          <p>Find web development events near you.</p>
        </div>
        <div className="offline-warning">
          {!navigator.onLine ? (
            <OfflineAlert
              text={'You are offline, event data might not be up to date.'}
            />
          ) : (
            ''
          )}
        </div>
        <div className="input-boxes">
          <CitySearch
            locations={this.state.locations}
            updateEvents={this.updateEvents}
          />
          <NumberOfEvents updateEvents={this.updateEvents} />
        </div>
        <div className="data-vis-container">
          <h2 className="data-vis-title">Events In Each City</h2>
          <div className="data-vis-wrapper">
            <EventGenre events={this.state.events} />
            <ResponsiveContainer height={400}>
              <ScatterChart
                margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="category" dataKey="city" name="City" />
                <YAxis
                  type="number"
                  dataKey="number"
                  name="Number of Events"
                  allowDecimals={false}
                />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter data={this.getData()} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>

        <EventList events={this.state.events} />
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}

export default App;
