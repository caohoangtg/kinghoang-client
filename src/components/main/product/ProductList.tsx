import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = () => {
    return (
        <div>
            <h1>ProductList</h1>

            {process.env.NODE_ENV}
            {process.env.PUBLIC_URL}
            {process.env.TARGET_ENV}
            <Link to="/product">View Product </Link>
        </div>
    )
}

export default ProductList
