import React from 'react'

const OrderProduct = () => {
    return (
        <div className="order-product">
            <div className="order-product__info">
                <div className="order-product__name">
                    Carbonara with Sous Vide Egg
                </div>
                <div className="order-product__price">S$11.80</div>
            </div>
            <div className="order-product__content">
                <div className="order-product__image">
                    <img src="./images/Order-Product.png" alt="order-product" />
                </div>
                <div className="order-product__variant">
                    <div className="order-product__variant-name">Big</div>
                    <div className="order-product__quality">x 1</div>
                </div>
            </div>
            <div className="order-product__modifier">
                <div className="order-product__modifier-item">
                    <span className="order-product__modifier-item-quality">
                        2 x
                    </span>
                    <span className="order-product__modifier-item-name">
                        Modifier A
                    </span>
                </div>
                <div className="order-product__modifier-item">
                    <span className="order-product__modifier-item-quality">
                        1 x
                    </span>
                    <span className="order-product__modifier-item-name">
                        Modifier B
                    </span>
                </div>
            </div>
            <div className="order-product__note">* No pepper</div>
        </div>
    )
}

export default OrderProduct
