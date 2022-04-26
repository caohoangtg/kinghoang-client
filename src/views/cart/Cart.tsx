import React from 'react'
import { VscClose } from 'react-icons/vsc'
import '../../styles/components/_cart.scss'
import { Link } from 'react-router-dom'

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
                            <div className="cart-body-item__image">Image</div>
                            <div className="cart-body-item__content">
                                <div className="cart-body-item__name">
                                    <div>Homemade Prawn Roll 3</div>
                                    <div>Remove</div>
                                </div>
                                <div className="cart-body-item__modifier">
                                    <div className="cart-body-item__modifier-item">
                                        2 x Chicken
                                    </div>
                                    <div className="cart-body-item__modifier-item">
                                        1 x Cod Fish
                                    </div>
                                    <div className="cart-body-item__less-spicy">
                                        Less Spicy
                                    </div>
                                </div>
                                <div className="cart-body-item__action">
                                    <div className="cart-body-item__option">
                                        <div className="cart-body-item__remove">
                                            -
                                        </div>
                                        <div className="cart-body-item__quality">
                                            1
                                        </div>
                                        <div className="cart-body-item__add">
                                            +
                                        </div>
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
                        <div className="cart-body-note__title">
                            Note to store
                        </div>
                        <div className="cart-body-note__additional-request">
                            Additional request
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
