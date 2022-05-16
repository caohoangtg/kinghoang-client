import React from 'react'
import { FaGift } from 'react-icons/fa'

const OrderInstantDiscount = () => {
    return (
        <div className="order-instant-discount">
            <div className="order-instant-discount__expires-within">
                EXPIRES WITHIN
            </div>
            <div className="order-instant-discount__countdown-timer">
                <div className="order-instant-discount__countdown-timer-mins">
                    <div className="order-instant-discount__mins">06</div>
                    {/* <div className="order-instant-discount__text">MINS</div> */}
                </div>
                <div className="order-instant-discount__colon">:</div>
                <div className="order-instant-discount__countdown-timer-secs">
                    <div className="order-instant-discount__secs">00</div>
                    {/* <div className="order-instant-discount__text">SECS</div> */}
                </div>
            </div>
            <button className="btn-get-off">
                <FaGift size={18} />
                Get 20% off your bill now
            </button>
        </div>
    )
}

export default OrderInstantDiscount
