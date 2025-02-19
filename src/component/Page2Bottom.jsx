import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page2Bottom = () => {
      useGSAP(function(){
    gsap.to('#img',{
      rotate: 360,
      duration:3,
      repeat:-1,
      ease:'linear',
      delay:3
    })

    gsap.from('#img', {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger:0.5,
      delay:3
    })
  })
  return ( 
      <div className=" md:fixed absolute md:bottom-10 md:right-10   bottom-96  gap-3 flex flex-col z-99">
        <img id="img" 
          src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png"
          alt=""
        />
        <img id="img"
          src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png"
          alt=""
        />
      </div> 
  )
}

export default Page2Bottom
