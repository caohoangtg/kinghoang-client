import React from 'react'
import Container from '@mui/material/Container'
import { Menu, Search } from '../common'

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
                        <Search />
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
