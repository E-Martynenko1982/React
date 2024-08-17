import React from "react";
import moment from "moment";
const Transaction = ({ from, to, amount, rate, time }) => {

  const formattedDate = moment(time).format("DD MMM HH:mm");
  const formattedAmount = new Intl.NumberFormat('en-GB').format(amount);
  return (
    <li className="transaction">
      <span className="transaction__date">{formattedDate}</span>
      <span className="transaction__assets">{from}&#8594;{to}</span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{formattedAmount}</span>
    </li>
  )

};
export default Transaction;