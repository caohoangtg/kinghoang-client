import React from 'react'

const ProductCard = () => {
    return (
        <div className="product-card">
            <div className="product-card__media">
                <img
                    className="product-card__img"
                    src="./images/Product.png"
                    alt="product"
                />
            </div>
            <div className="product-card__content">
                <div className="line-horizontal"></div>
                <p className="product-card__price">S$11.80</p>
                <p className="product-card__name">
                    Carbonara with Sous Vide Egg
                </p>
            </div>
            <div className="product-card__action">
                <button
                    className="product-card__btn-add button-add"
                    type="button"
                >
                    ADD
                </button>
            </div>
        </div>
    )
}

export default ProductCard
