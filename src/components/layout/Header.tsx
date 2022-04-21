import React from 'react'
import Container from '@mui/material/Container'
// import { BsSearch } from 'react-icons/bs'
import { Menu } from '../common'
import ProductToCart from '../main/product/ProductToCart'

const Header = () => {
    return (
        <header id="header" className="header">
            <Container fixed>
                <div className="header__container">
                    <div className="header__menu-icon">
                        <Menu />
                    </div>
                    <div className="header__brand-name">
                        Eighteen Chefs @ Bugis Junction
                    </div>
                    <div className="header__search-icon">
                        {/* <BsSearch size={'1.25em'} color="#F05223" /> */}
                        <ProductToCart />
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
