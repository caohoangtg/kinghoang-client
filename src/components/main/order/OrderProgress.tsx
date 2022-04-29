import React from 'react'

const OrderProgress = () => {
    return (
        <div className="order-progress">
            <div style={{ width: '20%' }}></div>
            <div className="vertical">
                <div className="order-progress__step active">
                    <div className="order-progress__box">
                        <div className="order-progress__icon">Icon</div>
                        <div className="order-progress__content">
                            <div className="order-progress__title">
                                Order Received
                            </div>
                            <div className="order-progress__msg">
                                We have received your order
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-progress__step active">
                    <div className="order-progress__box">
                        <div className="order-progress__icon">Icon</div>
                        <div className="order-progress__content">
                            <div className="order-progress__title">
                                Order Received
                            </div>
                            <div className="order-progress__msg">We have</div>
                        </div>
                    </div>
                </div>
                <div className="order-progress__step active current-status">
                    <div className="order-progress__box">
                        <div className="order-progress__icon">Icon</div>
                        <div className="order-progress__content">
                            <div className="order-progress__title">
                                Order Received
                            </div>
                            <div className="order-progress__msg">
                                We have received your order
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-progress__step">
                    <div className="order-progress__box">
                        <div className="order-progress__icon">Icon</div>
                        <div className="order-progress__content">
                            <div className="order-progress__title">
                                Order Received
                            </div>
                            <div className="order-progress__msg">
                                We have received your order
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-progress__step">
                    <div className="order-progress__box">
                        <div className="order-progress__icon">Icon</div>
                        <div className="order-progress__content">
                            <div className="order-progress__title">
                                Order Received
                            </div>
                            <div className="order-progress__msg">
                                We have received your order
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderProgress
