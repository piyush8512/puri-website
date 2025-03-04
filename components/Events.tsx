import React from 'react'

function Events() {
  return (
    <div className='h-[130vh] relative flex justify-end items-center bg-cover bg-center bg-no-repeat event-bg w-full p-5 gap-5'>
      <div className='bg-cover bg-center bg-no-repeat event-red w-[23vw] h-[52vh] mb-30 flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold text-[#FFFCF5]'>Agents of Change:</h1>
        <p className='px-16 py-5 text-lg font-mediium text-[#FFFCF5] text-center '>Role of Writers as Social Commentators and Activists</p>
      </div>
      <div className='bg-cover bg-center bg-no-repeat event-blue w-[23vw] h-[52vh] mb-30 flex flex-col justify-center items-center text-[#FFFCF5]'>
        <h1 className='text-2xl font-bold'>Unveiling the Past:</h1>
        <p className='px-16 py-5 text-lg font-mediium text-[#FFFCF5] text-center'>The Craft and Challenges of Indian History Writing</p>
      </div>
    </div>
  )
}

export default Events