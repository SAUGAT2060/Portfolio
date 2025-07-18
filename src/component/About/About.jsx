import React from 'react'

function About() {
  return (
    <div  
    id='About'
    className='bg-gradient-to-tr from-[#95ebd4] to-[#00585E] font-winky'>
      <div className='py-3'>
        <h1 className='text-white text-center font-semibold text-shadow-sm text-shadow-black text-5xl'>About</h1>
      </div>
      <div className='md:flex md:justify-center md:gap-10 px-6 py-10 flex-col md:flex-row'>
        
        <div className='md:w-1/2 text-white text-shadow-md text-shadow-black text-center md:text-left mb-6 md:mb-0'>
          <p>
            I’m a passionate Computer Programming student based in Canada with hands-on experience in full-stack development. I’ve worked on real-world projects using HTML, CSS, JavaScript, React, and WordPress, building responsive websites with clean UI/UX.
          </p>
        </div>

        <div className='md:w-1/2 text-white text-shadow-md text-shadow-black text-center md:text-left'>
          <p>
            Beyond development, I’ve served as a programming tutor, helping peers strengthen their skills in Java, Python, PHP, and web technologies. I’m constantly learning, building, and striving to grow as a developer to one day contribute to global tech companies like Google or SpaceX.
          </p>
        </div>

      </div>
    </div>
  )
}

export default About
