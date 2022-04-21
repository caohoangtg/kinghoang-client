import React from 'react'
import ProductLinear from './ProductLinear'
//import { Link } from 'react-router-dom'

const ProductList = () => {
    return (
        <div className="product-list">
            <div className="product-list__title-category">Coconut series</div>
            <ProductLinear />
            <ProductLinear />
            <ProductLinear />
            <ProductLinear />
        </div>
    )
}

export default ProductList
