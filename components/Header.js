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
        {(!user) ?
          <button
            className="py-4 inline-block px-8 xs:px-4 xs:py-2 
                     bg-yellow-gamy text-white font-medium text-xs leading-tight 
                     uppercase rounded-full shadow-md  hover:bg-yellow-600 hover:shadow-lg
                     focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 
                     active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
          >
            <Link href="/api/auth/login">
              Login
            </Link>
          </button> :
          <div className="rounded-2xl justify-betwenn m-2 flex items-center bg-yellow-gamy p-2 gap-2 font-xl">
            <Image src={user.picture} width={25} height={25} className="rounded-full" />
            {user.name}
            <a href="/api/auth/logout">Logout</a>
          </div>
        }
      </div>
    </div>
  );
}

export default Header;
