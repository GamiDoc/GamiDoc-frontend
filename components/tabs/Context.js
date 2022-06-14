import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import TextareaAutosize from "@mui/material/TextareaAutosize";

function Context({
  behavior,
  setBehavior,
  domain,
  setDomain,
  aim,
  setAim,
  target,
  setTarget,
  selectObj1, // L'oggetto che contiene i campi del select
  selectObj2, // Aimo, campo del lavoro
}) {
  const [isShowing, setIsShowing] = useState(0); // per transition
  return (
    <div className="flex flex-col py-4">
      <label className="w-[60em] mt-4 block text-gray-700 text-sm font-bold mb-2">
        Domain
      </label>
      <h2 className=" mt-4 block text-gray-700 text-sm mb-2 ">
        Gamification elements work differently in relation to context. In this
        section, we ask designers to list the applicational domain.
      </h2>

      <Listbox value={domain} onChange={setDomain}>
        <div className="relative mt-1">
          <Listbox.Button
            onClick={() => setIsShowing(1)}
            className="relative w-full border cursor-default rounded-lg bg-white py-2
                 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2
                 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2
                 focus-visible:ring-offset-orange-300 sm:text-sm"
          >
            <span className="block truncate">{domain.name}</span>
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
                   focus:outline-none sm:text-sm"
            >
              {selectObj1.map((person) => (
                <Listbox.Option
                  key={person.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ domain }) => (
                    <>
                      <span
                        className={`block truncate ${
                          domain ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
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

      <label className="mt-4 block text-gray-700 text-sm font-bold mb-2">
        Aim
      </label>
      <h2 className=" mt-4 block text-gray-700 text-sm mb-2 ">
        To clearly understand the goal of the software, we ask designers to
        clearly state the final purpose of the future software.
      </h2>
      <Listbox value={aim} onChange={setAim}>
        <div className="relative mt-1">
          <Listbox.Button
            onClick={() => setIsShowing(1)}
            className="relative w-full border cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
          >
            <span className="block truncate">{aim.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
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
            <Listbox.Options className="relative mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {selectObj2.map((field) => (
                <Listbox.Option
                  key={field.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={field}
                >
                  {({ aim }) => (
                    <>
                      <span
                        className={`block truncate ${
                          aim ? "font-medium" : "font-normal"
                        }`}
                      >
                        {field.name}
                      </span>
                      {aim ? (
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

      <label className="mt-4 block text-gray-700 text-sm font-bold mb-2">
        Behaviors to be encouraged...
      </label>
      <h2 className="w-[60em] mt-4 block text-gray-700 text-sm mb-2 ">
        It is essential to focus on the different behaviors we want to encourage
        and on the different behaviors we want users to avoid to reach the goal.
        Thus, we ask designers to list the possible behaviors that have to be
        encouraged and which ones should be avoided to reach the goal.
      </h2>
      <label className="block text-gray-700 text-sm  font-bold mb-2" />
      <TextareaAutosize
        onClick={() => setIsShowing(3)}
        className="w-full border cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none   sm:text-sm"
        id="username"
        type="text"
        minRows={4}
        placeholder="Behaviors"
        value={behavior}
        onChange={(e) => setBehavior(e.target.value)}
      />

      <label className="mt-4 block text-gray-700 text-sm font-bold mb-2">
        Target user
      </label>
      <h2 className="w-[60em] mt-4 block text-gray-700 text-sm mb-2 ">
        It’s essential to have in mind the target user. In this way, it is
        possible to think about motivational needs and issues concerning
        different users. In this part, we ask designers to list all the possible
        target users, reporting all the relevant information (age range,
        specific categories, etc).
      </h2>
      <TextareaAutosize
        onClick={() => setIsShowing(4)}
        className=" w-full h-56 border cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none sm:text-sm"
        type="text"
        id="target"
        minRows={4}
        placeholder="Target user"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
      />
    </div>
  );
}

export default Context;
