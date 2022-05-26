import React from "react";
import logo from "../Logo.png"

function Header() {
  return (
   <div className=" relative px-24 py-9 flex flex-wrap items-center justify-between mb-3">
        <img src={logo} alt="logo" />
        <div className="flex flex-row gap-5" id="button">
            <button className="py-4 inline-block px-8 bg-yellow-gamy text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">SIGN UP</button>
            <button className="py-4 inline-block px-8 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-gray-600 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">SIGN IN</button>
        </div>
   </div>
  );
}

export default Header;
