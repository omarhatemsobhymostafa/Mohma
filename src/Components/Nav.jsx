import React from "react";

import Logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="h-24 md:flex-row flex-col w-full px-6 hidden md:flex items-center  bg-[#75b8b2]  ">
      <Link className="h-5/6 ml-16" to={'/'}>
        <img src={Logo} alt="" className="w-full h-full" />
      
      </Link>

      <div
        className="list  flex-wrap justify-center items-center gap-3 text-black font-bold
                sm:gap-4 sm:justify-center
                flex md:gap-6 md:justify-start
                shadow-md
                px-5 py-2 rounded-lg
                transition-all duration-300 ease-in-out
                hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)]
                "
      >
        <Link to="/HamlPart1" className="bg-white rounded-xl px-4 py-2 border-2 hover:scale-110 hover:translate-y-[-3px] transition-all ">
          الحمل
        </Link>
        <button type="button" className="bg-white rounded-xl px-4 py-2  text-center border-2 hover:scale-110 hover:translate-y-[-3px] transition-all ">
          النمو التطور
          <span className="bg-[#75b8b2] mx-3 text-white rounded-md px-3"> قريبا   </span>
        </button>
        <button type="button" className="bg-white rounded-xl px-4 py-2 border-2 hover:scale-110 hover:translate-y-[-3px] transition-all ">
          التربية الاجابية
          <span className="bg-[#75b8b2] mx-3 text-white rounded-md px-3"> قريبا   </span>

        </button>
        <button type="button" className="bg-white rounded-xl px-4 py-2 border-2 hover:scale-110 hover:translate-y-[-3px] transition-all ">
          كورسات
          <span className="bg-[#75b8b2] mx-3 text-white rounded-md px-3"> قريبا   </span>

        </button>
        <button type="button" className="bg-white rounded-xl px-4 py-2 border-2 hover:scale-110 hover:translate-y-[-3px] transition-all ">
          ماذا تشتري
          <span className="bg-[#75b8b2] mx-3 text-white rounded-md px-3"> قريبا   </span>

        </button>
        <button type="button" className="bg-white rounded-xl px-4 py-2 border-2 hover:scale-110 hover:translate-y-[-3px] transition-all ">
          خدمات
          <span className="bg-[#75b8b2] mx-3 text-white rounded-md px-3"> قريبا   </span>

        </button>

      </div>
    </nav>
  );
}
