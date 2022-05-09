import React from 'react'

const CartPayment = () => {
    return (
        <div className="cart-payment-ps">
            <div className="cart-payment-ps__title">Payment summary</div>
            <div className="cart-payment-ps__item">
                <div className="cart-payment-ps__item-name">Sub total</div>
                <div className="cart-payment-ps__item-price">SGD 84.00</div>
            </div>
            <div className="cart-payment-ps__item">
                <div className="cart-payment-ps__item-name">
                    Convenience Fee (5%)
                </div>
                <div className="cart-payment-ps__item-price">SGD 4.20</div>
            </div>
            <div className="cart-payment-ps__item">
                <div className="cart-payment-ps__item-name">GST (7%)</div>
                <div className="cart-payment-ps__item-price">SGD 6.17</div>
            </div>
        </div>
    )
}

export default CartPayment
