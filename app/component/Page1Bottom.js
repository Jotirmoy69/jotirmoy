
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Page1Bottom = () => {
  useGSAP(() => {
    gsap.from(".p1b1", {
      opacity: 0,
      x: -100,
      duration: 1,
      stagger: 0.2,
      // ease: "power2.out",
      ease: "easeOut",
      delay: 3,
    })

    
  });
  return (
    <>
      <div className="flex     justify-between absolute bottom-10">
        <div className="flex flex-col justify-center">
          <h2 className="font-[anzo1] p1b1">WORDPRESS | WEB APPLICATION DEVELOP</h2>
          <h2 className="font-[anzo2]  p1b1">BESPOKE FREELANCE</h2>
        </div>
      </div>
      
    </>
  );
};

export default Page1Bottom;
