import { useState, Fragment } from 'react'
import Link from 'next/link'
import Image from "next/image";
import { useRouter } from "next/router";
import { useUser } from '@auth0/nextjs-auth0';
// import HeaderSidebar from "./HeaderSideBar"
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/outline'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const sanityIoImageLoader = () => {
  return `https://i.imgur.com/Y3QF08D.png`;
};

export default function Header() {
  const router = useRouter();
  const { user, error, isLoading } = useUser();
  const [open, setOpen] = useState(true)

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
                     uppercase rounded-full shadow-md  hover:bg-gray-gamy hover:shadow-lg
                     focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 
                     active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
          >
            <Link href="/api/auth/login">
              <a>
                Login
              </a>
            </Link>
          </button> :
          <div className="flex items-center  ">
            <div className="flex justify-end w-max items-center gap-10 font-medium">
              <div
                className=" text-center text-lg font-semibold text-black font-sans px-3 py-2 ring ring-transparent outline-none hover:underline hover:font-semibold"
                onClick={() => router.push({ pathname: "/feed", })}
              >
                Review
                {/* {user.org_id} */}
              </div>
              <div
                onClick={() => router.push({ pathname: "/yourReviews" })}
                className=" text-center text-lg font-semibold text-black font-sans px-3 py-2 ring ring-transparent outline-none hover:underline hover:font-semibold"
              >
                Your Reviews
              </div>
              <div
                onClick={() => router.push({ pathname: "/display", query: { me: 1 } })}
                className=" text-center text-lg font-semibold text-black font-sans px-3 py-2 ring ring-transparent outline-none hover:underline hover:font-semibold"
              >
                Your Papers
              </div>
            </div>
            <div className="w-max rounded-full justify-between m-2 flex items-center p-2 gap-2 font-xl  bg-yellow-gamy">
              <Image alt="pfp" src={user.picture} width={25} height={25} className="rounded-full" />
              <div className="text-gray-gamy font-sans font-semibold">
                {user.name}
              </div>
              <Link href="/api/auth/logout" passHref>
                <a ><ExitToAppIcon className=" ease-in-out hover:text-white text-gray-gamy" /></a>
              </Link>
            </div>
          </div>
        }
      </div >
    </div >
  );
}

// <HeaderSidebar open={open} setOpen={setOpen} user={user} router={router} />

