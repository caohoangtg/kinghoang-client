import React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaUserCircle } from 'react-icons/fa'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import { VscClose } from 'react-icons/vsc'
import {
    FcGoogle,
    FcStart,
    FcRating,
    FcSteam,
    FcWikipedia,
} from 'react-icons/fc'

type Anchor = 'left'

const Menu = () => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    })

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return
            }

            setState({ ...state, [anchor]: open })
        }

    const list = (anchor: Anchor) => (
        <Box
            sx={{
                width: 300,
                height: '100%',
            }}
            className="menu-drawer__box"
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Button
                onClick={toggleDrawer(anchor, false)}
                className="menu-drawer__close"
            >
                <VscClose size={36} color="#333333" />
            </Button>
            <div className="merchant-brand">
                <img
                    className="merchant-brand__avatar"
                    alt="Remy Sharp"
                    src="/images/18-Chef.png"
                />
                <div className="merchant-brand__name">
                    Eighteen Chefs @ Bugis Junction
                </div>
            </div>
            <div>
                <List>
                    <ListItem button key={'Home'}>
                        <ListItemText
                            primary={'Home'}
                            className="menu-drawer__item active"
                        />
                    </ListItem>
                    <ListItem button key={'Recommended'}>
                        <ListItemText
                            primary={'Recommended'}
                            className="menu-drawer__item"
                        />
                    </ListItem>
                    <ListItem button key={'Menu'}>
                        <ListItemText
                            primary={'Menu'}
                            className="menu-drawer__item"
                        />
                    </ListItem>
                </List>
                <Divider className="menu-drawer__divider" />
                <List>
                    {['About Us', 'Location & Hours', 'Reviews'].map((text) => (
                        <ListItem button key={text}>
                            <ListItemText
                                primary={text}
                                className="menu-drawer__item"
                            />
                        </ListItem>
                    ))}
                </List>
            </div>

            <div className="menu-drawer__user">
                <FaUserCircle size={34} />
                <div>Log In / Sign Up</div>
            </div>

            <div className="menu-drawer__contac-us">
                <div className="menu-drawer__language">
                    <div>Language</div>
                    <div className="menu-drawer__language-select">
                        <FormControl
                            fullWidth
                            variant="standard"
                            sx={{ minWidth: 120 }}
                        >
                            <Select id="language-code" value={10} label="Age">
                                <MenuItem value={10}>English</MenuItem>
                                <MenuItem value={20}>China</MenuItem>
                                <MenuItem value={30}>Viet Nam</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="menu-drawer__social-network">
                    <FcGoogle size={38} />
                    <FcStart size={38} />
                    <FcRating size={38} />
                    <FcSteam size={38} />
                    <FcWikipedia size={38} />
                </div>
            </div>
        </Box>
    )

    return (
        <React.Fragment key={'left'}>
            <GiHamburgerMenu
                size={'1.75em'}
                color="#F05223"
                onClick={toggleDrawer('left', true)}
            />
            <Drawer
                anchor={'left'}
                open={state['left']}
                onClose={toggleDrawer('left', false)}
                sx={{
                    backdropFilter: 'blur(10px)',
                }}
                className="menu-drawer"
            >
                {list('left')}
            </Drawer>
        </React.Fragment>
    )
}

export default Menu
