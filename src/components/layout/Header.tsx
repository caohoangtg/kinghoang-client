import React from 'react'
import Container from '@mui/material/Container'
import { Link } from 'react-router-dom'
import { Menu } from '../common'
import ProductToCart from '../main/product/ProductToCart'
import Divider from '@mui/material/Divider'
import { ImCart } from 'react-icons/im'

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
                        <Divider
                            orientation="vertical"
                            variant="middle"
                            flexItem
                            sx={{ marginLeft: '8px', marginRight: '8px' }}
                        />
                        <Link
                            to="/cart"
                            style={{ display: 'flex', alignSelf: 'center' }}
                        >
                            <ImCart size={'1.25em'} color="#F05223" />
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
