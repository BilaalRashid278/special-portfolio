'use client'
import React, { ReactNode, memo } from 'react';
import { LuWebhook } from "react-icons/lu";
import './styles/nav.css';
import Button from './small-comp/button';
import { Links } from '@/utils/constant';
import ListMenu from './small-comp/ListMenu';
import { NextUIProvider } from "@nextui-org/react";
import { Button as NextUIButton } from "@nextui-org/react";
import Link from 'next/link';
import ModalContent from './small-comp/ModalContent';
import Modal from '@mui/material/Modal';
import { Box,Button as MaterialButton } from '@mui/material';

const Navbar: React.FC = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
    padding : '15px'
  };
  return (
    <NextUIProvider>
      <Modal
        keepMounted
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <h1 className='font-semibold text-xl'>Add New Project</h1>
          <ModalContent />
          <footer className='flex justify-end gap-2 items-center mt-7'>
            <MaterialButton onClick={handleCloseModal} color='error'>
              Close
            </MaterialButton>
            <MaterialButton onClick={handleOpen} variant='contained'>
              Add New
            </MaterialButton>
          </footer>
        </Box>
      </Modal>
      <nav className='fixed top-0 w-[99.9%] h-[80px] bg-transparent z-50'>
        <div className='nav_filtering absolute'></div>
        <div className='w-[100%] h-[100%] absolute text-white flex justify-between px-10 md:px-28 lg:px-36 items-center'>

          <div className='flex gap-2 items-center'>
            <LuWebhook style={{
              animation: `spin 3s linear infinite`
            }} className='' size={40} />
            <span className='font-bold text-3xl'>
              Dev.
            </span>
          </div>

          <div className='block lg:hidden'>
            <ListMenu />
          </div>

          <ul className='hidden lg:flex items-center' typeof='none'>
            {Links?.map((link, index): ReactNode => {
              return (
                <li key={index} className='cursor-pointer mx-5'>
                  <Link href={`${link.url}`}>
                    <Button title={link.name} Icon={link.Icon} size='small' />
                  </Link>
                </li>
              )
            })}
            <li>
              <NextUIButton onPress={handleOpen} color='default' size='md' variant='bordered' style={{ color: 'white' }}>
                Add Project
              </NextUIButton>
            </li>
          </ul>

        </div>
      </nav>
    </NextUIProvider>
  )
}

export default memo(Navbar);
