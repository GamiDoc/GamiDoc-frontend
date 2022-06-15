import React, { useState } from "react";
import { Fragment } from "react";
import { Transition, Listbox } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

export default function Modality({ modality, setModality, selectObj1 }) {
  const [isShowing, setIsShowing] = useState(0); // per transition
  return (
    <div className="flex flex-col py-4 w-[60em]">
      <label className=" mt-4 block text-gray-700  font-bold mb-2">
        Type of Modality:
      </label>

      <h2 className="mt-4 block text-gray-700  mb-2 ">
        This section is dedicated to the definition of the main modality
        included in the gamification software.
      </h2>
      <Listbox value={modality} onChange={setModality}>
        <div className="relative mt-1 ">
          <Listbox.Button
            onClick={() => setIsShowing(1)}
            className="relative w-full border cursor-default rounded-lg bg-white py-2
                 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2
                 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2
                 focus-visible:ring-offset-orange-300 sm:"
          >
            <span className="block truncate">{modality.mode}</span>
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
                   focus:outline-none sm:  "
            >
              {selectObj1.map((modality) => (
                <Listbox.Option
                  key={modality.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={modality}
                >
                  {({ domain }) => (
                    <>
                      <span
                        className={`block truncate ${
                          domain ? "font-medium" : "font-normal"
                        }`}
                      >
                        {modality.mode}
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
