'use client'
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Page1Bottom from "../component/Page1Bottom"; 
import Page2Bottom from '../component/Page2Bottom'

const Page = () => {
  const [Xval, setXval] = useState(0);
  const [Yval, setYval] = useState(0);
  const tiltref = useRef(null);

  const mouseMoving = (e) => {
    const { clientX, clientY } = e;
    const rect = tiltref.current.getBoundingClientRect();
    const X = (clientX - rect.x - rect.width / 2) / 40;
    const Y = -(clientY - rect.y - rect.height / 2) / 10;

    setXval(X);
    setYval(Y);

    console.log(`rotateX(${Y}deg) rotateY(${X}deg)`);
  };

  useEffect(() => {
    if (tiltref.current) {
      gsap.to(tiltref.current, {
        transform: `rotateX(${Yval}deg) rotateY(${Xval}deg)`,
        duration: 2,
        ease: "easeInOut",
      });
    }
  }, [Xval, Yval]);

  return (
    <div onMouseMove={mouseMoving} className="h-screen p-3  overflow-hidden bg-white">
      <div
        id="page-in"
        className='h-full shadow-lg shadow-black w-full rounded-2xl bg-cover p-5 bg-[url("/bg1.1.jpg")] sm:bg-[url("/bg.jpg")]'
      >
        <div
          id="tiltDiv"
          ref={tiltref}
          className="w-full h-full flex flex-col items-start md:justify-center ml-0 md:ml-10 justify-end"
        >
          <div className="flex flex-col mb-40 md:mb-0">
            <h1 className="md:text-5xl text-4xl font-[anzo1]">
              I am <span className="font-[anzo1] text-black">DARK MODE</span>™
            </h1>
            <h1 className="md:text-8xl text-6xl font-[anzo1]">Developer</h1>
            <h1 className="md:text-5xl text-4xl font-[anzo1]">To Hire</h1>
          </div>
        </div> 
        <Page1Bottom /> 
       <Page2Bottom /> 
        
      </div>
      <h3 className="text-center text-xs md:text-xl p-10 my-10 font-[anzo2] text-zinc-600">
      ©  jotirmoy 2025 | developed | design inspired by anzo.studio</h3>
    </div>
  );
};

export default Page;
