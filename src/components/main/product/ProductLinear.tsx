import React from 'react'

const ProductLinear = () => {
    return (
        <div className="product-linear">
            <div className="product-linear__media">
                <img
                    className="product-linear__img"
                    src="./images/Product-2.png"
                    alt="product"
                />
            </div>
            <div className="product-linear__content">
                <p className="product-linear__name">
                    Carbonara with Sous Vide Egg
                </p>
                <div className="product-linear__action">
                    <p className="product-linear__price">S$11.80</p>
                    <button
                        className="product-linear__btn-add button-add"
                        type="button"
                    >
                        ADD
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductLinear
