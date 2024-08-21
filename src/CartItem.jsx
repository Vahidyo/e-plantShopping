import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let totalCost = 0;
    cart.forEach((item) => {
      let numericString = item.cost.replace(/[^0-9]/g, '');
      let priceInteger = parseInt(numericString, 10);
      totalCost += priceInteger * item.quantity;
    });
    return totalCost;
  };

  const handleContinueShopping = (e) => {
  };

  const handleIncrement = (item) => {
    cart.map(cartItem => {
      if (cartItem.name === item.name) {
        const load = {name:item.name, quantity:cartItem.quantity + 1};
        dispatch(updateQuantity(load));
      }
    });
  };  

  const handleDecrement = (item) => {
    cart.map(cartItem => {
      if (cartItem.name === item.name) {
        if (cartItem.quantity > 1) {
          const load = {name:item.name, quantity:cartItem.quantity - 1};
          console.log("item bigger than 0")
          dispatch(updateQuantity(load));
        } else {
          dispatch(removeItem(item.name));
        }
      }});
  };

  const handleRemove = (item) => {
    cart.map(cartItem => {
      if (cartItem.name=== item.name) {
        dispatch(removeItem(item.name));
      }
    });
  };
  
  const calculateTotalCost = (item) => {
    let numericString = item.cost.replace(/[^0-9]/g, '');
    let priceInteger = parseInt(numericString, 10);
    return(item.quantity * priceInteger);
  }

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


