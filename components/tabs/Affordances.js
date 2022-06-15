import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

function Affordances({
  performance,
  performanceSelection,
  setPerformance,

  ecological,
  ecologicalSelection,
  setEcological,

  social,
  socialSelection,
  setSocial,

  personal,
  personalSelection,
  setPersonal,

  fictional,
  fictionalSelection,
  setFictional,
}) {
  const [isShowing, setIsShowing] = useState(0); // per transition
  return (
    <div className="flex flex-col w-[60em] py-4">
      <label className=" mt-4 block text-gray-700   font-bold mb-2">
        Perfomances
      </label>

      <h2 className="w-[60em] mt-4 block text-gray-700   mb-2 ">----</h2>

      <Listbox value={performance} onChange={setPerformance}>
        <div className="relative mt-1">
          <Listbox.Button
            onClick={() => setIsShowing(1)}
            className="relative w-full border cursor-default rounded-lg bg-white py-2
                 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2
                 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2
                 focus-visible:ring-offset-orange-300 sm: "
          >
            <span className="block truncate">{performance.name}</span>
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
                   focus:outline-none sm: "
            >
              {performanceSelection.map((person) => (
                <Listbox.Option
                  key={person.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ performance }) => (
                    <>
                      <span
                        className={`block truncate ${
                          performance ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {performance ? (
                        <performance className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" />
                        </performance>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

      <label className=" mt-4 block text-gray-700   font-bold mb-2">
        Ecological
      </label>

      <h2 className="w-[60em] mt-4 block text-gray-700   mb-2 ">---</h2>

      <Listbox value={ecological} onChange={setEcological}>
        <div className="relative mt-1">
          <Listbox.Button
            onClick={() => setIsShowing(1)}
            className="relative w-full border cursor-default rounded-lg bg-white py-2
                 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2
                 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2
                 focus-visible:ring-offset-orange-300 sm: "
          >
            <span className="block truncate">{ecological.name}</span>
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
                   focus:outline-none sm: "
            >
              {ecologicalSelection.map((person) => (
                <Listbox.Option
                  key={person.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ ecological }) => (
                    <>
                      <span
                        className={`block truncate ${
                          ecological ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {ecological ? (
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

      <label className=" mt-4 block text-gray-700   font-bold mb-2">
        Social
      </label>

      <h2 className="w-[60em] mt-4 block text-gray-700   mb-2 ">---</h2>

      <Listbox value={social} onChange={setSocial}>
        <div className="relative mt-1">
          <Listbox.Button
            onClick={() => setIsShowing(1)}
            className="relative w-full border cursor-default rounded-lg bg-white py-2
                 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2
                 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2
                 focus-visible:ring-offset-orange-300 sm: "
          >
            <span className="block truncate">{social.name}</span>
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
                   focus:outline-none sm: "
            >
              {socialSelection.map((person) => (
                <Listbox.Option
                  key={person.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ social }) => (
                    <>
                      <span
                        className={`block truncate ${
                          social ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {social ? (
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

      <label className=" mt-4 block text-gray-700   font-bold mb-2">
        Personal
      </label>

      <h2 className="w-[60em] mt-4 block text-gray-700   mb-2 ">---</h2>

      <Listbox value={personal} onChange={setPersonal}>
        <div className="relative mt-1">
          <Listbox.Button
            onClick={() => setIsShowing(1)}
            className="relative w-full border cursor-default rounded-lg bg-white py-2
                 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2
                 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2
                 focus-visible:ring-offset-orange-300 sm: "
          >
            <span className="block truncate">{personal.name}</span>
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
                   focus:outline-none sm: "
            >
              {personalSelection.map((person) => (
                <Listbox.Option
                  key={person.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ personal }) => (
                    <>
                      <span
                        className={`block truncate ${
                          personal ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {personal ? (
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

      <label className=" mt-4 block text-gray-700   font-bold mb-2">
        Fictional
      </label>

      <h2 className="w-[60em] mt-4 block text-gray-700   mb-2 ">---</h2>

      <Listbox value={fictional} onChange={setFictional}>
        <div className="relative mt-1">
          <Listbox.Button
            onClick={() => setIsShowing(1)}
            className="relative w-full border cursor-default rounded-lg bg-white py-2
                 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2
                 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2
                 focus-visible:ring-offset-orange-300 sm: "
          >
            <span className="block truncate">{fictional.name}</span>
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
                   focus:outline-none sm: "
            >
              {fictionalSelection.map((person) => (
                <Listbox.Option
                  key={person.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ fictional }) => (
                    <>
                      <span
                        className={`block truncate ${
                          fictional ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {fictional ? (
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

export default Affordances;
