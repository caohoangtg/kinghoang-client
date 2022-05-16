import React from 'react'
import OrderProgressStep from './OrderProgressStep'

interface OrderProgressModel {
    icon: string
    title: string
    message: string
    isActive: boolean
    isCurrent: boolean
}

const OrderProgress = () => {
    const result: OrderProgressModel[] = [
        {
            icon: 'Received.svg',
            title: 'Order Received',
            message: 'We have received your order',
            isActive: true,
            isCurrent: false,
        },
        {
            icon: 'Accepted.svg',
            title: 'Accepted',
            message: 'Your order has been confirmed',
            isActive: true,
            isCurrent: false,
        },
        {
            icon: 'Preparing.svg',
            title: 'Preparing',
            message: 'We are preparing your order',
            isActive: true,
            isCurrent: false,
        },
        {
            icon: 'Ready.svg',
            title: 'Ready',
            message: 'Your order is ready for collection',
            isActive: true,
            isCurrent: true,
        },
        {
            icon: 'Collected.svg',
            title: 'Collected',
            message: 'Enjoy!',
            isActive: false,
            isCurrent: false,
        },
    ]

    return (
        <div className="order-progress">
            <div style={{ width: '20%' }}></div>
            <div className="vertical">
                {result.map((step) => (
                    <OrderProgressStep key={step.icon} step={step} />
                ))}

                {/* <div className="order-progress__step active">
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
                </div> */}
            </div>
        </div>
    )
}

export default OrderProgress
