import React from 'react'

const ProductLinear = () => {
    return (
        <>
            <div className="product-linear">
                <div className="product-linear__media">
                    <img
                        className="product-linear__img"
                        src="./images/Product-4.png"
                        alt="product"
                    />
                </div>
                <div className="product-linear__content">
                    <p className="product-linear__name">
                        澳洲龙虾炒芦笋和五种鲜菌 Australian (Southern Rock)
                        Lobster with Asparagus & an Assortment of Five Mushrooms
                        Lobster with Asparagus & an Assortment of Five Mushrooms
                    </p>
                    <p className="product-linear__description">
                        This half-portioned king crab dish is bursting with bold
                        flavours! This half-portioned king crab dish is bursting
                        with bold flavours!
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
            <div className="product-linear">
                <div className="product-linear__media">
                    <img
                        className="product-linear__img"
                        src="./images/Product-3.png"
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
        </>
    )
}

export default ProductLinear
