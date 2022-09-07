import React from "react";
import Link from 'next/link'
import Image from "next/image";
import { useRouter } from "next/router";
import { useUser } from '@auth0/nextjs-auth0';

const sanityIoImageLoader = ({ src, width, quality }) => {
  return `https://i.imgur.com/Y3QF08D.png`;
};


function Header() {
  const router = useRouter();
  const { user, error, isLoading } = useUser();
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;

  return (
    <div className="relative px-24 xs:px-8 py-9 flex flex-wrap items-center justify-between mb-3">
      <Link href="/">
        <Image
          loader={sanityIoImageLoader}
          src="image-src"
          alt="GamiDoc"
          width={119}
          height={20}
        />
      </Link>
      <div className="flex flex-row gap-5" id="button">
        <button
          className="py-4 inline-block px-8 xs:px-4 xs:py-2 
                     bg-yellow-gamy text-white font-medium text-xs leading-tight 
                     uppercase rounded-full shadow-md  hover:bg-yellow-600 hover:shadow-lg
                     focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 
                     active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
        // onClick={() => router.push("/signup")}
        >
          <a href="/api/auth/login">
            SIGN UP
          </a>
        </button>
        
      </div>
    </div>
  );
}

export default Header;
