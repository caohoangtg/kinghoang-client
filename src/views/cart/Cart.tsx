import React from 'react'
import { VscClose } from 'react-icons/vsc'
import '../../styles/components/_cart.scss'
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import { FaTrashAlt } from 'react-icons/fa'
import { AiFillEdit } from 'react-icons/ai'
import { IoIosRemoveCircleOutline, IoIosAddCircle } from 'react-icons/io'
import { AdditionalRequest } from '../../components/main'

const Cart = () => {
    return (
        <React.Fragment>
            <div className="cart">
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
                    <div className="cart-header__clear-all">Clear All</div>
                </div>
                <div className="cart-body">
                    <div className="cart-body__msg-edit">
                        * Click on Item or Edit to update selection
                    </div>
                    <div className="cart-body-item">
                        <div className="cart-body-item__card">
                            <div className="cart-body-item__media">
                                <img
                                    className="cart-body-item__img"
                                    src="./images/Cart-1.png"
                                    alt="product"
                                />
                                <div className="cart-body-item__edit">Edit</div>
                            </div>
                            <div className="cart-body-item__content">
                                <div className="cart-body-item__title">
                                    <div className="cart-body-item__name">
                                        Homemade Prawn Roll 3 Prawn Roll 3 Prawn
                                        Roll 3 Prawn Roll 3 Roll 3 Prawn Roll 3
                                    </div>
                                    <FaTrashAlt
                                        size={18}
                                        color="#888888"
                                        className="cart-body-item__icon-trash"
                                    />
                                </div>
                                <div className="cart-body-item__modifier">
                                    <div className="cart-body-item__modifier-item">
                                        2 x Chicken
                                    </div>
                                    <div className="cart-body-item__modifier-item">
                                        1 x Cod Fish
                                    </div>
                                    <div className="cart-body-item__less-spicy">
                                        <AiFillEdit size={18} color="#888888" />
                                        Less Spicy
                                    </div>
                                </div>
                                <div className="cart-body-item__action">
                                    <div className="cart-body-item__option">
                                        <IconButton
                                            className="color-icon cart-body-item__remove"
                                            aria-label="remove from cart"
                                        >
                                            <IoIosRemoveCircleOutline
                                                size={40}
                                            />
                                        </IconButton>
                                        <span className="cart-body-item__quality">
                                            1
                                        </span>
                                        <IconButton
                                            className="color-icon cart-body-item__add"
                                            aria-label="add to cart"
                                        >
                                            <IoIosAddCircle size={40} />
                                        </IconButton>
                                    </div>
                                    <div className="cart-body-item__price">
                                        S$14.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cart-body-item__card">
                            <div className="cart-body-item__media">
                                <img
                                    className="cart-body-item__img"
                                    src="./images/Cart-1.png"
                                    alt="product"
                                />
                                <div className="cart-body-item__edit">Edit</div>
                            </div>
                            <div className="cart-body-item__content">
                                <div className="cart-body-item__title">
                                    <div className="cart-body-item__name">
                                        Homemade Prawn Roll 3
                                    </div>
                                    <FaTrashAlt
                                        size={18}
                                        color="#888888"
                                        className="cart-body-item__icon-trash"
                                    />
                                </div>
                                <div className="cart-body-item__action">
                                    <div className="cart-body-item__option">
                                        <IconButton
                                            className="color-icon cart-body-item__remove"
                                            aria-label="remove from cart"
                                        >
                                            <IoIosRemoveCircleOutline
                                                size={40}
                                            />
                                        </IconButton>
                                        <span className="cart-body-item__quality">
                                            1
                                        </span>
                                        <IconButton
                                            className="color-icon cart-body-item__add"
                                            aria-label="add to cart"
                                        >
                                            <IoIosAddCircle size={40} />
                                        </IconButton>
                                    </div>
                                    <div className="cart-body-item__price">
                                        S$14.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cart-body-item__card">
                            <div className="cart-body-item__media">
                                <img
                                    className="cart-body-item__img"
                                    src="./images/Cart-1.png"
                                    alt="product"
                                />
                                <div className="cart-body-item__edit">Edit</div>
                            </div>
                            <div className="cart-body-item__content">
                                <div className="cart-body-item__title">
                                    <div className="cart-body-item__name">
                                        Homemade Prawn Roll 3
                                    </div>
                                    <FaTrashAlt
                                        size={18}
                                        color="#888888"
                                        className="cart-body-item__icon-trash"
                                    />
                                </div>
                                <div className="cart-body-item__action">
                                    <div className="cart-body-item__option">
                                        <IconButton
                                            className="color-icon cart-body-item__remove"
                                            aria-label="remove from cart"
                                        >
                                            <IoIosRemoveCircleOutline
                                                size={40}
                                            />
                                        </IconButton>
                                        <span className="cart-body-item__quality">
                                            1
                                        </span>
                                        <IconButton
                                            className="color-icon cart-body-item__add"
                                            aria-label="add to cart"
                                        >
                                            <IoIosAddCircle size={40} />
                                        </IconButton>
                                    </div>
                                    <div className="cart-body-item__price">
                                        S$14.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cart-body-item__card">
                            <div className="cart-body-item__media">
                                <img
                                    className="cart-body-item__img"
                                    src="./images/Cart-1.png"
                                    alt="product"
                                />
                                <div className="cart-body-item__edit">Edit</div>
                            </div>
                            <div className="cart-body-item__content">
                                <div className="cart-body-item__title">
                                    <div className="cart-body-item__name">
                                        Homemade Prawn Roll 3
                                    </div>
                                    <FaTrashAlt
                                        size={18}
                                        color="#888888"
                                        className="cart-body-item__icon-trash"
                                    />
                                </div>
                                <div className="cart-body-item__modifier">
                                    <div className="cart-body-item__modifier-item">
                                        2 x Chicken
                                    </div>
                                    <div className="cart-body-item__modifier-item">
                                        1 x Cod Fish
                                    </div>
                                    <div className="cart-body-item__less-spicy">
                                        <AiFillEdit size={18} color="#888888" />
                                        Less Spicy
                                    </div>
                                </div>
                                <div className="cart-body-item__action">
                                    <div className="cart-body-item__option">
                                        <IconButton
                                            className="color-icon cart-body-item__remove"
                                            aria-label="remove from cart"
                                        >
                                            <IoIosRemoveCircleOutline
                                                size={40}
                                            />
                                        </IconButton>
                                        <span className="cart-body-item__quality">
                                            1
                                        </span>
                                        <IconButton
                                            className="color-icon cart-body-item__add"
                                            aria-label="add to cart"
                                        >
                                            <IoIosAddCircle size={40} />
                                        </IconButton>
                                    </div>
                                    <div className="cart-body-item__price">
                                        S$14.00
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-body__add-more-items">
                        + ADD MORE ITEMS
                    </div>
                    <div className="cart-body-ps">
                        <div className="cart-body-ps__title">
                            Payment summary
                        </div>
                        <div className="cart-body-ps__item">
                            <div className="cart-body-ps__item-name">
                                Sub total
                            </div>
                            <div className="cart-body-ps__item-price">
                                SGD 84.00
                            </div>
                        </div>
                        <div className="cart-body-ps__item">
                            <div className="cart-body-ps__item-name">
                                Convenience Fee (5%)
                            </div>
                            <div className="cart-body-ps__item-price">
                                SGD 4.20
                            </div>
                        </div>
                        <div className="cart-body-ps__item">
                            <div className="cart-body-ps__item-name">
                                GST (7%)
                            </div>
                            <div className="cart-body-ps__item-price">
                                SGD 6.17
                            </div>
                        </div>
                    </div>
                    <div className="cart-body-note">
                        {/* <div className="cart-body-note__title">
                            Note to store
                        </div> */}
                        <div className="cart-body-note__additional-request">
                            <AdditionalRequest />
                        </div>
                    </div>
                </div>
                <div className="cart-footer">
                    <div className="cart-footer-total">
                        <div className="cart-footer-total__title">Total</div>
                        <div className="cart-footer-total__price">
                            SGD 94.37
                        </div>
                    </div>
                    <div className="cart-footer__checkout">CHECKOUT</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Cart
