import React from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import { FaShoppingCart } from 'react-icons/fa'

const CartSpeedDial = () => {
    const [value, setValue] = React.useState(0)

    return (
        <Box sx={{ width: 500 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
            >
                <BottomNavigationAction
                    label="1 item"
                    icon={<FaShoppingCart size={24} />}
                />
                <BottomNavigationAction label="MY CART" />
            </BottomNavigation>
        </Box>
    )
}

export default CartSpeedDial
