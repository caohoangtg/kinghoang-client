import React from 'react'
import { AdditionalRequest } from '../product'

const CartNote = () => {
    return (
        <div className="cart-note">
            {/* <div className="cart-body-note__title">
                            Note to store
                        </div> */}
            <div className="cart-note__additional-request">
                <AdditionalRequest />
            </div>
        </div>
    )
}

export default CartNote
