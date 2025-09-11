'use client'
import { useEffect }  from 'react'
import Page from './pages/page' 
import Header from './component/Header'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import Page4 from './pages/page4'
import Page5 from './pages/page5'
import Page6 from './pages/page6'
import Page7 from './pages/page7'
import Page8 from './pages/page8'
import Page9 from './pages/page9'
import Page10 from './pages/page10'
import Page11 from './pages/page11'
import Page13 from './pages/page13'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap' 
const App = () => {
 

 useGSAP(() => { 
   gsap.to(".honey", {
     opacity: 0,
     // x: -100,
     duration: 1,
     delay: 3,
     ease: "easeOut",
   })
   gsap.to(".honey", {
     display: "none",
     delay: 4,
   })
   gsap.from(".h1 span",{
     opacity: 0,
     y: 100,
     duration: 2,
     stagger: 0.2,
     // delay: 2,
     ease: "easeOut",
   })
 });
 
 
  return (
    <>
      <div  className=' fixed-backgo croll-container overflow-x-hidden  '>
      <Header />
     <Page />
     <Page2 />
     <Page4 />
     <Page5 />
     <Page6 />
     <Page7 />
     <Page8 />
     <Page9 />
     <Page10 />
     <Page11 /> 
     <Page3 />
     <Page13/>
      <div className=' honey fixed top-0 w-full h-screen  p-2 z-999 bg-white'>
       <div className=' h-full w-full bg-black rounded-2xl flex justify-center px-5  items-center'>

       
         <h1 className='h1 text-2xl text-center '> <span className='font-[anzo4] text-center'>Unlocking</span> <span className='font-[anzo4] text-center'>creativity,</span> <span className='font-[anzo4] text-center'>in</span> <span className='font-[anzo4]'>progress</span><span>.</span><span>.</span><span>.</span></h1>

         
        </div>
      </div>
      </div>
    </>
  )
}

export default App
