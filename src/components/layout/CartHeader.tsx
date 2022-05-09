import React, { useState } from 'react'
import { VscClose } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { ClearAllItemsModal } from '../common'

const CartHeader = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleModal = (open: boolean) => {
        setIsOpen(open)
    }

    return (
        <div className="cart-header">
            <Link to="/">
                <VscClose size={36} color="#333333" />
            </Link>

            <div className="cart-header__title">
                <h5>YOUR CART</h5>
                <span className="cart-header__items-added">
                    You&apos;ve added 4 items
                </span>
            </div>
            <div className="cart-header__clear-all">
                <button type="button" onClick={() => toggleModal(true)}>
                    Clear All
                </button>
            </div>
            <ClearAllItemsModal isOpen={isOpen} toggleModal={toggleModal} />
        </div>
    )
}

export default CartHeader
