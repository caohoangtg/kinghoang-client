import React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { MdMoveToInbox, MdMail } from 'react-icons/md'

import { GiHamburgerMenu } from 'react-icons/gi'
import { VscClose } from 'react-icons/vsc'
import { GoGlobe } from 'react-icons/go'

import NativeSelect from '@mui/material/NativeSelect'
import FormControl from '@mui/material/FormControl'

type Anchor = 'left'

const CartDetail = () => {
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
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className="language">
                <GoGlobe size={22} className="language__globe-icon" />
                <FormControl fullWidth className="language__select">
                    <NativeSelect
                        defaultValue={30}
                        inputProps={{
                            name: 'age',
                            id: 'uncontrolled-native',
                        }}
                    >
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect>
                </FormControl>
                <VscClose
                    size={28}
                    color="#333333"
                    style={{
                        position: 'absolute',
                        right: '10px',
                        top: '10px',
                    }}
                />
            </div>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
                    (text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? (
                                    <MdMoveToInbox />
                                ) : (
                                    <MdMail />
                                )}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                )}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <MdMoveToInbox /> : <MdMail />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
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

export default CartDetail
