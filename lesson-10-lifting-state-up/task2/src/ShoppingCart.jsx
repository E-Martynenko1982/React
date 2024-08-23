import React, { useState } from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';
import './ShoppingCart.scss';

const ShoppingCart = ({ userData }) => {
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'iPhone 11', price: 999 },
    { id: '2', name: 'iPad Pro', price: 799 },
  ]);

  const count = cartItems.length;

  return (
    <div className="column">
      <CartTitle userName={userData.firstName} count={count} />
      <ProductsList cartItems={cartItems} />
    </div>
  );
};

export default ShoppingCart;