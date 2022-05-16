import React from 'react'
import { IoIosRemoveCircleOutline, IoIosAddCircle } from 'react-icons/io'
import IconButton from '@mui/material/IconButton'

const ModifierItem = () => {
    return (
        <div className="modifier-item">
            <div>500g</div>
            <div>+S$15.00</div>
            <div className="modifier-item__quality">
                <IconButton
                    className="color-icon"
                    aria-label="remove from cart"
                >
                    <IoIosRemoveCircleOutline size={40} />
                </IconButton>
                <span>1</span>
                <IconButton className="color-icon" aria-label="add to cart">
                    <IoIosAddCircle size={40} />
                </IconButton>
            </div>
        </div>
    )
}

export default ModifierItem
