'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Links } from '@/utils/constant';
import { CiMenuFries } from "react-icons/ci";
import Link from 'next/link';


const ListMenu = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Menu">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32, backgroundColor: 'white', color: 'black' }}>
                            <CiMenuFries color='black' />
                        </Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {Links?.map((link, index) => {
                    const Icon: any = link.Icon;
                    return (
                        <Link href={`${link.url}`}>
                            <MenuItem key={index} onClick={handleClose}>
                                <ListItemIcon>
                                    <Icon />
                                </ListItemIcon>
                                {link.name}
                            </MenuItem>
                        </Link>
                    )
                })}
                <MenuItem key={Links?.length} onClick={handleClose}>
                    Add Project
                </MenuItem>
            </Menu>
        </React.Fragment>
    )
}

export default ListMenu
