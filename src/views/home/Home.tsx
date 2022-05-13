import React, { useState } from 'react'
import { Header, Footer } from '../../components/layout'
import {
    ProductList,
    HeaderBanner,
    Recommended,
    CategoryTab,
    ProductToCart,
    CartSpeedDial,
    CategoryMenu,
} from '../../components/main'
import Container from '@mui/material/Container'
import { DineInModal } from '../../components/common'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = (newOpen: boolean) => {
        setIsOpen(newOpen)
    }

    return (
        <React.Fragment>
            <div className="home-page">
                <Header />
                <main className="home-page__main">
                    <HeaderBanner />

                    <Container fixed className="home-page__body">
                        <Recommended openProductDetail={openModal} />
                        <CategoryTab />
                        <ProductList openProductDetail={openModal} />
                        <ProductList openProductDetail={openModal} />
                        <ProductList openProductDetail={openModal} />
                    </Container>

                    <ProductToCart
                        isOpen={isOpen}
                        openProductDetail={openModal}
                    />

                    <CategoryMenu />
                    <CartSpeedDial />
                </main>
                <Footer />
            </div>
            <DineInModal />
        </React.Fragment>
    )
}

export default Home
