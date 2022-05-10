import React from 'react'

interface Props {
    openProductDetail: any
}

const ProductCard = ({ openProductDetail }: Props) => {
    const openModal = () => {
        openProductDetail(true)
    }

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
                <p className="product-card__name">Deshelled Chilli King Crab</p>
                {/* <p className="product-card__description">
                        This half-portioned king crab dish is bursting with bold
                        flavours! This half-portioned king crab dish is bursting
                        with bold flavours!
                    </p> */}
            </div>
            <div className="product-card__action">
                <button
                    className="product-card__btn-add button-add"
                    type="button"
                    onClick={openModal}
                >
                    ADD
                </button>
            </div>
        </div>
    )
}

export default ProductCard
