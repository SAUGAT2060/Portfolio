import React from 'react'
import logo from '../../Images/Logo.png'
function Home() {
  return (
    <>
    <div className='flex'>
       <h1>Hello, I am Saugat Rana and I am a Software Developer</h1>
       <div>
        <img src={logo} alt="" />
        <div className='flex justify-evenly'> 
        <button>Connect with me </button>
        <button>My Resume</button>
        </div>
        
       </div>
    

    </div>
    
  </>)
}

export default Home