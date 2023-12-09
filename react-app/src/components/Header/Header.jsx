import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const cartItems = useSelector(state => state.cart.items);

    return (
        <header className="main__header">
            <nav className="main__nav">
                <h1 className="main__title">NavBar</h1>
                <div className="main__tabs">
                <NavLink className='main__link' to='/'>All Products</NavLink>
                </div>
                {(cartItems.length <= 0) ?
                <NavLink className='main__cart' to='/cart'></NavLink> :
                <NavLink className='main__cart' to='/cart'>Cart({cartItems.length})</NavLink>}
            </nav>
        </header>
    )
}

export default Header