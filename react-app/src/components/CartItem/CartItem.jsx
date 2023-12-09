import React from 'react';
import dataBase from '../../data/dataBase'
import './CartItem.css';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, deleteItem, incrementQuantity } from '../../slice';

const CartItem = ({id, title, price, img}) => {
  const cartItems = useSelector(state => state.cart.items);
  const quantity = cartItems.find(item => item.id === id).quantity;
  const dispatch = useDispatch();
  const data = dataBase.find(item => item.id === id);

  const handleDeleteFromCart = () => {
    dispatch(deleteItem(data.id));
  }

  const handleIncrementQuantity = () => {
    dispatch(incrementQuantity(data.id))
  }

  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      dispatch(decrementQuantity(data.id));
    } 
  }

  return (
    <div className="cart-item">
        <img src={img} alt={title} className="cart-item__img" />
        <div className="cart-item__middle">
            <h3 className="cart-item__name">{title}</h3>
            <button className="cart-item__delete" onClick={handleDeleteFromCart}><FaTrash/></button>
        </div>
        <div className="cart-item__end">
            <div className='cart-item__control'>
                <button className="cart-item__decrement" onClick={handleDecrementQuantity}><FaMinus/></button>
                <p className="cart-item__quantity">{quantity}</p>
                <button className="cart-item__increment" onClick={handleIncrementQuantity}><FaPlus/></button>
            </div>
            <p className="cart-item__price">{price}</p>
        </div>
    </div>
  )
}

export default CartItem