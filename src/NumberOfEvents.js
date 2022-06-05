import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    numberCheck: '',
  };

  handleInput = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: '',
        numberCheck: 'You must enter number between 1 and 32.',
      });
    } else {
      this.setState({
        numberOfEvents: value,
      });
    }
  };

  render() {
    return (
      <div className="numberOfEvents">
        <label className="eventLabel">Number of Events:</label>
        <input
          type="number"
          className="numberOfEvents__input"
          onChange={this.handleInput}
          value={this.state.numberOfEvents}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
