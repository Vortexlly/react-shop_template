import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import './Cart.css';
import AnimatedPage from '../Animated';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    const quantityFunc = (data) => {
        let quantity = 0;
        data.forEach(item => quantity += item.quantity);
        return quantity;
    }

    const amountFunc = (data) => {
        let amount = 0;
        data.forEach(item => amount += (item.price * item.quantity));
        return amount;
    }

    useEffect(() => {
        setTotalQuantity(quantityFunc(cartItems));
        setTotalAmount(amountFunc(cartItems))
    }, [cartItems])

    return (
        <AnimatedPage>
            <section className="cart">
                <div className="cart__products">
                    <h3 className="cart__title">Cart - {cartItems.length} items</h3>
                    <div className="cart__items">
                        {cartItems.map(item => (
                            <CartItem key={item.id} {...item}/>
                        ))}
                    </div>
                </div>
                <div className="cart__summary">
                    <h3 className="cart__summary-title">Summary</h3>
                    <div className="cart__summary-wrapper">
                        <div>
                            <p className="cart__summary-quantity">Total Quantity</p>
                            <p className="cart__summary-quantity">{totalQuantity}</p>
                        </div>
                        <div>
                            <p className="cart__summary-amount">Total amount</p>
                            <p className="cart__summary-amount">{totalAmount}</p>
                        </div>
                        <button className="cart__summary-btn" onClick={() => alert('Thanks for buying!!!')}>Go to checkout</button>
                    </div>
                </div>
            </section>
        </AnimatedPage>
    )
}

export default Cart