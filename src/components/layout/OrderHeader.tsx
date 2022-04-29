import React from 'react'
import Container from '@mui/material/Container'

const OrderHeader = () => {
    return (
        <header id="header" className="order-header">
            <Container fixed>
                <div className="order-header__container">
                    <div className="order-header__menu-icon">
                        <img src="./images/Chef-18.png" alt="brand" />
                    </div>
                    <div className="order-header__brand-name">
                        Eighteen Chefs @ Bugis Junction
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default OrderHeader
