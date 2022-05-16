import React from 'react'
import { styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import { FaShoppingCart } from 'react-icons/fa'
import { FiMoreVertical } from 'react-icons/fi'
import Toolbar from '@mui/material/Toolbar'
import Fab from '@mui/material/Fab'
import Box from '@mui/material/Box'

const CartAlert = () => {
    const StyledFab = styled(Fab)({
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    })

    return (
        <>
            <AppBar
                position="fixed"
                color="primary"
                sx={{ top: 'auto', bottom: 0 }}
            >
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer">
                        <FaShoppingCart size={24} />
                    </IconButton>
                    <StyledFab color="secondary" aria-label="add">
                        <FaShoppingCart size={24} />
                    </StyledFab>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton color="inherit">
                        <FiMoreVertical size={24} />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default CartAlert
