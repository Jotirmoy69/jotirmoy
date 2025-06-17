'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {

  useGSAP(() => {
    gsap.from(".st1", {
      transform: "rotateX(-45deg)",
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".st1",
        start: "top 90%",
        end: "top -270%",
        // scrub: 2,
      }
    });

    gsap.from(".st2", {
      transform: "rotateX(-45deg)",
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".st2",
        start: "top 90%",
        end: "top -270%",
        // scrub: 2,
      }
    });

    gsap.from(".st33", {
      transform: "rotateX(-45deg)",
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".st33",
        start: "top 90%",
        end: "top -270%",
        // scrub: 2,
      }
    });

    gsap.from(".st4", {
      transform: "rotateX(-45deg)",
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".st4",
        start: "top 90%",
        end: "top -270%",
        // scrub: 2,
      }
    });

    gsap.from(".st5", {
      transform: "rotateX(-45deg)",
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".st5",
        start: "top 90%",
        end: "top -270%",
        // scrub: 2,
      }
    });

    gsap.from(".st6", {
      transform: "rotateX(-45deg)",
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".st6",
        start: "top 90%",
        end: "top -270%",
        // scrub: 2,
      }
    });
  });

  return (
    <div className="text-center bg-white  py-20 mt-32 text-black h1-parent overflow-hidden">
      <div className="h1-perspective st1">
        <h1 className="md:text-[44vw] text-[40vw]  font-[anzo5] leading-[35vw]">IMPACTFUL</h1>
      </div>
      <div className="h1-perspective st2 ">
        <h1 className="md:text-[44vw] text-[40vw]  font-[anzo5] leading-[35vw]">DESIGN</h1>
      </div>
      <div className="h1-perspective st33">
        <h1 className="md:text-[44vw] text-[40vw]  font-[anzo5] leading-[35vw]">IS THE</h1>
      </div>
      <div className="h1-perspective st4">
        <h1 className="md:text-[44vw] text-[40vw]  font-[anzo5] leading-[35vw]">DESIGN</h1>
      </div>
      <div className="h1-perspective st5">
        <h1 className="md:text-[44vw] text-[40vw]  font-[anzo5] leading-[35vw]">THAT</h1>
      </div>
      <div className="h1-perspective st6">
        <h1 className="md:text-[44vw] text-[40vw]  font-[anzo5] leading-[35vw]">WORKS!</h1>
      </div>
    </div>
  );
};

export default Page2;
 