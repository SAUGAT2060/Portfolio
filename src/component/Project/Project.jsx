import React from 'react'
import Amazon from '../../Images/AMAZON.png'
import Cat from '../../Images/Cat.jpg'
import Blog from '../../Images/BLOG.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Project() {
  return (
    <div className='items-center font-winky  bg-linear-to-br from-[#00585E] to-[#95ebd4] px-10 text-center'>
      <h1 className='text-5xl font-semibold text-white text-shadow-sm text-shadow-black py-10'>Projects</h1>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 py-10'>
      <div className='border border-white  rounded-3xl shadow-black shadow-sm px-3 py-3 bg-[#00585E]'>
        <img src={Amazon} alt="Amazon"  className='h-60 rounded-2xl m-auto my-5'/>
        <div>
          <h1 className='text-white text-shadow-sm text-shadow-black py-3'>Amazon Clone</h1>
          <button className='rounded-3xl bg-[#00585E] px-5 py-3 border border-white text-white flex items-center gap-2 m-auto'>
  <FontAwesomeIcon icon={faGithub} />
  Github
</button>
        </div>
       
      </div>
       <div className='border border-white  rounded-3xl shadow-black shadow-sm px-3 py-3 bg-[#00585E]'>
        <img src={Cat} alt="Cat"  className='h-60 m-auto rounded-2xl my-5'/>
        <div>
          <h1 className='text-white text-shadow-sm text-shadow-black py-3'>Cat Picture App</h1>
         
<button className='rounded-3xl bg-[#00585E] px-5 py-3 border border-white text-white flex items-center gap-2 m-auto'>
  <FontAwesomeIcon icon={faGithub} />
  Github
</button>
        </div>
       
      </div>
      <div className='border border-white  rounded-3xl shadow-black shadow-sm px-3 py-3 bg-[#00585E]'>
        <img src={Blog} alt="CaBlogt"  className='h-60 m-auto rounded-2xl my-5'/>
        <div>
          <h1 className='text-white text-shadow-sm text-shadow-black py-3'>Blogging Website </h1>
        <button className='rounded-3xl bg-[#00585E] px-5 py-3 border border-white text-white flex items-center gap-2 m-auto'>
  <FontAwesomeIcon icon={faGithub} />
  Github
</button>
        </div>
       
      </div>

      </div>
     
    </div>
  )
}

export default Project