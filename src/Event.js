import React, { Component } from 'react';

class Event extends Component {
  state = {
    collapsed: true,
  };

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;
    return (
      <div className="event">
        <p className="summary">{event.summary}</p>
        <p className="description">{event.description}</p>
        <p className="location">{event.location}</p>
        <p className="dateTime">{event.start.dateTime}</p>
        <p className="timeZone">{event.start.timeZone}</p>
        <button
          variant="outline-info"
          className={`details-button ${collapsed ? 'show' : 'hide'}-details`}
          onClick={this.handleClick}
        >
          {collapsed ? 'Show Details' : 'Hide Details'}
        </button>
      </div>
    );
  }
}

export default Event;
