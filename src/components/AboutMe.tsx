import React,{memo} from 'react';
import { Grid } from '@mui/material';
import './styles/banner.css';

const AboutMe = () => {
  return (
    <section id='about' className='w-[100%] flex flex-col items-center px-4 pb-4' style={{backgroundColor : 'black'}}>
      <div className='text-center my-10 font-semibold text-2xl'>About Me</div>
      <Grid container  className='w-[100%] lg:w-[70%] shadow_custom rounded-[25px]'>
        <Grid item xs={12} sm={5}>
          <img src='https://th.bing.com/th/id/R.36dc1c73196373d1a691afd8e889d830?rik=LsRoo1bG71b4dg&pid=ImgRaw&r=0' className='w-[100%] h-[100%]  object-cover rounded-tl-[25px] rounded-tr-[25px] md:rounded-[25px] max-h-[280px]'/>
        </Grid>
        <Grid item xs={12} sm={7}>

        </Grid>
      </Grid>
    </section>
  )
}

export default memo(AboutMe)
