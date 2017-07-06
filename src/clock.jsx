import React, { Component } from 'react';
import './app.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hrs: 0,
      mins: 0,
      secs: 0
    }
  }
  render() {
    return(
      <div>
        <div className="clock-days">{this.state.days} days</div>
        <div className="clock-hrs">{this.state.hrs} hours</div>
        <div className="clock-mins">{this.state.mins} minutes</div>
        <div className="clock-secs">{this.state.secs} seconds</div>
      </div>
    )
  }
}

export default Clock;
