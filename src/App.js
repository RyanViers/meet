import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { OfflineAlert } from './Alert';
import { extractLocations, getEvents } from './api';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    locationSelected: 'all',
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      let eventsNumber = this.state.numberOfEvents;
      this.setState({
        events: events.slice(0, eventsNumber),
        locations: extractLocations(events),
      });
    });

    if (navigator.onLine) {
      this.setState({
        OfflineAlertText: '',
      });
    } else {
      this.setState({
        OfflineAlertText: 'You are offline.',
      });
    }
  }

  componentDidUpdate() {
    if (navigator.onLine) {
      this.setState({
        OfflineAlertText: '',
      });
    } else {
      this.setState({
        OfflineAlertText: 'You are offline.',
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

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
    const { OfflineAlertText } = this.state;

    return (
      <div className="App">
        <OfflineAlert text={OfflineAlertText} />
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
