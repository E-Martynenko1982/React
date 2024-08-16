import React from "react";

const NumbersList = ({ numbers }) => {
  return (
    <ul>
      {numbers.map(number => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  )
};
export default NumbersList;