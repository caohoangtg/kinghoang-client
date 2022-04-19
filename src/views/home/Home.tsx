import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Footer } from '../../components/layout'
import { ProductList } from '../../components/main'

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <ProductList />
                <div>
                    {process.env.NODE_ENV}
                    {process.env.PUBLIC_URL}
                    {process.env.TARGET_ENV}
                    <Link to="/product">View Product </Link>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Home
