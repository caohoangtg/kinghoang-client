import React from 'react'

const OrderQRCode = () => {
    return (
        <div className="order-qr">
            <div className="order-qr__message">
                YOUR ORDER IS READY FOR COLLECTION,
                <br />
                PLEASE PRESENT THIS SCREEN TO STAFF
            </div>
            <div className="order-qr__code">
                <img src="./images/QR_code.png" alt="QR_code.png" />
            </div>
            <div className="order-qr__order-no">
                Order No.: <span className="order-qr__no">4059</span>
            </div>
        </div>
    )
}

export default OrderQRCode
