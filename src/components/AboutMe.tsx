import React,{memo} from 'react'

const AboutMe = () => {
  return (
    <section id='about' className='h-[1500px] w-[100%]' style={{backgroundColor : 'black'}}>
      <h1 className='text-center'>About</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum eaque autem minus veritatis quaerat eveniet eum voluptatibus neque numquam modi.</p>
    </section>
  )
}

export default memo(AboutMe)
