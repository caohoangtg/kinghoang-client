import React from 'react'
import ProductLinear from './ProductLinear'
//import { Link } from 'react-router-dom'

interface Props {
    openProductDetail: any
}

const ProductList = ({ openProductDetail }: Props) => {
    const openModal = (newOpen: boolean) => {
        openProductDetail(newOpen)
    }

    return (
        <div className="product-list">
            <div className="product-list__title-category">Coconut series</div>
            <div className="product-list__description-category">
                <p>
                    <span style={{ color: '#e61d2b' }}>
                        * Order, pay and show your Student ID to any
                    </span>
                    of our staff when collecting the order.
                </p>
                <p>- Students enjoy a FREE Soup of the Day & Iced Lemon Tea!</p>
                <p>- Available:</p>
                <p>
                    • Mon - Thu (All Day), Fri - Sun & Eve of PHs (11.30AM -
                    5PM)
                </p>
            </div>
            <ProductLinear openProductDetail={openModal} />
            <ProductLinear openProductDetail={openModal} />
            <ProductLinear openProductDetail={openModal} />
            <ProductLinear openProductDetail={openModal} />
        </div>
    )
}

export default ProductList
