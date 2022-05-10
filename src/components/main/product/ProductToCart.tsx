import React from 'react'
import { Global } from '@emotion/react'
import { styled } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { grey } from '@mui/material/colors'
// import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
//import Skeleton from '@mui/material/Skeleton'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Typography from '@mui/material/Typography'

import { VscClose } from 'react-icons/vsc'
import { IoIosRemoveCircleOutline, IoIosAddCircle } from 'react-icons/io'
import ProductImage from './ProductImage'
import IconButton from '@mui/material/IconButton'
import { Modifier } from '../modifier'
import { Variant } from '../variant'
import Button from '@mui/material/Button'
import AdditionalRequest from './AdditionalRequest'
import ProductInfo from './ProductInfo'

const drawerBleeding = 56

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window
    isOpen: boolean
    openProductDetail: any
}

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light'
            ? grey[100]
            : theme.palette.background.default,
}))

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}))

const ProductToCart = (props: Props) => {
    const { window, isOpen, openProductDetail } = props

    // This is used only for the example
    const container =
        window !== undefined ? () => window().document.body : undefined

    return (
        <div className="product-tc">
            <Root>
                <CssBaseline />
                <Global
                    styles={{
                        '.product-tc-drawer.MuiDrawer-root > .MuiPaper-root': {
                            height: `calc(100% - ${drawerBleeding}px)`,
                            overflow: 'visible',
                        },
                    }}
                />

                <SwipeableDrawer
                    container={container}
                    anchor="bottom"
                    open={isOpen}
                    onClose={() => openProductDetail(false)}
                    onOpen={() => openProductDetail(false)}
                    disableSwipeToOpen={true}
                    ModalProps={{
                        keepMounted: false,
                    }}
                    className="product-tc-drawer"
                >
                    <StyledBox
                        sx={{
                            position: 'absolute',
                            top: -drawerBleeding,
                            visibility: 'visible',
                            right: 0,
                            left: 0,
                        }}
                        className="product-tc__header"
                    >
                        <Button onClick={() => openProductDetail(false)}>
                            <VscClose size={36} color="#333333" />
                        </Button>

                        <Typography sx={{ p: 2 }} className="product-tc__name">
                            Carbonara with Sous Vide Egg
                        </Typography>
                    </StyledBox>
                    <StyledBox
                        sx={{
                            px: 2,
                            pb: 2,
                            height: '100%',
                            overflow: 'auto',
                        }}
                        className="product-tc__body"
                    >
                        {/* <Skeleton variant="rectangular" height="100%" /> */}
                        <div className="product-tc__content">
                            <ProductImage />
                            <ProductInfo />
                            <Variant />
                            <Modifier />
                            <Modifier />
                            <Modifier />
                            <Modifier />
                            <AdditionalRequest />
                        </div>
                    </StyledBox>

                    <StyledBox className="product-tc__footer">
                        <div className="product-tc__quality">
                            <IconButton
                                className="color-icon"
                                aria-label="remove from cart"
                            >
                                <IoIosRemoveCircleOutline size={40} />
                            </IconButton>
                            <span>1</span>
                            <IconButton
                                className="color-icon"
                                aria-label="add to cart"
                            >
                                <IoIosAddCircle size={40} />
                            </IconButton>
                        </div>
                        <div className="product-tc__add-to-cart">
                            ADD - S$115.00
                        </div>
                    </StyledBox>
                </SwipeableDrawer>
            </Root>
        </div>
    )
}

export default ProductToCart
