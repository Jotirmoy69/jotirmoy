'use client'
import React from 'react'
import Link from 'next/link'
const Header2 = () => {
  return (
    <div className='fixed  top-0 w-full p-16 flex justify-between z-999'>
      
    <Link href='/' className=" cursor-pointer header md:text-xl text-sm border-4 border-gray-200 font-bold transition-all duration-300 hover:bg-white hover:text-black font-[anzo2] px-4 py-2 rounded-full bg-black  text-white">
          Close
    </Link>
    </div>
  )
}

export default Header2
