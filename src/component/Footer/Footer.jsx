import React from 'react'
import logo from '../../Images/Logo.png'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-scroll'

function Footer() {
  return (
    <footer className='bg-[#00585E] font-winky'>
      <div className='md:grid grid-cols-2 grid-rows-1 md:gap-6 h-auto w-full mx-auto'>
        <div className='text-white px-4 flex items-center justify-between'>
          <div>
            <Link to="Home" smooth={true} duration={500} className="cursor-pointer">
              <img src={logo} alt="Logo" className="w-16 h-16" />
            </Link>
          </div>
          <h1>Saugat Rana</h1>
        </div>

       
        <div className='flex items-center justify-between px-6 w-[50%] mx-auto py-3'>
          <a
            href="https://www.facebook.com/saugat.rana.5437/"
            target="_blank"
            rel="noopener noreferrer"
            className='text-white hover:text-gray-500'
          >
            <FaFacebook />
          </a>

          <a
            href="https://github.com/SAUGAT2060"
            target="_blank"
            rel="noopener noreferrer"
            className='text-white hover:text-gray-500'
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/saugatrana/"
            target="_blank"
            rel="noopener noreferrer"
            className='text-white hover:text-gray-500'
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div>
        <p className='text-center text-white text-lg'>© 2025 Saugat Rana. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
