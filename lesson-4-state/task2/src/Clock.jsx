import React, { Component } from "react";
import './clock.scss';


class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      time: this.getTimeWithOffset(props.offset),
    }
    setInterval(() => {
      this.setState({
        time: this.getTimeWithOffset(props.offset)
      })
    }, 1000)
  }

  getTimeWithOffset(offset) {

    const now = new Date();
    const utcHours = now.getUTCHours();
    const hoursWithOffset = utcHours + offset;
    const offsetTime = new Date(now);
    offsetTime.setUTCHours(hoursWithOffset);
    const formattedTime = offsetTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });

    return formattedTime;
  }

  render() {
    return (

      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{this.state.time}</div>
      </div>


    )
  }
};
export default Clock;