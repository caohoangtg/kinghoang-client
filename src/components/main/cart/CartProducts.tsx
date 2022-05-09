import React from 'react'
import CartItem from './CartItem'

const CartProducts = () => {
    return (
        <>
            <div className="cart-product__msg-edit">
                * Click on Item or Edit to update selection
            </div>
            <div className="cart-product-items">
                <CartItem />
                <CartItem />
            </div>
            <div className="cart-product__add-more-items">+ ADD MORE ITEMS</div>
        </>
    )
}

export default CartProducts
