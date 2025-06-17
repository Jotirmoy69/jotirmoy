import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from "gsap/all";
const Page7 = () => {
    useGSAP(function(){
        gsap.registerPlugin(ScrollTrigger);
        gsap.from('.right-fit', {
            x: -200,
            stagger: 0.5,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".right-fit",
                start: "top 90%",
                end: "top -270%",
                // scrub: 2,
              }
        })
        gsap.from('.Page77', {
            x: 200,
            stagger: 0.1,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".Page77",
                start: "top 90%",
                end: "top -270%",
                // scrub: 2,
              }
        })
    })
  return (
    <div className='md:h-[140vh] overflow-hidden h-[210vh] bg-white p-5'>
        <div  className='h-full shadow-lg shadow-black w-full rounded-2xl bg-cover p-5 bg-black flex flex-col md:flex-row'>
            <div className='h-full md:w-[40%] w-full  flex flex-col justify-between p-0 md:p-10'>
                <div>
                    <h1 className="md:text-[15vw] text-[50vw] md:leading-[14vw] leading-[50vw] text-gray-500 font-[anzo5] ml-3 right-fit" >RIGHT</h1>
                    <h1 className="md:text-[15vw] text-[50vw] md:leading-[14vw] leading-[50vw] font-[anzo5] right-fit" >FIT</h1>
                </div>
                <div className='md:block hidden' >
                    <h4 className='font-[anzo3] right-fit' >SOUNDS GOOD?</h4>
                    <h1 className='font-[anzo3] right-fit' >THEN PLEASE <span className='font-[anzo4]'>EMAIL ME</span></h1>

                </div>
            </div>
            <div className='h-full md:w-[60%] w-full flex flex-col justify-evenly gap-8 md:p-10 p-0'>
                <div className=' -200'>
                    <h1 className="font-[anzo3] Page77" >PERSONALITY</h1>
                    <p className='font-[anzo2] Page77'>Business relationships build on trust and compassion vs how can I get more for less +/-</p>
                </div>
                <div className=' -300'>
                    <h1 className="font-[anzo3] Page77" >APPROACH</h1>
                    <p className='font-[anzo2] Page77'>Full dive into personality, goals and objectives with transparency of work process vs template and unmanageable office routine +/-</p>
                </div>
                <div className=' -400'>
                    <h1 className="font-[anzo3] Page77" >DESIGN</h1>
                    <p className='font-[anzo2] Page77'>Design that is actually functional and helps to achieve results is design that works +/-</p>
                </div>
                <div className=' -500'>
                    <h1 className="font-[anzo3] Page77" >FOCUS</h1>
                    <p className='font-[anzo2] Page77'>How can I help and what can I do solve your problem or objective vs how can I sell you more +/-</p>
                </div>
                <div className=' -600'>
                    <h1 className="font-[anzo3] Page77" >FIT</h1>
                    <p className='font-[anzo2] Page77'>The perfect suit is the one fits you vs the one you can fit in. Choose wisely you are investing in yourself! +/-</p>
                </div>
                <div className=' -700'>
                    <h1 className="font-[anzo3] Page77" >CORE VALUES</h1>
                    <p className='font-[anzo2] Page77'>Time, trust and experience are resources we can not buy, yet we are sharing them and exchange +/-</p>
                </div>
                <div className=' -800'>
                    <h1 className="font-[anzo3] Page77" >TO CONSIDER</h1>
                    <p className='font-[anzo2] Page77'>Your brand, your personal identity is the reflection of your passion and goals on your future; your first online impression matters +/-</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Page7
