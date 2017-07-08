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

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  leading0(num) {
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const secs = Math.floor((time/1000)%60);
    const mins = Math.floor((time/1000/60)%60);
    const hrs = Math.floor((time/(1000*60*60))%24);
    const days = Math.floor(time/(1000*60*60*24));
    this.setState({days, hrs, mins, secs});
  }
  render() {
    return(
      <div>
        <div className="clock-days">{this.leading0(this.state.days)} days</div>
        <div className="clock-hrs">{this.leading0(this.state.hrs)} hours</div>
        <div className="clock-mins">{this.leading0(this.state.mins)} minutes</div>
        <div className="clock-secs">{this.leading0(this.state.secs)} seconds</div>
      </div>
    )
  }
}

export default Clock;
