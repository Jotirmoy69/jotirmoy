import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Page6 = () => {
  useGSAP(function(){
    gsap.from('.about', {
      x:100,
      opacity:0,
      duration:1,
      ease:"easeOut",
      scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
        end: "top -270%",
        // markers: true,
        // scrub: 2,
      }
    })
  })
  return (
    <div className='h-screen p-5 overflow-hidden bg-white relative'>
      <div className='h-full shadow-lg shadow-black w-full rounded-2xl bg-cover relative '>
        <video src="/moon.mp4" autoPlay loop muted className='object-cover w-full rounded-2xl h-full'></video>
        <h1 className='text-[30vw] font-[anzo5] text-white absolute z-99 bottom-0 about ml-20'>ABOUT</h1>
      </div>
    </div>
  )
}

export default Page6
