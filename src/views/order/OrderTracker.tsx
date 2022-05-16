import React from 'react'
import Container from '@mui/material/Container'
import { OrderProgress, OrderQRCode } from '../../components/main'

const OrderTracker = () => {
    return (
        <Container fixed className="order-tracker">
            <OrderQRCode />
            <OrderProgress />
        </Container>
    )
}

export default OrderTracker
