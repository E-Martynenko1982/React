import React from "react";
import './CartTitle.scss';
const CartTitle = ({ userName, count }) => {
  return (
    <div className="cart-title">{`${userName}, you added ${count} items`}</div>
  )
};
export default CartTitle;