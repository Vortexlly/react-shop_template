import React from 'react'
import dataBase from '../../data/dataBase'
import ProductItem from './ProductItem'
import AnimatedPage from '../Animated'

const ProductCard = () => {
    return (
        <AnimatedPage>
          {dataBase.map(item => (
            <ProductItem key={item.id} {...item} />
          ))}
        </AnimatedPage>
    )
}

export default ProductCard;