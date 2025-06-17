import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";

const Page13 = () => {
  useGSAP(function () {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".footer", {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".footer",
        start: "top 90%",
        end: "top -270%",
        // scrub: 2,
      },
    })

  });

  return (
    <div id="ending" className="min-h-screen overflow-hidden p-5 bg-white relative">
      <div className='ending shadow-lg shadow-black w-full rounded-2xl bg-cover md:pt-16 p-5  md:px-16 bg-[url("/bg-2.jpg")]'>
        <div className="h-[85%] flex   md:flex-row flex-col bg- -300 w-full">
          <div className="md:w-[40%] w-full  ">
            <div className="md:py-0 py-10">
              <h1 className="font-[anzo5] md:text-[15vw] text-[40vw] leading-[39vw] md:leading-[16vw] footer">
                GOT <span className="text-gray-500 font-[anzo5]">AN</span>
              </h1>
              <h1 className="font-[anzo5] md:text-[15vw] text-[40vw] leading-[39vw] md:leading-[16vw]  footer">IDEA ?</h1>
            </div>
          </div>
          <div className="md:w-[60%] w-full flex md:flex-row flex-col items-center py-10 md:py-0">
            <div className="h-28 flex md:flex-row flex-col ">
                <img className=" h-28 md:block hidden "  src="https://static.wixstatic.com/media/f1c650_7a84fb38cb2d4bebb8b34004f66d4c3d~mv2.png/v1/fill/w_182,h_182,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/World%20Contact.png" alt="" />
                <div className="h-full w-0.5 md:block hidden bg-gray-400 mx-10 "></div>
                <div className="h-full flex flex-col justify-around">
                    <h1 className=" footer">SERVICE</h1>
                    <h1 className="font-[anzo1] footer">I CAN COME TO WHEREVER YOU ARE.</h1>
                    <h1 className=" footer">+8801737488641</h1>
                </div>
            </div>
          </div>
        </div>
        <div className=" py-5 h-[30%] md:h-[0%] w-full bg- -400 flex flex-col gap-10 md:flex-row  items-center justify-between">
          <div>
            <h1 className="font-[anzo3] footer">
              IT IS NOT JUST ABOUT SOLVING THE PROBLEM
            </h1>
            <h1 className="font-[anzo3] footer">
              BUT{" "}
              <span className="font-[anzo1] text-xs md:text-sm">OFFERING THE TRANSFORMATION!</span>
            </h1>
          </div>
          <h1 className="font-semibold footer">© 2024 Jotirmoy™</h1>
        </div>
      </div>
    </div>
  );
};

export default Page13;
