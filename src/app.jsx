import React, { Component } from 'react';
import './app.css';
import Clock from './clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline});
  }
  render() {
    return (
      <div className="app">
        <div className="app-title">
        Countdown to {this.state.deadline}</div>
        <Clock
          deadline={this.state.deadline}
        />
        <div>
          <input onChange={event => this.setState({newDeadline: event.target.value})} placeholder="new date" />
          <button onClick={() => this.changeDeadline()}>
          Submit
          </button>
        </div>
      </div>
    )
  }
}

export default App;
