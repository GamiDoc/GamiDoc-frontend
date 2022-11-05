import Link from 'next/link'
import Image from "next/image";
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/outline'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';



export default function HeaderSidebar({ open, setOpen, user, router }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-lg font-medium text-gray-900">Panel title</Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <div className="flex-col  ">
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
                      {/* Replace with your content */}
                      {/* <div className="absolute inset-0 px-4 sm:px-6"> */}
                      {/*   <div className="h-full border-2 border-dashed border-gray-200" aria-hidden="true" /> */}
                      {/* </div> */}
                      {/* /End replace */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}


