import React from 'react'
import Container from '@mui/material/Container'
import { BsSearch } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
    return (
        <header id="header" className="header">
            <Container fixed>
                <div className="header__container">
                    <div className="header__menu-icon">
                        <GiHamburgerMenu size={'1.75em'} color="#F05223" />
                    </div>
                    <div className="header__brand-name">
                        Eighteen Chefs @ Bugis Junction
                    </div>
                    <div className="header__search-icon">
                        <BsSearch size={'1.25em'} color="#F05223" />
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
