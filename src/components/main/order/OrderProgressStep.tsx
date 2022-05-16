import React from 'react'
import { BsHourglassTop } from 'react-icons/bs'

interface Props {
    step: any
}

const OrderProgressStep = ({ step }: Props) => {
    return (
        <div
            className={`order-progress__step
            ${step.isActive ? ' active' : ''}
            ${step.isCurrent ? ' current-status' : ''}`}
        >
            <div className="order-progress__box">
                <div className="order-progress__icon">
                    <img src={`./images/order/${step.icon}`} alt={step.icon} />
                </div>
                <div className="order-progress__content">
                    {step.isCurrent ? (
                        <BsHourglassTop
                            size={22}
                            color="#ffffff"
                            className="order-progress__icon-hourglass"
                        />
                    ) : (
                        ''
                    )}
                    <div className="order-progress__title">{step.title}</div>
                    <div className="order-progress__msg">{step.message}</div>
                </div>
            </div>
        </div>
    )
}

export default OrderProgressStep
