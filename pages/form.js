import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import dynamic from "next/dynamic";
const Pdf = dynamic(() => import("../components/CreatePDF"), { ssr: false });
import { Listbox, Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import TextareaAutosize from "@mui/material/TextareaAutosize";

// Tabs
import { Tab } from "@headlessui/react";
import Context from "../components/tabs/Context";
import Affordances from "../components/tabs/Affordances";
import Rules from "../components/tabs/Rules";
import Aesthetics from "../components/tabs/Aesthetics";
import Device from "../components/tabs/Device";
// import { Rule } from "postcss";

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

const Aimo = [
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
  const [behavior, setBehavior] = useState("none");
  const [aim, setAim] = useState(Aimo[0]);
  const [name, setName] = useState("");
  const [target, setTarget] = useState("");
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="flex flex-col justify-between ">
      <Header />
      <div className="flex flex-col items-center w-screen justify-center ">
        <div className="flex flex-col justify-center">
          <div className=" flex-col flex py-10 justify-center items-center">
            {/* {handleSwitch()} */}
            <Tab.Group>
              <Tab.List className="flex flex-row gap-28">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <div
                      className={
                        selected
                          ? "text-center text-3xl bg-yellow-gamy font-medium text-white rounded-3xl shadow-md font-sans px-4 py-2 "
                          : "text-center text-2xl font-medium text-black rounded-md font-sans"
                      }
                    >
                      Context
                    </div>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <div
                      className={
                        selected
                          ? "text-center text-3xl bg-yellow-gamy font-medium text-white rounded-3xl shadow-md font-sans px-4 py-2 "
                          : "text-center text-2xl font-medium text-black rounded-md font-sans"
                      }
                    >
                      Affordances
                    </div>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <div
                      className={
                        selected
                          ? "text-center text-3xl bg-yellow-gamy font-medium text-white rounded-3xl shadow-md font-sans px-4 py-2 "
                          : "text-center text-2xl font-medium text-black rounded-md font-sans"
                      }
                    >
                      Rules
                    </div>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <div
                      className={
                        selected
                          ? "text-center text-3xl bg-yellow-gamy font-medium text-white rounded-3xl shadow-md font-sans px-4 py-2 "
                          : "text-center text-2xl font-medium text-black rounded-md font-sans"
                      }
                    >
                      Aesthetics
                    </div>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <div
                      className={
                        selected
                          ? "text-center text-3xl bg-yellow-gamy font-medium text-white rounded-3xl shadow-md font-sans px-4 py-2 "
                          : "text-center text-2xl font-medium text-black rounded-md font-sans"
                      }
                    >
                     Device 
                    </div>
                  )}
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <Context
                    aim={aim}
                    setAim={setAim}
                    domain={domain}
                    setDomain={setDomain}
                    target={target}
                    setTarget={setTarget}
                    behavior={behavior}
                    setBehavior={setBehavior}
                    selectObj1={KoivistoHamari}
                    selectObj2={Aimo}
                  />
                </Tab.Panel>
                <Tab.Panel>
                  <Affordances />
                </Tab.Panel>
                <Tab.Panel>
                  <Rules />
                </Tab.Panel>
                <Tab.Panel>
                  <Aesthetics />
                </Tab.Panel>
                <Tab.Panel>
                  <Device />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>

          <div className="flex flex-row justify-end gap-5 mb-2 mr-2">
            <Pdf
              name={name}
              behavior={behavior}
              domain={domain.name}
              aim={aim.name}
              target={target}
            />
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

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Project name
                  </Dialog.Title>
                  <div className="mt-2">
                    <TextareaAutosize
                      className="w-96 border cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none   sm:text-sm"
                      id="Name"
                      type="text"
                      minRows={1}
                      placeholder="Name of the project"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Save!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
