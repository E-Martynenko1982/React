import React from "react";
import CartTitle from "./CartTitle";
import ProductsList from "./ProductsList";
import './ShoppingCart.scss';

class ShoppingCart extends React.Component {
  state = {
    cartItems: [
      {
        id: '1',
        name: 'iPhone 11',
        price: 999
      },
      {
        id: '2',
        name: 'iPad Pro',
        price: 799
      },
    ]
  };

  render() {
    const { userName } = this.props;
    const count = this.state.cartItems.length;
    return (
      <div className="column">

        <CartTitle userName={userName} count={count} />
        <ProductsList cartItems={this.state.cartItems} />
      </div>
    );
  }
}

export default ShoppingCart;
