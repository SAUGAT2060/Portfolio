import React from 'react'
import logo from '../../Images/STEM.png'
import logoo from '../../Images/ILAC.png'

function Experience() {
  return (
    <div 
    id='Experience'
    className='bg-gradient-to-br from-[#00585E] to-[#95ebd4] font-winky'>
      <div className='text-center py-7'>
        <h1 className='text-5xl font-semibold text-white text-shadow-sm text-shadow-black'>Experience</h1>
      </div>

      {/* STEM CANADA Experience */}
      <div className='px-6 py-10 text-white'>
        <div className='flex items-center justify-between flex-wrap gap-4'>
          <h2 className='text-2xl font-semibold text-shadow-black text-shadow-md'>
            Full Stack Web Developer - STEM CANADA
          </h2>
          <img src={logo} alt="STEM Canada Logo" className="h-20" />
        </div>
        <p className='mt-4 text-shadow-black text-shadow-md'>
          Worked on the Medical Science Institute website as a content editor and developer, using WordPress, HTML, CSS, JavaScript, and React. Focused on responsive design, content updates, and improving UI/UX across pages.
        </p>
      </div>

      {/* ILAC Experience */}
      <div className='px-6 py-10 text-white'>
        <div className='flex items-center justify-between flex-wrap gap-4'>
          <h2 className='text-2xl font-semibold text-shadow-black text-shadow-md'>
            Computer Programming Student Tutor - ILAC@CANADA
          </h2>
          <img src={logoo} alt="ILAC Logo" className='h-20' />
        </div>
        <p className='mt-4 text-shadow-black text-shadow-md'>
          Assisted peers in understanding core programming concepts, including Java, JavaScript, PHP, Python, and HTML. Helped students during lab sessions, provided one-on-one support, and guided them through debugging and project completion.
        </p>
      </div>
    </div>
  )
}

export default Experience
