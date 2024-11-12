import React from 'react'

const Sec1 = () => {
  return (
    <div>
      <div className='h-auto flex flex-wrap flex-col items-center text-center p-10'>
        <div className='w-full h-auto flex flex-wrap flex-col items-center text-center p-10'>
            <p className='text-indigo-700'> Some text</p>
            <div className='w-36 border-b-4 border-yellow-500 rounded-2xl mt-2 md:3'></div>
            <div className='w-full flex flex-wrap justify-evenly'>
                <div className='w-46 flex flex-col items-center mb-12 '>
                    <img className='h-44 w-44' src="" alt="" />
                    <p className='text-3xl font-semibold text-gray-500'>600+</p>
                    <p className='text-3xl font-semibold text-gray-500'>Different courses</p>
                </div>
                <div className='w-46 flex flex-col items-center mb-12 '>
                    <img className='h-44 w-44' src="" alt="" />
                    <p className='text-3xl font-semibold text-gray-500'>600+</p>
                    <p className='text-3xl font-semibold text-gray-500'>Different courses</p>
                </div>
                <div className='w-46 flex flex-col items-center mb-12 '>
                    <img className='h-44 w-44' src="" alt="" />
                    <p className='text-3xl font-semibold text-gray-500'>600+</p>
                    <p className='text-3xl font-semibold text-gray-500'>Different courses</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sec1
