'use client'
import React, { ReactNode, memo } from 'react';
import { LuWebhook } from "react-icons/lu";
import './styles/nav.css';
import Button from './small-comp/button';
import { Links } from '@/utils/constant';
import ListMenu from './small-comp/ListMenu';
import { NextUIProvider } from "@nextui-org/react";
import {Button as NextUIButton} from "@nextui-org/react";

const Navbar: React.FC = () => {
  return (
    <NextUIProvider>
      <nav className='fixed top-0 w-[99.9%] h-[80px] bg-transparent z-50'>
        <div className='nav_filtering absolute'></div>
        <div className='w-[100%] h-[100%] absolute text-white flex justify-between px-10 md:px-28 lg:px-36 items-center'>

          <div className='flex gap-2 items-center'>
            <LuWebhook className='' size={40} />
            <span className='font-bold text-3xl'>
              Dev.
            </span>
          </div>

          <div className='block lg:hidden'>
            <ListMenu />
          </div>

          <ul className='hidden lg:flex' typeof='none'>
            {Links?.map((link, index): ReactNode => {
              return (
                <li key={index} className='cursor-pointer mx-5'>
                  <Button title={link.name} Icon={link.Icon} />
                </li>
              )
            })}
            <li>
              <NextUIButton color='default' size='md' variant='bordered' style={{color : 'white'}}>
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
