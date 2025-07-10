import React from 'react'
import logo from '../../Images/Me.png'
function Home() {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 items-center font-winky bg-[#95ebd4]'>
      <div>
        <h1 className=' text-white md:text-center'>Hello, I am Saugat Rana </h1>
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