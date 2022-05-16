import React from 'react'
import OrderProduct from './OrderProduct'

const OrderSummary = () => {
    return (
        <div className="order-summary">
            <div className="order-summary__title">ORDER SUMMARY</div>
            <div className="order-summary__items">
                <OrderProduct />
                <OrderProduct />
                <OrderProduct />
            </div>
        </div>
    )
}

export default OrderSummary
