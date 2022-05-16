import React from 'react'

const ProductInfo = () => {
    return (
        <React.Fragment>
            <div className="product-tc__info">
                <div className="product-tc__price">S$15.00</div>
                <div className="product-tc__package-fee">
                    Package fee: S$1.00
                </div>
            </div>
            <div className="product-tc__description">
                <p>
                    Bee hoon braised cooked for hours Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Duis vel ipsum feugiat,
                    faucibus lorem sit amet. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, posuere. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Duis vel ipsum feugiat,
                    faucibus lorem sit amet. Lorem ipsum dolor sit amet,
                    consectetur3
                </p>
                <a href="#a">See Less</a>
            </div>
        </React.Fragment>
    )
}

export default ProductInfo
