import React from 'react'
import IconButton from '@mui/material/IconButton'
import { FaTrashAlt } from 'react-icons/fa'
import { AiFillEdit } from 'react-icons/ai'
import { IoIosRemoveCircleOutline, IoIosAddCircle } from 'react-icons/io'

const CartItem = () => {
    return (
        <>
            <div className="cart-item__card">
                <div className="cart-item__media">
                    <img
                        className="cart-item__img"
                        src="./images/Cart-1.png"
                        alt="product"
                    />
                    <div className="cart-item__edit">Edit</div>
                </div>
                <div className="cart-item__content">
                    <div className="cart-item__title">
                        <div className="cart-item__name">
                            Homemade Prawn Roll 3 Prawn Roll 3 Prawn Roll 3
                            Prawn Roll 3 Roll 3 Prawn Roll 3
                        </div>
                        <FaTrashAlt
                            size={18}
                            color="#888888"
                            className="cart-item__icon-trash"
                        />
                    </div>
                    <div className="cart-item__modifier">
                        <div className="cart-item__modifier-item">
                            2 x Chicken
                        </div>
                        <div className="cart-item__modifier-item">
                            1 x Cod Fish
                        </div>
                        <div className="cart-item__less-spicy">
                            <AiFillEdit size={18} color="#888888" />
                            Less Spicy
                        </div>
                    </div>
                    <div className="cart-item__action">
                        <div className="cart-item__option">
                            <IconButton
                                className="color-icon cart-item__remove"
                                aria-label="remove from cart"
                            >
                                <IoIosRemoveCircleOutline size={40} />
                            </IconButton>
                            <span className="cart-item__quality">1</span>
                            <IconButton
                                className="color-icon cart-item__add"
                                aria-label="add to cart"
                            >
                                <IoIosAddCircle size={40} />
                            </IconButton>
                        </div>
                        <div className="cart-item__price">S$14.00</div>
                    </div>
                </div>
            </div>
            <div className="cart-item__card">
                <div className="cart-item__media">
                    <img
                        className="cart-item__img"
                        src="./images/Cart-1.png"
                        alt="product"
                    />
                    <div className="cart-item__edit">Edit</div>
                </div>
                <div className="cart-item__content">
                    <div className="cart-item__title">
                        <div className="cart-item__name">
                            Homemade Prawn Roll 3
                        </div>
                        <FaTrashAlt
                            size={18}
                            color="#888888"
                            className="cart-item__icon-trash"
                        />
                    </div>
                    <div className="cart-item__action">
                        <div className="cart-item__option">
                            <IconButton
                                className="color-icon cart-item__remove"
                                aria-label="remove from cart"
                            >
                                <IoIosRemoveCircleOutline size={40} />
                            </IconButton>
                            <span className="cart-item__quality">1</span>
                            <IconButton
                                className="color-icon cart-item__add"
                                aria-label="add to cart"
                            >
                                <IoIosAddCircle size={40} />
                            </IconButton>
                        </div>
                        <div className="cart-item__price">S$14.00</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem
