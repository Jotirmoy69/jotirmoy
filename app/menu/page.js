'use client'
import React from 'react'
import Header2 from '../component/Header2'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Page = () => {
  useGSAP(function(){
    gsap.from('.media', {
      duration: 1,
       opacity: 0,
        y: 100,
         stagger: 0.5
        })
  })






  const instagram = () =>{
    window.location.href="https://www.instagram.com/jotirmoy_69?igsh=MXRvOWNxd2dlZzV2"
  }

  const facebook = () =>{
    window.location.href="https://www.facebook.com/profile.php?id=100082191162158&mibextid=ZbWKwL"
  }

  const linkedin = () =>{
    window.location.href="https://www.linkedin.com/in/jotirmoy-bhowmik-70aa18321"
  }
  return (
    <>
    <div className='bg-white p-10 text-black h-screen overflow-hidden'>
    
      
      <div className='h-full shadow-lg shadow-black w-full rounded-2xl bg-cover p-5  bg-blck'>
        <div className='h-1/3 w-full  z-1 font-[anzo5] text-7xl flex items-center  md:text-9xl p-5 border-b-2 justify-center media' >
        <h1 className='font-[anzo5] text-center cursor-pointer' onClick={instagram}  >INSTAGRAM</h1>
        </div>
        <div className='h-1/3 w-full font-[anzo5] text-7xl flex items-center  md:text-9xl p-5 border-b-2 justify-center media' >
        <h1 className='font-[anzo5] text-center cursor-pointer' onClick={facebook}  >FACEBOOK</h1>
        </div>
        <div className='h-1/3 w-full font-[anzo5] text-7xl flex items-center  md:text-9xl p-5 border-b-2 justify-center media' >
        <h1 className='font-[anzo5] text-center cursor-pointer' onClick={linkedin}  >LINKEDIN</h1>
        </div>
      </div>
    </div>
    <Header2 />
    </>
  )
}

export default Page
