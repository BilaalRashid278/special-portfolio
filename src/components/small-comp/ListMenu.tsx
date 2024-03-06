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
import { handleScroll } from './CommonFunctions';
import ModalContent from './ModalContent';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { style } from '@/components/small-comp/CommonFunctions';
import { Context } from '@/context/Context';
import { useRouter } from 'next/navigation'
const ListMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const { openModal, setOpenModal, isAdmin, adminPassword } = React.useContext(Context);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const router = useRouter();
    const handleModal = () => {
        if (adminPassword == '#bilaal') {
            setOpenModal(false);
            localStorage.setItem('adminPassword', adminPassword);
            router.push('/admin');
        } else {
            alert('Please enter a password');
        }
    }
    return (
        <div>
            <Modal
                keepMounted
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={{ ...style, border: 'none', outline: 'none' }}>
                    <h1 className='font-semibold text-base text-red-500'>Required Password*</h1>
                    <ModalContent />
                    <footer className='flex justify-end gap-2 items-center mt-7'>
                        <Button onClick={handleModal} variant='contained'>
                            Done
                        </Button>
                    </footer>
                </Box>
            </Modal>
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
                        <MenuItem key={index} onClick={() => {
                            handleClose();
                            if (!isAdmin) {
                                handleScroll(`${link.id}`);
                            }
                        }}>
                            <ListItemIcon>
                                <Icon />
                            </ListItemIcon>
                            {link.name}
                        </MenuItem>
                    )
                })}
                <MenuItem key={Links?.length} onClick={() => {
                    if (localStorage.getItem('adminPassword') == '#bilaal') {
                        setOpenModal(false);
                        router.push('/admin');
                    } else {
                        setOpenModal(true)
                    }
                }}>
                    Admin
                </MenuItem>
            </Menu>
        </div>
    )
}

export default ListMenu
