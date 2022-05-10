import React from 'react'
import '../../styles/components/_cart.scss'
import {
    // CartEmpty,
    CartNote,
    CartPayment,
    CartProducts,
} from '../../components/main'
import { CartHeader, CartFooter } from '../../components/layout'

const Cart = () => {
    return (
        <React.Fragment>
            <div className="cart">
                <CartHeader />
                <div className="cart-body">
                    <CartProducts />
                    {/* <CartEmpty /> */}
                    <CartPayment />
                    <CartNote />
                </div>
                <CartFooter />
            </div>
        </React.Fragment>
    )
}

export default Cart
