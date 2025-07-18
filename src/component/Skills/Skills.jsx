import React from 'react'
import Reactlogo from '../../Images/React.png'
import Htmllogo from '../../Images/HTML.png'
import Csslogo from '../../Images/CSS.png'
import Javalogo from '../../Images/Java.png'
import Pythonlogo from '../../Images/PYTHON.png'
import Sqllogo from '../../Images/SQL.png'
import FigmaLogo from '../../Images/FIGMA.png'
import GithubLogo from '../../Images/GITHUB.png'
import GitLogo from '../../Images/GIT.png'
import AzureLogo from '../../Images/AZURE.png'
import Wordlogo from '../../Images/WORD.png'
import Tailwindlogo from '../../Images/TAILWIND.png'
 function Skills() {
  return (
      <div className='items-center font-winky  bg-linear-to-br from-[#00585E] to-[#95ebd4] px-10'>

        <div className='text-center py-10'>
          <h1 className='text-5xl font-semibold text-white text-shadow-sm text-shadow-black'>Skills</h1>
        </div>
        <h1 className='text-3xl text-white text-shadow-sm text-shadow-black'>Programming Langugaes</h1>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2 py-10'>
           
          <div >
            <img src={Htmllogo} alt="Html" className='h-15 md:h-20'/>
          </div>
          <div >
            <img src={Csslogo} alt="Css" className='h-15 md:h-20'/>
          </div>
          <div >
            <img src={Reactlogo} alt="React" className='h-15 md:h-20'/>
          </div>
           <div >
            <img src={Tailwindlogo} alt="React" className='h-15 md:h-20'/>
          </div>
           <div >
            <img src={Javalogo} alt="Java" className='h-15 md:h-20'/>
          </div>
           <div >
            <img src={Pythonlogo} alt="React" className='h-15 md:h-20'/>
          </div>
           <div >
            <img src={Sqllogo} alt="React" className='h-15 md:h-20'/>
          </div>
        </div>
         <h1 className='text-3xl text-white text-shadow-sm text-shadow-black'>Ux/Ui Design</h1>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2 py-10'>
            <div>
            <img src={FigmaLogo} alt="Figma" className='h-15 md:h-25'/>
          </div>
          </div>
        <h1 className='text-3xl text-white text-shadow-sm text-shadow-black'>Version Control</h1>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2 py-10'>
            <div >
            <img src={GithubLogo} alt="Github" className='h-15 md:h-25'/>
          </div>
           <div >
            <img src={GitLogo} alt="Git" className='h-15 md:h-25'/>
          </div>
           <div >
            <img src={AzureLogo} alt="Azure" className='h-15 md:h-25'/>
          </div>
          </div>

            <h1 className='text-3xl text-white text-shadow-sm text-shadow-black'>Control Management System</h1>
              <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2 py-10'>
                 <div >
            <img src={Wordlogo} alt="Word" className='h-15 md:h-25'/>
          </div>
              </div>
        </div>
  )
}

export default Skills