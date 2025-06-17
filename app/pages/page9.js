import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";
const Page9 = () => {
  useGSAP(function () {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".gsap9", {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".gsap9",
        start: "top 90%",
        end: "top -270%",
        // scrub: 2,
      },
    });
    gsap.from(".gsap99", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".gsap99",
        start: "top 90%",
        end: "top -270%",
        // scrub: 2,
      },
    });
  })
  return (
    <div className='h-screen overflow-hidden bg-white px-5'>
      <div  className='h-full shadow-lg shadow-black w-full rounded-2xl bg-cover p-5 bg-black flex flex-col'>
        <div className="h-1/3   -500 flex flex-col ustify-center mt-5">
        <h1 className='text-center font-[anzo5] text-[27vw] md:text-[11vw] leading-[22vw] md:leading-[9vw] gsap9'>
        PERSONAL
        </h1>
        <p className='text-center font-[anzo1] text-gray-400 gsap99'>Intuition, Imagination, Discipline</p>
        </div>
        <div className="h-1/3   -600 flex flex-col ustify-center">
        <h1 className='text-center font-[anzo5] text-[27vw] md:text-[11vw] leading-[22vw] md:leading-[9vw] gsap9'>
        PROFESSIONAL
        </h1>
        <p className='text-center font-[anzo1] text-gray-400 gsap99'>Time Management, Multitasking, Creativity</p>
        </div>
        <div className="h-1/3   -700 flex flex-col ustify-center">
        <h1 className='text-center font-[anzo5] text-[27vw] md:text-[11vw] leading-[22vw] md:leading-[9vw] gsap9'> 
        ADDITIONAL
        </h1>
        <p className='text-center font-[anzo1] text-gray-400 gsap99'>3D, Animation, AI Tools</p>
        </div>
      </div>
    </div>
  )
}

export default Page9
