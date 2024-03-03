'use client'
import React, { ReactNode, memo, useContext } from 'react';
import { LuWebhook } from "react-icons/lu";
import './styles/nav.css';
import Button from './small-comp/button';
import { Links } from '@/utils/constant';
import ListMenu from './small-comp/ListMenu';
import { NextUIProvider } from "@nextui-org/react";
import TypeAnimationComponent from './small-comp/TypeAnimation';
import { handleScroll } from './small-comp/CommonFunctions';
import ModalContent from './small-comp/ModalContent';
import Modal from '@mui/material/Modal';
import { Box, Button as MaterialButton } from '@mui/material';
import { style } from '@/components/small-comp/CommonFunctions';
import { Context } from '@/context/Context';
import NextUIButton from './small-comp/NextUIButton';

const Navbar: React.FC = () => {
  const { openModal, setOpenModal } = useContext(Context);
  return (
    <NextUIProvider>
      <Modal
        keepMounted
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={{...style,border : 'none',outline : 'none'}}>
          <h1 className='font-semibold text-base text-red-500'>Required Password*</h1>
          <ModalContent />
          <footer className='flex justify-end gap-2 items-center mt-7'>
            <MaterialButton onClick={() => { setOpenModal(false) }} variant='contained'>
              Done
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
            <TypeAnimationComponent sequence={[
              "Bilal.",
              3000,
              "Rashid.",
              3000
            ]}
              wrapper={'span'}
              className='font-bold text-3xl font-mono'
            />
          </div>

          <div className='block lg:hidden'>
            <ListMenu />
          </div>

          <ul className='hidden lg:flex items-center' typeof='none'>
            {Links?.map((link, index): ReactNode => {
              return (
                <li key={index} className='cursor-pointer mx-5'>
                  <Button onClick={() => {
                    handleScroll(`${link.id}`)
                  }} title={link.name} Icon={link.Icon} size='small' />
                </li>
              )
            })}
            <li>
              <NextUIButton title='Admin' onClick={() => {
                setOpenModal(true);
              }} color='default' size='md' variant='bordered' style={{ color: 'white' }}/>
            </li>
          </ul>

        </div>
      </nav>
    </NextUIProvider>
  )
}

export default memo(Navbar);
