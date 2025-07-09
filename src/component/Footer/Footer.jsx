import React from 'react'
import logo from '../../Images/Logo.png'
import {FaFacebook,FaGithub ,FaLinkedin} from 'react-icons/fa'
function Footer() {
  return (
    <footer
    className='bg-[#00585E] font-winky'
    >
      <div className='md:grid grid-cols-2 grid-rows-1   md:gap-6  h-auto w-full mx-auto'>
        <div className=' text-white px-4 flex items-center justify-between'>
          <div>
                    <img src={logo} alt="Image" className="w-16 h-16 " />
                  </div>
           <h1 className=''>Saugat Rana</h1>
{/*
            <p className='text-sm'>Passionate about building high-quality web and mobile applications. Let's collaborate and create something amazing!</p> */}
        </div>
   
       
        
         
        <div className=' flex items-center justify-between px-6 w-[50%] mx-auto py-3'>
        <div className='text-white hover:text-gray-500'>
        <FaFacebook />
        </div>
        <div className='text-white hover:text-gray-500'>
          <FaGithub/>
        </div>
        <div className='text-white hover:text-gray-500'>
          <FaLinkedin/>
        </div>

        </div>
        
        
        
        
      </div>
      <div>
        
        <p className='text-center text-white text-lg'>© 2025 Saugat Rana. All rights reserved.</p>
      </div>
      

    </footer>
  )
}

export default Footer