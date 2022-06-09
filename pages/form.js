import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import NavbarIcon from "../components/NavbarIcon";
import dynamic from "next/dynamic";
const Pdf = dynamic(() => import("../components/CreatePDF"), { ssr: false });
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const KoivistoHamari = [
  { id: 1, name: "Education/Learning", unavailable: false },
  { id: 2, name: "Health/Exercise", unavailable: false },
  { id: 3, name: "Crowdsourcing", unavailable: false },
  { id: 4, name: "Social behavior/networking/sharing", unavailable: true },
  { id: 5, name: "Software development/design", unavailable: false },
  { id: 6, name: "Business/Management", unavailable: false },
  { id: 7, name: "Ecological/environmental behavior", unavailable: false },
  { id: 8, name: "eCommerce/eServices", unavailable: true },
  { id: 9, name: "Software engineering", unavailable: false },
  { id: 10, name: "Marketing/Consumer behavior", unavailable: false },
  { id: 11, name: "Citizen/public engagement/activity", unavailable: false },
  { id: 12, name: "Entertainment", unavailable: true },
  { id: 13, name: "Innovation", unavailable: false },
  { id: 14, name: "Transportation/Mobility", unavailable: false },
  { id: 15, name: "Culture/Tourism", unavailable: false },
  { id: 16, name: "Architecture", unavailable: true },
  { id: 17, name: "Communication", unavailable: false },
  { id: 18, name: "Emergency planning", unavailable: false },
  { id: 19, name: "Politics", unavailable: false },
  { id: 20, name: "Welfare/city/human/public services", unavailable: true },
  { id: 21, name: "Work", unavailable: false },
  { id: 22, name: "Theory", unavailable: false },
];

export default function Home() {
  const [selected, setSelected] = useState(1);
  const [domain, setDomain] = useState(KoivistoHamari[0]);
  const [behavior, setBehavior] = useState();
  const [aim, setAim] = useState(KoivistoHamari[0]);

  function handleSwitch() {
    switch (selected) {
      case 1:
        return (
          <div className="flex flex-col py-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Domain
            </label>
            <Listbox value={domain} onChange={setDomain}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full border cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{domain.name}</span>
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
                    {KoivistoHamari.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
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
            <Listbox value={aim} onChange={setAim}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full border cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{domain.name}</span>
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
                    {KoivistoHamari.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
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
              Behaviors to be encouraged...
            </label>
            <label className="block text-gray-700 text-sm  font-bold mb-2" />
            <TextareaAutosize
              className="w-96 border cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none   sm:text-sm"
              id="username"
              type="text"
              minRows={4}
              placeholder="Username"
              value={behavior}
              onChange={(e) => setBehavior(e.target.value)}
            />

            <label className="mt-4 block text-gray-700 text-sm font-bold mb-2">
              Target user
            </label>
            <TextareaAutosize
              className=" w-full h-56 border cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none sm:text-sm"
              type="text"
              id="text"
              minRows={4}
              placeholder="cose"
            />
          </div>
        );
      case 2:
        return <div> to be done</div>;
      case 3:
        return <div> to be done</div>;
      case 4:
        return <div> to be done</div>;
    }
  }

  return (
    <div className="flex flex-col justify-between ">
      <Header />
      <div className="flex flex-col items-center w-screen justify-center py-10 ">
        <div className="flex flex-col justify-center">
          <div className="flex flex-row justify-center items-center gap-32 text-2xl py-">
            <NavbarIcon
              position={1}
              selected={selected}
              setSelected={setSelected}
              value="Context"
            />
            <NavbarIcon
              position={2}
              selected={selected}
              setSelected={setSelected}
              value="Device"
            />

            <NavbarIcon
              position={3}
              selected={selected}
              setSelected={setSelected}
              value="Affordances"
            />
            <NavbarIcon
              position={4}
              selected={selected}
              setSelected={setSelected}
              value="Rules"
            />
            <NavbarIcon
              position={4}
              selected={selected}
              setSelected={setSelected}
              value="Aesthetics"
            />
          </div>

          <div className=" flex py-10 justify-center items-center">
            {handleSwitch()}
          </div>

          <div className="flex flex-row justify-end gap-5 mb-2 mr-2">
            <Pdf behavior={behavior} domain={domain.name} />
            <div
              className="py-4 inline-block px-8 bg-yellow-gamy text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out "
              onClick={() => {
                if (selected == 1) setSelected(4);
                else setSelected(selected - 1);
              }}
            >
              <h1 className="font-bold py-0.5 px-2 ">Previus</h1>
            </div>
            <div
              className="py-4 inline-block px-8 bg-yellow-gamy text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
              onClick={() => {
                if (selected == 4) setSelected(1);
                else setSelected(selected + 1);
              }}
            >
              <h1 className="font-bold py-0.5 px-2 ">Next</h1>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
