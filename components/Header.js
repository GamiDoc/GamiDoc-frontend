import { useState, Fragment } from 'react'
import Link from 'next/link'
import Image from "next/image";
import { useRouter } from "next/router";
import { useUser } from '@auth0/nextjs-auth0';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from '@heroicons/react/solid'
// import HeaderSidebar from "./HeaderSideBar"
// import { Dialog, Transition } from '@headlessui/react'
// import { XMarkIcon } from '@heroicons/react/outline'

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
          <div className="fixed top-16 w-56 text-right">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  Options
                  <ChevronDownIcon
                    className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <EditActiveIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <EditInactiveIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          Edit
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <DuplicateActiveIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <DuplicateInactiveIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          Duplicate
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <ArchiveActiveIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <ArchiveInactiveIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          Archive
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <MoveActiveIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <MoveInactiveIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          Move
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <DeleteActiveIcon
                              className="mr-2 h-5 w-5 text-violet-400"
                              aria-hidden="true"
                            />
                          ) : (
                            <DeleteInactiveIcon
                              className="mr-2 h-5 w-5 text-violet-400"
                              aria-hidden="true"
                            />
                          )}
                          Delete
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        }
      </div >
    </div >
  );
}
// <HeaderSidebar open={open} setOpen={setOpen} user={user} router={router} />

const topbar = () => {
  return (
    <div className="flex items-center  ">
      <div className="flex justify-end w-max items-center gap-10 font-medium">
        <div
          className=" text-center text-lg font-semibold text-black font-sans px-3 py-2 ring ring-transparent outline-none hover:underline hover:font-semibold"
          onClick={() => router.push({ pathname: "/feed", })}
        >
          Review
        </div>
        <div
          onClick={() => router.push({ pathname: "/yourReviews" })}
          className=" text-center text-lg font-semibold text-black font-sans px-3 py-2 ring ring-transparent outline-none hover:underline hover:font-semibold"
        >
          Your Reviews
        </div>
        < div
          onClick={() => router.push({ pathname: "/display", query: { me: 1 } })}
          className=" text-center text-lg font-semibold text-black font-sans px-3 py-2 ring ring-transparent outline-none hover:underline hover:font-semibold"
        >
          Your Papers
        </div >
      </div >
      < div className="w-max rounded-full justify-between m-2 flex items-center p-2 gap-2 font-xl  bg-yellow-gamy" >
        < Image alt="pfp" src={user.picture} width={25} height={25} className="rounded-full" />
        < div className="text-gray-gamy font-sans font-semibold" >
          {user.name}
        </div >
        < Link href="/api/auth/logout" passHref >
          < a > <ExitToAppIcon className=" ease-in-out hover:text-white text-gray-gamy" /></a >
        </Link >
      </div >
    </div >

  )
}
