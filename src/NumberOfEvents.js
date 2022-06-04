import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    numberCheck: '',
  };

  handleSubmit = (event) => {
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
        <form>
          <label className="eventLabel">Number of Events:</label>
          <input
            type="number"
            className="inputNumberOfEvents"
            value={this.state.numberOfEvents}
          />
          <input
            type="submit"
            className="submit"
            value="Submit"
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

export default NumberOfEvents;
