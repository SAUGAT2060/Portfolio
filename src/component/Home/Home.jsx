import React from 'react'
import logo from '../../Images/Me.png'
function Home() {
  return (
    <>
    <div 
    id='Home'
    className='grid grid-cols-1 md:grid-cols-2 items-center font-winky  bg-linear-to-br from-[#00585E] to-[#95ebd4] py-20 '>
      <div>
        <h1 className=' text-white text-center text-5xl text-shadow-sm text-shadow-black font-semibold'>Hello, I am Saugat Rana </h1>
        <p className='text-white text-2xl text-shadow-md text-center text-shadow-black font-medium'>I am Full Stack Developer from Nepal </p>
        </div>
       
       <div>
        <img src={logo} alt="Image" className="h-100 md:h-auto mx-auto" />
        <div className='flex justify-evenly items-center'> 
        <button className='rounded-3xl bg-[#00585E] px-5 py-2 border border-white text-white' > About me </button>
        <button className='rounded-3xl bg-[#00585E] px-5 py-2 border border-white text-white'>Resume</button>
        </div>
        
       </div>
    

    </div>
    
  </>)
}

export default Home