import React, { Component } from 'react';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017'
    }
  }

  changeDeadline() {
    this.setState({deadline: 'November'})
  }
  render() {
    return (
      <div className="app">
        <div className="app-title">
        Countdown to {this.state.deadline}</div>
        <div>
          <div className="clock-days">14 Days</div>
          <div className="clock-hrs">30 Hours</div>
          <div className="clock-mins">15 Minutes</div>
          <div className="clock-secs">20 Seconds</div>
        </div>
        <div>
          <input placeholder="new date" />
          <button onClick={() => this.changeDeadline()}>
          Submit
          </button>
        </div>
      </div>
    )
  }
}

export default App;
