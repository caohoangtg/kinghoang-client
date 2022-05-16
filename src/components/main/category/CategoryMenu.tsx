import React, { useState } from 'react'
import { BsChevronUp, BsChevronDown } from 'react-icons/bs'
import Collapse from '@mui/material/Collapse'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { FixedSizeList, ListChildComponentProps } from 'react-window'

function renderRow(props: ListChildComponentProps) {
    const { index, style } = props

    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton>
                <ListItemText primary={`Category ${index + 1}`} />
            </ListItemButton>
        </ListItem>
    )
}

const CategoryMenu = () => {
    const [checked, setChecked] = useState(false)

    const handleChangeCollapse = () => {
        setChecked(!checked)
    }

    return (
        <div className="category-menu">
            <div className="category-menu__title">
                <span className="category-menu__name">
                    Choice of Crab Weight
                </span>
                <button
                    className="category-menu_btn-collapse"
                    onClick={handleChangeCollapse}
                >
                    MORE
                    {checked ? (
                        <BsChevronUp size={26} />
                    ) : (
                        <BsChevronDown size={26} />
                    )}
                </button>
            </div>
            <Collapse in={checked}>
                <div className="category-menu__content">
                    <Box
                        sx={{
                            width: '100%',
                            height: 400,
                            bgcolor: 'background.paper',
                        }}
                    >
                        <FixedSizeList
                            height={400}
                            width={'100%'}
                            itemSize={45}
                            itemCount={50}
                            overscanCount={5}
                        >
                            {renderRow}
                        </FixedSizeList>
                    </Box>
                </div>
            </Collapse>
        </div>
    )
}

export default CategoryMenu
