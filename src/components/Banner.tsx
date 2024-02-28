import React from 'react'
import './styles/banner.css';
import TypeAnimationComponent from './small-comp/TypeAnimation';
import NextUIButton from './small-comp/NextUIButton';

const Banner = () => {
  return (
    <header className='w-[100%] h-[100vh] relative'>
      <div className='bg_filtering'/>
      <div className='z-20 w-[100%] px-5 common_absolute text-center text-white flex flex-col justify-center gap-4'>
        <h1
        className='text-4xl font-bold'
        >Frontend Developer</h1>
        <TypeAnimationComponent sequence={[
          "I am a professional frontend developer to build a single page application",
          4000,
          "Let's build your application with responsive design",
          4000
        ]} 
        wrapper={'h1'} 
        className='text-sm'
        />

        <NextUIButton title={'About Me'} onClick={() => {
          console.log('Hello how are you');
        }} className='max-w-[100px] self-center' variant='bordered' color='success'/>
      </div>
    </header>
  )
}

export default Banner
