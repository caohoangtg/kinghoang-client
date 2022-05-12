import React from 'react'
//import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { ImCart } from 'react-icons/im'
import Badge, { BadgeProps } from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        animationName: 'cartNumber',
        animationDuration: '5s',
        animationIterationCount: 'infinite',
    },
}))

const CartSpeedDial = () => {
    return (
        <React.Fragment>
            <div className="cart-speed-dial">
                <Link
                    to="/cart"
                    style={{ display: 'flex', alignSelf: 'center' }}
                >
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4} color="secondary">
                            <ImCart size={28} color="#F05223" />
                        </StyledBadge>
                    </IconButton>
                </Link>
            </div>
        </React.Fragment>
    )
}

export default CartSpeedDial
