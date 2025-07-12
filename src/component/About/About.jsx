import React from 'react'

function About() {
  return (
    <div className='bg-linear-to-tr from-[#95ebd4] to-[#00585E] font-winky'>


      <div className='py-3'>
        <h1 className=' text-white text-center font-semibold text-shadow-lg text-5xl'>About</h1>
      </div>
      <div  className='md:flex'>
        <div className='text-center px-15 py-10 md:px-10py-10'>
 <p className=' text-shadow-2xs text-shadow-white  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corrupti suscipit facere, et blanditiis libero odio neque cumque eveniet. Vitae nulla sapiente accusamus placeat aliquid! Temporibus soluta beatae nesciunt veritatis.</p>
        </div>
       
        <div className='text-center px-15 py-5 md:px-10,py-5'>
   <p className='text-center text-shadow-2xs text-shadow-white mt-4 md-min-w-[90]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corrupti suscipit facere, et blanditiis libero odio neque cumque eveniet. Vitae nulla sapiente accusamus placeat aliquid! Temporibus soluta beatae nesciunt veritatis.</p>
        </div>
       
        
      </div>
    </div>
  )
}

export default About