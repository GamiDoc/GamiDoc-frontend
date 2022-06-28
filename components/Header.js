import React from "react";
import Link from 'next/link'
import Image from "next/image";

const sanityIoImageLoader = ({ src, width, quality }) => {
  return `https://i.imgur.com/Y3QF08D.png`;
};

function Header() {
  return (
    <div className="relative px-24 xs:px-8 py-9 flex flex-wrap items-center justify-between mb-3">
      <Link href="/">
        <Image
          loader={sanityIoImageLoader}
          src="image-src"
          alt="GamiDoc"
          width={119}
          height={34}
        />
      </Link>
      <div className="flex flex-row gap-5" id="button">
        <button className="py-4 inline-block px-8 xs:px-4 xs:py-2 bg-yellow-gamy text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
          SIGN UP
        </button>
        <button className="py-4 inline-block xs:px-4 xs:py-2 px-8 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-gray-600 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
          SIGN IN
        </button>
      </div>
    </div>
  );
}

export default Header;
