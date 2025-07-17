import React from 'react'

function Contact() {
  return (
   <div className='items-center font-winky bg-gradient-to-br from-[#00585E] to-[#95ebd4] px-10 text-center py-16'>
  <section className='flex justify-center items-center min-h-screen'>
    <form
      action=""
      className='max-w-[600px] w-full bg-white px-10 py-10 rounded-3xl shadow-2xl shadow-black'
    >
      <h1 className='text-5xl font-semibold text-[#00585E] drop-shadow-md pb-10'>Get in Touch</h1>

      
      <div className='mb-6 text-left'>
        <label htmlFor="name" className='block text-lg text-[#00585E] font-medium mb-2'>Full Name</label>
        <input
          type="text"
          id="name"
          placeholder='Enter your name'
          required
          className='w-full p-3 rounded-2xl border-2 border-gray-300 focus:outline-none focus:border-[#00585E]'
        />
      </div>

      
      <div className='mb-6 text-left'>
        <label htmlFor="email" className='block text-lg text-[#00585E] font-medium mb-2'>Email Address</label>
        <input
          type="email"
          id="email"
          placeholder='Enter your email'
          required
          className='w-full p-3 rounded-2xl border-2 border-gray-300 focus:outline-none focus:border-[#00585E]'
        />
      </div>

      
      <div className='mb-6 text-left'>
        <label htmlFor="message" className='block text-lg text-[#00585E] font-medium mb-2'>Your Message</label>
        <textarea
          id="message"
          placeholder='Enter your message'
          rows="5"
          required
          className='w-full p-3 rounded-2xl border-2 border-gray-300 focus:outline-none focus:border-[#00585E] resize-none'
        ></textarea>
      </div>

      
      <button
        type='submit'
        className='bg-[#00585E] text-white text-lg px-6 py-3 rounded-full shadow-md hover:bg-[#003f44] transition duration-300'
      >
        Send Message
      </button>
    </form>
  </section>
</div>

  )
}

export default Contact