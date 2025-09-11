'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";

const Header = () => {

  const [firstVisit, setfirstVisit] = useState(true)
  useGSAP(function () {
    gsap.from(".header", {
      opacity: 0,
      x: 100,
      duration: 1,
      stagger: 0.5,
      delay: firstVisit ? 3 : 0,
    });
    gsap.from(".logologo", {
      opacity: 0,
      x: -100,
      duration: 1,
      stagger: 0.5,
      delay: firstVisit ? 3 : 0,
    });

    setfirstVisit(false)
  });
  return (
    <div className="bg-transparent backdrop-blur- fixed top-0 w-full h-20  rounded-b-9xl  px-10  flex item-center justify-between z-10">
      <img src="/icon.png" className="mt-5 logologo" alt="" />
      <div className="flex items-end flex-row gap-2" >
        {/* <a
          href="#ending"
          className=" cursor-pointer header md:text-sm text-xs border-4 border-gray-200 font-bold transition-all duration-300 hover:bg-white hover:text-black font-[anzo2] px-6 py-2 rounded-full bg-black  text-white"
        >
          Projects
        </a> */}

        <Link href="/menu">
          <IoMenu className="md:text-5xl text-5xl bgk text-gray-300 header" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
