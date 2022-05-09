import React from 'react'
import { ImCart } from 'react-icons/im'

const CartEmpty = () => {
    return (
        <div>
            <ImCart size={'4em'} color="#F05223" />
            <div>Looks like you have no items in your cart!</div>
            <button>ORDER NOW!</button>
        </div>
    )
}

export default CartEmpty
