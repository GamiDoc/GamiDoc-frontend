import React, { useState } from "react";
import { Fragment } from "react";
import { Transition, Listbox } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

export default function Feedback({
  timing,
  setTiming,
  context,
  setContext,
  selectObj1,
  selectObj2
}) {
  const [isShowing, setIsShowing] = useState(0); // per transition
  return (
    <div className="flex flex-col gap-2 justify-center">
      <label className=" mt-4 block text-gray-700 text-sm font-bold mb-2 ml-0.5">
        Timing:
      </label>
      <Transition
        as={Fragment}
        show={isShowing == 1}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <h1 className="ml-0.5">L0r3m 1pSum</h1>
      </Transition>
      <Listbox value={timing} onChange={setTiming}>
        <div className="relative mt-1 w-60">
          <Listbox.Button
            onClick={() => setIsShowing(1)}
            className="relative w-full border cursor-default rounded-lg bg-white py-2
                 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2
                 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2
                 focus-visible:ring-offset-orange-300 sm:text-sm"
          >
            <span className="block truncate">{timing.frame}</span>
            <span className="poiListboxnter-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className="relative mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1
                   text-base shadow-lg ring-1 ring-black ring-opacity-5
                   focus:outline-none sm:text-sm  "
            >
              {selectObj1.map((timing) => (
                <Listbox.Option
                  key={timing.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={timing}
                >
                  {({ domain }) => (
                    <>
                      <span
                        className={`block truncate ${
                          domain ? "font-medium" : "font-normal"
                        }`}
                      >
                        {timing.frame}
                      </span>
                      {domain ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      {/*Seconda Listbox*/}
      <label className=" mt-4 block text-gray-700 text-sm font-bold mb-2 ml-0.5">
        Content:
      </label>
      <Transition
        as={Fragment}
        show={isShowing == 2}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <h1 className="ml-0.5">L0r3m 1pSum</h1>
      </Transition>
      <Listbox value={context} onChange={setContext}>
        <div className="relative mt-1 w-60">
          <Listbox.Button
            onClick={() => setIsShowing(2)}
            className="relative w-full border cursor-default rounded-lg bg-white py-2
                 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2
                 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2
                 focus-visible:ring-offset-orange-300 sm:text-sm"
          >
            <span className="block truncate">{context.text}</span>
            <span className="poiListboxnter-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className="relative mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1
                   text-base shadow-lg ring-1 ring-black ring-opacity-5
                   focus:outline-none sm:text-sm  "
            >
              {selectObj2.map((coso) => (
                <Listbox.Option
                  key={coso.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={coso}
                >
                  {({ domain }) => (
                    <>
                      <span
                        className={`block truncate ${
                          domain ? "font-medium" : "font-normal"
                        }`}
                      >
                        {coso.text}
                      </span>
                      {domain ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
