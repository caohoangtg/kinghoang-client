import React from 'react'
import { Footer, OrderHeader } from '../../components/layout'
import { OrderAction, OrderSummary } from '../../components/main'
import '../../styles/components/_order.scss'
import Container from '@mui/material/Container'

const Order = () => {
    return (
        <div className="order">
            <OrderHeader />
            <Container fixed>
                <div className="order-body">
                    <OrderSummary />
                    <OrderAction />
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Order
