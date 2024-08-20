import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      time: this.getTimeWithOffset(props.offset),
    }

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

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: this.getTimeWithOffset(this.props.offset)
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
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


// componentDidMount() {
//   this.interval = setInterval(() => {
//     this.setState({ date: new Date() })
//   }, 1000)
// }

// componentWillUnmount() {
//   clearInterval(this.interval)
// }
