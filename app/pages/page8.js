import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";
const Page8 = () => {
  useGSAP(function () {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".soft", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".soft",
        start: "top 90%",
        end: "top -270%",
        // scrub: 2,
      },
    });
  });
  return (
    <div className="h-[80vh] overflow-hidden  bg-white p-8 flex md:flex-row flex-col  text-black">
      <div className="h-full md:w-[30%] flex  items-center justify-center">
        <h1 className="text-7xl font-[anzo4] soft">SOFT</h1>
      </div>
      <div className="h-full md:w-[70%] flex items-center justify-center">
        <h1 className="text-[22vw] font-[anzo4] soft">SKILLS</h1>
      </div>
    </div>
  );
};

export default Page8;
