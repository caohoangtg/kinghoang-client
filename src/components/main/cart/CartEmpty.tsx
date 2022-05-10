import React from 'react'
import { GiShoppingCart } from 'react-icons/gi'

const CartEmpty = () => {
    return (
        <div className="cart-empty">
            <GiShoppingCart
                className="cart-empty__icon color-theme"
                size={'8em'}
                color="#F05223"
            />
            <div className="cart-empty__message">
                Looks like you have no items in your cart!
            </div>
            <button className="btn-order-now">ORDER NOW!</button>
        </div>
    )
}

export default CartEmpty
