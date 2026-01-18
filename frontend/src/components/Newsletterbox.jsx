import React from 'react'

const Newsletterbox = () => {
  const onSubmithandler = (event) => {
    event.preventDefault();
  }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe to get 5% off</p>
      <form onSubmit={onSubmithandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input type="email" placeholder='enter your email' className='w-full sm:flex-1 outline-none' required />
        <button className='bg-black text-white px-8 py-2'>Subscribe  </button>
      </form>
    </div>
  )
}

export default Newsletterbox