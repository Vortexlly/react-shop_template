import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../slice';
import './ProductItem.css';

const ProductItem = ({id, title, price, img, quantity}) => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const [already, setAlready] = useState(false);

  const handleAddToCart = () => { 
    if (cartItems.map(item => item.id).includes(id)) {
      setAlready(true);
      setTimeout(() => setAlready(false), 4000);
    } else {
      dispatch(addItem({id, title, price, img, quantity}));
    }
  };

  return (
    <div id={id} className="product__container">
        <div className="product__item">
            <img src={img} alt={title} className="product__img" />
            <div className="product__descr">
                <h3 className="product__name">{title}</h3>
                <p className="product__price">{price}</p>
                <button className='product__btn' onClick={handleAddToCart}>Add To Cart</button>
            </div>
            {(already) ?
            <div style={{width: '100%', padding: '12px 8px', color: 'red', borderTop: '1px solid grey'}}>
              This product already in the cart
            </div> :
            null}
        </div>
    </div>
  )
}

export default ProductItem