import React from 'react'
import Container from '@mui/material/Container'
import { Link } from 'react-router-dom'

const OrderHeader = () => {
    return (
        <header id="header" className="order-header">
            <Container fixed>
                <div className="order-header__container">
                    <div className="order-header__menu-icon">
                        <Link to={'/'}>
                            <img src="./images/Chef-18.png" alt="brand" />
                        </Link>
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
