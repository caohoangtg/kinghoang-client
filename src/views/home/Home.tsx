import React from 'react'
import { Header, Footer } from '../../components/layout'
import { ProductList, HeaderBanner, Recommended } from '../../components/main'

import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

const Home = () => {
    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <Header />
                <Container fixed>
                    <HeaderBanner />
                    <Recommended />
                    <Box sx={{ bgcolor: '#cfe8fc', height: '500vh' }}>
                        <ProductList />
                    </Box>
                </Container>
                <Footer />
            </React.Fragment>
        </>
    )
}

export default Home
