import React from 'react'

const navbar = () => {
  return (
    <nav className='w-full h-14 bg-indigo-200 flex justify-between items-center px-4 md:px-4'>
       <div className='text-2xl text-indigo-700 font-bold'>PW Skils</div>
       <ul className='hidden md:flex font-semibold'>
        <li className='mx-[10px] cursor-pointer'>Home</li>
        <li className='mx-[10px] cursor-pointer'>about</li>
        <li className='mx-[10px] cursor-pointer'>Contact</li>
       </ul>
       <div className='hidden md:block px-2 py-2 bg-indigo-700 text-white rounded'>Login/Signup</div>
       <div className='md:hidden text-4xl'>
        <a href="#">&#8801;</a>
       </div>
    </nav>
  )
}

export default navbar
