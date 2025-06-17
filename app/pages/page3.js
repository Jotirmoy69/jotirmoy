import React from 'react'

const Page3 = () => {
  return (
    <div className='md:h-screen h-60 bg-white  overflow-hidden  flex justify-center items-center relative border-t-2 border-black'>
        <img className='absolute w-60 md:w-auto overflow-x-hidden' src="/try.png" alt="" />
       <video src="/file.mp4" className='object-cover w-32 md:w-auto overflow-x-hidden' muted autoPlay loop></video>
        <div className="md:block  hidden h-0.5 w-3/5 top-[14%] absolute z-[-10]  bg-gray-700"></div>       
        <div className="md:block hidden h-0.5 w-2/3 top-[50%] absolute z-[-10] bg-gray-700"></div>
        <div className="md:block hidden h-0.5 w-4/5 top-[83%] absolute z-[-10] bg-gray-700"></div>
    </div>
  )
}

export default Page3
