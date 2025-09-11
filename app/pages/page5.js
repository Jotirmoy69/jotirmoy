import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
gsap.registerPlugin(ScrollTrigger);

const Page5 = () => {

    
  useGSAP(() => {
    console.log('GSAP animation triggered!');
    console.log(document.querySelector(".str1"));
    
    
    gsap.from(".str1", {
      transform: "rotateX(-45deg)",
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".str1",
        start: "top 90%",
        end: "top -270%",
        // scrub: 2,
      }
    });

    gsap.from(".str2", {
      transform: "rotateX(-45deg)",
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".str2",
        start: "top 90%",
        end: "top -270%",
        // scrub: 2,
      }
    });

    gsap.from(".str3", {
      transform: "rotateX(-45deg)",
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".str3",
        start: "top 90%",
        end: "top -270%",
        // scrub: 2,
      }
    });

    gsap.from(".str4", {
      transform: "rotateX(-45deg)",
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".str4",
        start: "top 90%",
        end: "top -270%",
        // scrub: 2,
      }
    });

    gsap.from(".str5", {
      transform: "rotateX(-45deg)",
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".str5",
        start: "top 90%",
        end: "top -270%",
        // scrub: 2,
      }
    });

    gsap.from(".str6", {
      transform: "rotateX(-45deg)",
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".str6",
        start: "top 90%",
        end: "top -270%",
        // scrub: 2,
      }
    });
  });
  return (
    <div className="text-center py-20   bg-white text-black h1-parent overflow-hidden">
      <div className="h1-perspective str1">
        <h1 className="md:text-[44vw] text-[40vw]  font-[anzo5] leading-[35vw]">HELPING</h1>
      </div>
      <div className="h1-perspective str2">
        <h1 className="md:text-[44vw] text-[40vw] text-[#9B9B9B]  font-[anzo5] leading-[35vw]">MY</h1>
      </div>
      <div className="h1-perspective str3">
        <h1 className="md:text-[44vw] text-[40vw]  font-[anzo5] leading-[35vw]">CLIENTS</h1>
      </div>
      <div className="h1-perspective str4">
        <h1 className="md:text-[44vw] text-[40vw]  font-[anzo5] leading-[35vw]">TO ACHIEVE</h1>
      </div>
      <div className="h1-perspective str5">
        <h1 className="md:text-[44vw] text-[40vw] text-[#9B9B9B] font-[anzo5] leading-[35vw]">THEIR</h1>
      </div>
      <div className="h1-perspective str6">
        <h1 className="md:text-[44vw] text-[40vw]  font-[anzo5] leading-[35vw]">DREAMS!!</h1>
      </div>
    </div>
  )
}

export default Page5
