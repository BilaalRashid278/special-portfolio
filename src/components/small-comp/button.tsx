'use client'
import React, { memo, useState } from 'react'
import './styles/btn.css';
import { Button as MuiButton } from '@mui/material';


const Button = ({title,Icon} : {title : String,Icon : any}) => {
    const [btnAnimate, setAnimate] = useState<React.CSSProperties>({
        width: '0%',
        height: '1.2px',
        backgroundColor: 'white',
        transition: '1s all',
    });
    return (
        <div onMouseOver={() => {
            setAnimate({
                width: '100%',
                height: '1.2px',
                backgroundColor: 'white',
                transition: '1s all',
            })
        }} onMouseLeave={() => {
            setAnimate({
                width: '0%',
                height: '1.2px',
                backgroundColor: 'white',
                transition: '1s all',
            })
        }} className='cursor-pointer'>
            <MuiButton startIcon={<Icon/>} sx={{ color: 'white' }}>
                {title}
            </MuiButton>
            <div style={{ ...btnAnimate }} className='rounded-lg'></div>
        </div>
    )
}

export default memo(Button);