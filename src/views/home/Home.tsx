import React from 'react'
import { Header, Footer } from '../../components/layout'
import {
    ProductList,
    HeaderBanner,
    Recommended,
    CategoryTab,
} from '../../components/main'

import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
// import ProductToCart from '../../components/main/product/ProductToCart'

const Home = () => {
    return (
        <React.Fragment>
            <div className="home-page">
                <CssBaseline />
                <Header />
                <main className="home-page__main">
                    <HeaderBanner />
                    {/* <ProductToCart /> */}
                    <Container fixed className="home-page__body">
                        <Recommended />
                        <CategoryTab />
                        <ProductList />
                        <ProductList />
                        <ProductList />
                    </Container>
                </main>
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default Home
