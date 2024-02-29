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
import ModalContent from './ModalContent';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';

const ListMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width : '95%',
        maxWidth : '390px',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: '8px',
        padding : '15px'
    };
    return (
        <React.Fragment>
            <Modal
                keepMounted
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <div className='px-3'>
                    <Box sx={style}>
                        <h1 className='font-semibold text-xl'>Add New Project</h1>
                        <ModalContent />
                        <footer className='flex justify-end gap-2 items-center mt-7'>
                            <Button onClick={handleCloseModal} color='error'>
                                Close
                            </Button>
                            <Button onClick={handleOpen} variant='contained'>
                                Add New
                            </Button>
                        </footer>
                    </Box>
                </div>
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
                        <Link key={index} href={`${link.url}`}>
                            <MenuItem key={index} onClick={handleClose}>
                                <ListItemIcon>
                                    <Icon />
                                </ListItemIcon>
                                {link.name}
                            </MenuItem>
                        </Link>
                    )
                })}
                <MenuItem key={Links?.length} onClick={handleOpen}>
                    Add Project
                </MenuItem>
            </Menu>
        </React.Fragment>
    )
}

export default ListMenu
