
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
        src='/branta2.png'
        className='rounded-full md:w-20 w-16'
          alt=""
        />
        <img id="img"
        src='/branta.png'
        className='rounded-full md:w-20 w-16'
          alt=""
        />
      </div> 
  )
}

export default Page2Bottom
