import React from 'react'
import { Link } from 'react-router-dom'

const CartFooter = () => {
    return (
        <div className="cart-footer">
            <div className="cart-footer-total">
                <div className="cart-footer-total__title">Total</div>
                <div className="cart-footer-total__price">SGD 94.37</div>
            </div>
            <div className="cart-footer__checkout">
                <Link to="/order">CHECKOUT</Link>
            </div>
        </div>
    )
}

export default CartFooter
