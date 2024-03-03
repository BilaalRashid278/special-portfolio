import React, { memo } from 'react';
import { Grid } from '@mui/material';
import './styles/banner.css';
import NextUIButton from './small-comp/NextUIButton';
import { FaExternalLinkAlt } from "react-icons/fa";
import { Button } from '@mui/material';
import Image from 'next/image';

const AboutMe = () => {
  const hightLightSkills = ['Javascript','React','Typescript','Next JS'];
  const src : string = 'https://th.bing.com/th/id/OIP.Rd8MULGebnwDJkJ6m3SDKAHaE7?w=800&h=533&rs=1&pid=ImgDetMain';
  let description : string = "Hi! I'm Bilal, a seasoned React.js developer with a passion for building intuitive and dynamic user interfaces. With a solid background in front-end development and a keen eye for design, I bring a unique blend of technical expertise and creativity to every project.";
  return (
    <section id='about' className='w-[100%] flex flex-col items-center px-4 pb-4' style={{ backgroundColor: 'black' }}>
      <div className='text-center my-10 font-semibold text-2xl'>About Me</div>
      <Grid container style={{maxWidth : '800px'}} className='w-[100%] shadow_custom rounded-[25px]'>
        <Grid item xs={12} sm={5}>
          <Image width={100} height={100} src={src} className='w-[100%] object-cover rounded-tl-[25px] rounded-tr-[25px] md:rounded-[25px] h-[250px] lg:h-[270px]' alt='Profile Image'/>
        </Grid>
        <Grid item xs={12} sm={7} style={{
          display : 'flex',
          flexDirection : 'column',
          justifyContent : 'space-between'
        }} className='p-5 gap-3 md:gap-1'>
          <div>
            <h1 className='text-sm'>{hightLightSkills.join(' | ')}</h1>
          </div>
          <div className='text-start'>
            <h1 className='font-bold text-lg md:text-xl'>{"Hello I'am Bilal Rashid"}</h1>
            <p className='text-sm mt-5'>{`${description.slice(0, description.length - 30)}...`}</p>
          </div>
          <div className='flex justify-between mt-5 md:mt-0'>
            <Button title='Download My CV' sx={{ color: 'white' }} size='small'>
              Download CV
            </Button>
            <NextUIButton title={'View Profile'} endContent={<FaExternalLinkAlt />} size='sm' color='success' />
          </div>
        </Grid>
      </Grid>
    </section>
  )
}

export default memo(AboutMe)
