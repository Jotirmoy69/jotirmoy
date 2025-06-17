import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";
const Page4 = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".gsap44", {
      y:100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".gsap44",
        start: "top 90%",
        end: "top -270%",
        // scrub: 2,
        // markers: true
      }
    });


    gsap.from(".gsap22", {
      x:-100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".gsap22",
        start: "top 90%",
        end: "top -270%",
        // scrub: 2,
      }
    });
  });
  return (
    <div className="p-8 bg-white">
      <div className='h-screen shadow-lg overflow-hidden shadow-black w-full rounded-2xl bg-cover p-5 bg-[url("/bg-2.jpg")]'>
        <div className="h-full relative ">
          <div className="h-[100%] p-5  flex flex-col md:flex-row  relative top-0">
            <div className="h-full  w-full md:w-1/2">
              <h1 className="md:text-[25vw] text-[50vw] md:leading-[19vw] leading-[50vw] text-gray-500 font-[anzo5] ml-3 gsap22">WHAT</h1>
              <h1 className="md:text-[25vw] text-[50vw] md:leading-[19vw] leading-[50vw] font-[anzo5] gsap22">I DO</h1>
            </div>
            <div className=" flex flex-col justify-around w-full md:w-1/2">
             <h1 className="md:text-3xl text-lg font-[anzo4] gsap44">I DESIGN AND DEVELOP</h1>
             <h1 className="md:text-3xl text-lg font-[anzo3] text-gray-400 gsap44">MODERN, IMPACTFUL AND LUXURIOUS</h1>
             <h1 className="md:text-3xl text-lg font-[anzo4] gsap44">websites that seamlessly bridge your goals with needs of my clients.</h1>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Page4;
