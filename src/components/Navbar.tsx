'use client'
import React, { ReactNode, memo } from 'react';
import { LuWebhook } from "react-icons/lu";
import './styles/nav.css';
import Button from './small-comp/button';
import {Links} from '@/utils/constant';
import ListMenu from './small-comp/ListMenu';
const Navbar: React.FC = (): React.JSX.Element => {
  return (
    <nav className='fixed top-0 w-[99.9%] h-[80px] bg-transparent z-20'>
      <div className='nav_filtering absolute'></div>
      <div className='w-[100%] h-[100%] absolute text-white flex justify-between px-10 md:px-28 lg:px-36 items-center'>

        <div className='flex gap-2 items-center'>
          <LuWebhook className='' size={40}/>
          <span className='font-bold text-3xl'>
            Dev.
          </span>
        </div>
        
        <div className='block md:hidden'>
          <ListMenu/>
        </div>

        <ul className='hidden md:flex' typeof='none'>
          {Links?.map((link,index) : ReactNode => {
            return (
              <li key={index} className='cursor-pointer mx-5'>
                <Button title={link.name} Icon={link.Icon}/>
              </li>
            )
          })}
        </ul>
        
      </div>
    </nav>
  )
}

export default memo(Navbar);
