import React, { useState, useEffect } from "react";

const Clock = ({ location, offset }) => {

  const [time, setTime] = useState(getTimeWithOffset(offset));

  function getTimeWithOffset(offset) {
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
  // Хук useEffect замінює componentDidMount і componentWillUnmount
  useEffect(() => {
    // Оновлення часу кожну секунду
    const interval = setInterval(() => {
      setTime(getTimeWithOffset(offset));
    }, 1000);

    // Очищення інтервалу під час монтажу компонента
    return () => clearInterval(interval);
  }, [offset]); // Залежність від зміщення

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{time}</div>
    </div>
  )
};
export default Clock;


