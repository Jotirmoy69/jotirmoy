import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";
const Page11 = () => {
  useGSAP(function () {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".how", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".how",
        start: "top 60%",
        end: "top -270%",
        // scrub: 2,
      },
    });

    gsap.from(".help", {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".help",
        start: "top 60%",
        end: "top -270%",
        // scrub: 2,
      },
    });
    gsap.from(".card1", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".card1",
        start: "top 70%",
        end: "top -270%",
        // scrub: 2,
      },
    });
    gsap.from(".card2", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".card2",
        start: "top 70%",
        end: "top -270%",
        // scrub: 2,
      },
    });
    gsap.from(".card3", {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".card3",
        start: "top 70%",
        end: "top -270%",
        // scrub: 2,
      },
    });
  });
  return (
    <div className="  bg-white px-5 overflow-hidden">
      <div className='h-full shadow-lg  shadow-black w-full rounded-2xl bg-cover p-8 md:p-14 bg-black  bg-[url("/triangle.png")]'>
        <div className=" flex md:flex-row flex-col mb-20 h-[40%] md:h-[60%]">
          <div className="w-1/2 flex flex-row md:gap-0 gap-7 md:flex-col flex-start">
            <h1 className="md:text-[19vw] text-[30vw] leading-[30vw] md:leading-[16vw] font-[anzo5] text-gray-500 how">
              HOW
            </h1>
            <h1 className="md:text-[19vw] text-[30vw] leading-[30vw] md:leading-[16vw] font-[anzo5] how">CAN</h1>
          </div>
          <div className="w-1/2 flex flex-row md:flex-col  items-end">
            <h1 className="md:text-[19vw] text-[30vw] leading-[30vw] md:leading-[16vw] font-[anzo5] help">I HELP</h1>
            <h1 className="md:text-[19vw] text-[30vw] leading-[30vw] md:leading-[16vw] font-[anzo5] help">YOU</h1>
          </div>
        </div>
        <div className=" h-[20%] md:h-[40%] flex md:flex-row flex-col">
          <div className="  h-full w-full md:w-1/3 card1">
            <div className="flex flex-col  w-full    h-[85%] gap-7 p-0 md:p-5">
                <h2 className="text-xl font-[anzo1]"><span className="text-gray-400 font-[anzo2]">I am a self-taught web and brand designer with a passion for creating unique and timeless</span> masterpieces for ambitious professionals, entrepreneurs, artists, and boutique businesses. </h2>
                <h2 className="text-xl font-[anzo2] md:block hidden">Bespoke Freelance for agencies.</h2>
            </div>
            <div className="flex w-full    h-[30%] gap-7 card1">
                <img className="h-16" src="https://static.wixstatic.com/media/f1c650_67833facdc7a47d5aae7870d4fb7fc3e~mv2.png/v1/fill/w_122,h_122,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SUN.png" alt="" />
                <h1 className="text-7xl font-[anzo5]">DESIGN</h1>
            </div>
          </div>
          <div className="  h-full w-full md:mt-0 mt-40 md:w-1/3 card2">
            <div className="flex flex-col  w-full    h-[85%] gap-7 p-0 md:p-5">
                <h2 className="text-xl font-[anzo2]"><span className="text-gray-400 font-[anzo2] ">With a background in strategic marketing and acknowledged expertise in web development,</span> I aim to minimize my client&apos;s resources spent on macro and micro-management, marketing research, and hiring a whole team of a larger agency. </h2> 
            </div>
            <div className="flex w-full    h-[30%] gap-7 card2">
                <img className="h-16" src="https://static.wixstatic.com/media/f1c650_027515148725478cbb3a91eca452cabf~mv2.png/v1/fill/w_118,h_118,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EARTH.png" alt="" />
                <h1 className="text-7xl font-[anzo5]">DEVELOPMET</h1>
            </div>
          </div>
          <div className="  h-full w-full mt-40 md:mt-0 md:w-1/3 card3">
            <div className="flex flex-col  w-full    h-[85%] gap-7 p-0 md:p-5">
                <h2 className="text-xl font-[anzo2]">My mission is to drive exceptional growth for my clients by increasing their brand appearance,<span className="text-gray-400 font-[anzo2]"> defining their identity, and engaging customers through captivating black-and-white aesthetics with a modern, luxurious, and minimalistic touch. </span></h2> 
            </div>
            <div className="flex w-full    h-[30%] gap-7 card3">
                <img className="h-16" src="https://static.wixstatic.com/media/f1c650_b0000fd9a706421aa0ea84da62ae3354~mv2.png/v1/fill/w_118,h_118,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/START%20UP.png" alt=""/>
                <h1 className="text-7xl font-[anzo5]">BRANDING</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page11;
