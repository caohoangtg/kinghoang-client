import React from 'react'
import { Global } from '@emotion/react'
import { styled } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { grey } from '@mui/material/colors'
// import Button from '@mui/material/Button'
import { BsSearch } from 'react-icons/bs'
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

const drawerBleeding = 56

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window
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

// const Puller = styled(Box)(({ theme }) => ({
//     width: 30,
//     height: 6,
//     backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
//     borderRadius: 3,
//     position: 'absolute',
//     top: 8,
//     left: 'calc(50% - 15px)',
// }))

const ProductToCart = (props: Props) => {
    const { window } = props
    const [open, setOpen] = React.useState(false)

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }

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
                <Box
                    sx={{
                        textAlign: 'center',
                        pt: 1,
                        backgroundColor: '#FFFFFF',
                    }}
                >
                    {/* <Button onClick={toggleDrawer(true)}>Open</Button> */}
                    <BsSearch
                        size={'1.25em'}
                        color="#F05223"
                        onClick={toggleDrawer(true)}
                    />
                </Box>
                <SwipeableDrawer
                    container={container}
                    anchor="bottom"
                    open={open}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
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
                        <Button onClick={toggleDrawer(false)}>
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
                            <div className="product-tc__info">
                                <div className="product-tc__price">S$15.00</div>
                                <div className="product-tc__package-fee">
                                    Package fee: S$1.00
                                </div>
                            </div>
                            <div className="product-tc__description">
                                <p>
                                    Bee hoon braised cooked for hours Lorem
                                    ipsum dolor sit amet, consectetur adipiscing
                                    elit. Duis vel ipsum feugiat, faucibus lorem
                                    sit amet. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, posuere. Lorem
                                    ipsum dolor sit amet, consectetur adipiscing
                                    elit. Duis vel ipsum feugiat, faucibus lorem
                                    sit amet. Lorem ipsum dolor sit amet,
                                    consectetur3
                                </p>
                                <a href="#a">See Less</a>
                            </div>
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
