import React from "react";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";

export default function documentation() {
  return (
    <div>
      <div
        // SideBar con i contenuti da renderizzare
        className="flex flex-col gap-3 fixed top-0 left-0 w-1/6 shadow-lg h-screen"
      >
        <Disclosure>
          <>
            <Disclosure.Button>
              <h1 className="text-black font-bold rounded-md m-1 mt-6 shadow-sm hover:bg-yellow-gamy">
                Context
              </h1>
            </Disclosure.Button>
            <Disclosure.Panel className="text-black flex-col justify-center items-center ">
              <div>
                <Link href="" className="w-full text-center">
                  <a className="m-5">Domain</a>
                </Link>
              </div>
              <div>
              <Link href="" className="w-full text-center">
                <a className="m-5">Aim</a>
              </Link>
              </div>
              <div>
              <Link href="" className="w-full text-center ">
                <a className="m-5">Behaviors </a>
              </Link>
              </div>
              <div>
              <Link href="" className="w-full text-center">
                <a className="m-5">Target User</a>
              </Link>
              </div>
            </Disclosure.Panel>
          </>
        </Disclosure>
      </div>
    </div>
  );
}
