import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import dynamic from "next/dynamic";
const Pdf = dynamic(() => import("../components/CreatePDF"), { ssr: false });
import { Listbox, Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";
// import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
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

const DeviceSelection = [
  { id: 1, name: "Mobile", unavailable: false },
  { id: 2, name: "Laptop", unavailable: false },
  { id: 3, name: "Tablet", unavailable: false },
  { id: 4, name: "Head-mounted Display", unavailable: true },
  { id: 5, name: "Other", unavailable: true },
];

const performanceSelection = [
  { id: 1, name: "Acknowledgement", unavailable: false },
  { id: 2, name: "Level", unavailable: false },
  { id: 3, name: "Progression", unavailable: false },
  { id: 4, name: "Point", unavailable: true },
  { id: 5, name: "Stats", unavailable: true },
];

const ecologicalSelection = [
  { id: 1, name: "Chance", unavailable: false },
  { id: 2, name: "Imposed choice", unavailable: false },
  { id: 3, name: "Economy", unavailable: false },
  { id: 4, name: "Rarity", unavailable: true },
  { id: 5, name: "Time pressure", unavailable: true },
];

const socialSelection = [
  { id: 1, name: "Competition", unavailable: false },
  { id: 2, name: "Cooperation", unavailable: false },
  { id: 3, name: "Reputation", unavailable: false },
  { id: 4, name: "Social pressure", unavailable: true },
];

const personalSelection = [
  { id: 1, name: "Novelty", unavailable: false },
  { id: 2, name: "Objectives", unavailable: false },
  { id: 3, name: "Puzzle", unavailable: false },
  { id: 4, name: "Renovation", unavailable: true },
  { id: 5, name: "Sensation", unavailable: true },
];

const fictionalSelection = [
  { id: 1, name: "Narrative", unavailable: false },
  { id: 2, name: "Story telling", unavailable: false },
];

export default function Home() {
  //Context
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [domain, setDomain] = useState(KoivistoHamari[0]);
  const [behavior, setBehavior] = useState("");
  const [aim, setAim] = useState(Aimo[0]);
  const [name, setName] = useState("");
  const [target, setTarget] = useState("");
  let [isOpen, setIsOpen] = useState(true);

  //Device
  const [device, setDevice] = useState(DeviceSelection[0]);

  //Affordances
  const [performance, setPerformance] = useState(performanceSelection[0]);
  const [ecological, setEcological] = useState(ecologicalSelection[0]);
  const [social, setSocial] = useState(socialSelection[0]);
  const [personal, setPersonal] = useState(personalSelection[0]);
  const [fictional, setFictional] = useState(fictionalSelection[0]);

  //Aestethics
  const [aesthetics, setAesthetics] = useState("");

  //Rules
  const [rules,setRules] = useState("");

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
            <Tab.Group
              selectedIndex={selectedIndex}
              onChange={setSelectedIndex}
            >
              <Tab.List className="flex flex-row gap-28 items-center ">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <div
                      className={
                        selected
                          ? " text-center text-3xl font-bold text-black rounded-3xl  font-sans px-4 py-2 ring ring-transparent  outline-none "
                          : " text-center text-2xl font-medium text-black rounded-md font-sans px-4 py-2 ring ring-transparent outline-none"
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
                          ? " text-center text-3xl font-bold text-black rounded-3xl  font-sans px-4 py-2  ring ring-transparent outline-none"
                          : " text-center text-2xl font-medium text-black rounded-md font-sans px-4 py-2 ring ring-transparent outline-none"
                      }
                    >
                      Device
                    </div>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <div
                      className={
                        selected
                          ? " text-center text-3xl font-bold text-black rounded-3xl  font-sans px-4 py-2  ring ring-transparent outline-none"
                          : " text-center text-2xl font-medium text-black rounded-md font-sans px-4 py-2 ring ring-transparent outline-none"
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
                          ? " text-center text-3xl font-bold text-black rounded-3xl  font-sans px-4 py-2 ring ring-transparent outline-none"
                          : " text-center text-2xl font-medium text-black rounded-md font-sans px-4 py-2 ring ring-transparent outline-none"
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
                          ? " text-center text-3xl font-bold text-black rounded-3xl  font-sans px-4 py-2 ring ring-transparent outline-none"
                          : " text-center text-2xl font-medium text-black rounded-md font-sans px-4 py-2 ring ring-transparent outline-none"
                      }
                    >
                      Affordances
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
                  <Device
                    device={device}
                    setDevice={setDevice}
                    DeviceSelection={DeviceSelection}
                  />
                </Tab.Panel>
                <Tab.Panel>
                  <Rules 
                  rules={rules}
                  setRules={setRules}/>
                </Tab.Panel>
                <Tab.Panel>
                  <Aesthetics
                    aesthetics={aesthetics}
                    setAesthetics={setAesthetics}
                  />
                </Tab.Panel>
                <Tab.Panel>
                  <Affordances
                    performance={performance}
                    performanceSelection={performanceSelection}
                    setPerformance={setPerformance}
                    ecological={ecological}
                    ecologicalSelection={ecologicalSelection}
                    setEcological={setEcological}
                    social={social}
                    socialSelection={socialSelection}
                    setSocial={setSocial}
                    personal={personal}
                    personalSelection={personalSelection}
                    setPersonal={setPersonal}
                    fictional={fictional}
                    fictionalSelection={fictionalSelection}
                    setFictional={setFictional}
                  />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>

          <div className="flex flex-row justify-center items-center mb-10 mr-2">
            <Pdf
              name={name}
              behavior={behavior}
              domain={domain.name}
              aim={aim.name}
              target={target}
            />
            <div className="grow flex-row flex gap-5 items-center justify-end">
              <div
                className="py-4 inline-block px-8 bg-yellow-gamy text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out "
                onClick={() => {
                  if (selectedIndex == 0) setSelectedIndex(4);
                  else setSelectedIndex(selectedIndex - 1);
                }}
              >
                <h1 className="font-bold py-0.5 px-2 ">Previus</h1>
              </div>
              <div
                className="py-4 inline-block px-8 bg-yellow-gamy text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => {
                  if (selectedIndex == 4) setSelectedIndex(0);
                  else setSelectedIndex(selectedIndex + 1);
                }}
              >
                <h1 className="font-bold py-0.5 px-2 ">Next</h1>
              </div>
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
