import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import dynamic from "next/dynamic";
const Pdf = dynamic(() => import("../components/CreatePDF"), { ssr: false });
import MobileOffIcon from "@mui/icons-material/MobileOff";
import Head from "next/head";

// Tabs
import { Tab } from "@headlessui/react";
import Context from "../components/tabs/Context";
import Affordances from "../components/tabs/Affordances";
import Rules from "../components/tabs/Rules";
import Aesthetics from "../components/tabs/Aesthetics";
import Device from "../components/tabs/Device";
import Feedback from "../components/tabs/Feedback";
import Modality from "../components/tabs/Modality";

//alert
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Dynamics from "../components/tabs/Dynamics";
import Personalization from "../components/tabs/Personalization";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// import { Rule } from "postcss";

const Aimo = ["Outcome", "Performance", "Process/learning"];

const KoivistoHamari = [
  "Education/Learning",
  "Health/Exercise",
  "Crowdsourcing",
  "Social behavior/networking/sharing",
  "Software development/design",
  "Business/Management",
  "Ecological/environmental behavior",
  "eCommerce/eServices",
  "Software engineering",
  "Marketing/Consumer behavior",
  "Citizen/public engagement/activity",
  "Entertainment",
  "Innovation",
  "Transportation/Mobility",
  "Culture/Tourism",
  "Architecture",
  "Communication",
  "Emergency planning",
  "Politics",
  "Welfare/city/human/public services",
  "Work",
  "Theory",
];

const ageSelection = [
  "1-3",
  "4-5",
  "6-9",
  "10-12",
  "13-15",
  "16-18",
  "19-25",
  "26-29",
  "30-35",
  "35-39",
  "40-49",
  "50-59",
  "60-69",
  "70-79",
  "80+",
];

const categoriesSelection = ["Student", "Employees"];

const DeviceSelection = [
  "Mobile",
  "Computer/Laptop",
  "Tablet",
  "Head-mounted Display",
  "Augmented Reality",
  "Real Life (/non digital)",
];

//affordances
const affordancesSelection = [
  "Acknowledgement",
  "Level",
  "Progression",
  "Point",
  "Stats",

  "Chance",
  "Imposed choice",
  "Economy",
  "Rarity",
  "Time pressure",

  "Competition",
  "Cooperation",
  "Reputation",
  "Social pressure",

  "Novelty",
  "Objectives",
  "Puzzle",
  "Renovation",
  "Sensation",

  "Narrative",
  "Story telling",
];
const performanceSelection = [
  "Acknowledgement",
  "Level",
  "Progression",
  "Point",
  "Stats",
];

const ecologicalSelection = [
  "Chance",
  "Imposed choice",
  "Economy",
  "Rarity",
  "Time pressure",
];

const socialSelection = [
  "Competition",
  "Cooperation",
  "Reputation",
  "Social pressure",
];

const personalSelection = [
  "Novelty",
  "Objectives",
  "Puzzle",
  "Renovation",
  "Sensation",
];

const fictionalSelection = ["Narrative", "Story telling"];

// Modality
const modes = [
  "Individual",
  "Cooperative",
  "Competitive",
  "Cooperative-Competitive",
];

// Feedback
const tt = ["Immediate Feedback", "Late Feedback", "Personalized Timing"];

const contenuti = [
  "Corrective Feedback",
  "Explicative Feedback",
  "Reporting Feedback",
  "Personalized Feedback",
];

export default function Home() {
  // Feedback Page states
  const [timing, setTiming] = useState([]);
  const [context, setContext] = useState([]);
  const [timingDescription, setTimingDescription] = useState("");
  const [contextDescription, setContextDescription] = useState("");

  // Modality Page state
  const [modality, setModality] = useState([]);

  //Dynamics
  const [dynamics, setDynamics] = useState("");

  //Personalization
  const [personalization, setPersonalization] = useState("");

  //context
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [domain, setDomain] = useState([]);
  const [behavior, setBehavior] = useState();
  const [aim, setAim] = useState([]);
  const [name, setName] = useState("");
  const [target, setTarget] = useState("");
  const [targetAge, setTargetAge] = useState([]);

  const [targetCat, setTargetCat] = useState([]);

  //Device
  const [device, setDevice] = useState([]);

  //Affordances
  const [performance, setPerformance] = useState(2);
  const [ecological, setEcological] = useState("");
  const [social, setSocial] = useState("");
  const [personal, setPersonal] = useState("");
  const [fictional, setFictional] = useState("");
  const [select1, setSelected1] = useState(false);
  const [select2, setSelected2] = useState(false);
  const [affordances1, setAffordances1] = useState("");
  const [affordances2, setAffordances2] = useState("");
  const [affordances3, setAffordances3] = useState("");
  const [affordances4, setAffordances4] = useState("");
  const [affordances5, setAffordances5] = useState("");
  const [affordances6, setAffordances6] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // const [affordancesSum, setAffordancesSum] = useState([]);
  // let aff
  // for (let i = 1; i <= 6; i++) {
  //   aff = ("affordances" + i)
  //   setAffordancesSum([...affordancesSum, aff])
  // }

  //Aestethics 
  const [aesthetics, setAesthetics] = useState("");

  //Rules
  const [rules, setRules] = useState("");

  return (
    <div className="flex flex-col justify-between h-screen ">
      <Head>
        <title>GamiDoc</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <h1 className="hidden items-center justify-center font-bold text-2xl xs:flex ">
        {" "}
        ONLY DESKTOP USE <MobileOffIcon />{" "}
      </h1>
      <div className="flex flex-col items-center w-screen justify-center xs:hidden">
        <div className="flex flex-col justify-center">
          <div className=" flex-col flex py-10 justify-center items-center">
            {/* {handleSwitch()} */}
            <Tab.Group
              selectedIndex={selectedIndex}
              onChange={setSelectedIndex}
            >
              <Tab.List className="flex flex-row gap-16 items-center ">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <div
                      className={
                        selected
                          ? " text-center text-3xl font-bold text-black rounded-3xl  font-sans px-3 py-2 ring ring-transparent  outline-none "
                          : " text-center text-xl font-medium text-black rounded-md font-sans px-3 py-2 ring ring-transparent outline-none"
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
                          ? " text-center text-3xl font-bold text-black rounded-3xl  font-sans px-3 py-2 ring ring-transparent outline-none"
                          : " text-center text-xl font-medium text-black rounded-md font-sans px-3 py-2 ring ring-transparent outline-none"
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
                          ? " text-center text-3xl font-bold text-black rounded-3xl  font-sans px-3 py-2 ring ring-transparent outline-none"
                          : " text-center text-xl font-medium text-black rounded-md font-sans px-3 py-2 ring ring-transparent outline-none"
                      }
                    >
                      Modality
                    </div>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <div
                      className={
                        selected
                          ? " text-center text-3xl font-bold text-black rounded-3xl  font-sans px-3 py-2 ring ring-transparent outline-none"
                          : " text-center text-xl font-medium text-black rounded-md font-sans px-3 py-2 ring ring-transparent outline-none"
                      }
                    >
                      Dynamics
                    </div>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <div
                      className={
                        selected
                          ? " text-center text-3xl font-bold text-black rounded-3xl  font-sans px-3 py-2 ring ring-transparent outline-none"
                          : " text-center text-xl font-medium text-black rounded-md font-sans px-3 py-2 ring ring-transparent outline-none"
                      }
                    >
                      Personalization
                    </div>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <div
                      className={
                        selected
                          ? " text-center text-3xl font-bold text-black rounded-3xl  font-sans px-3 py-2 ring ring-transparent outline-none"
                          : " text-center text-xl font-medium text-black rounded-md font-sans px-3 py-2 ring ring-transparent outline-none"
                      }
                    >
                      Feedback
                    </div>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <div
                      className={
                        selected
                          ? " text-center text-3xl font-bold text-black rounded-3xl  font-sans px-3 py-2  ring ring-transparent outline-none"
                          : " text-center text-xl font-medium text-black rounded-md font-sans px-3 py-2 ring ring-transparent outline-none"
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
                          ? " text-center text-3xl font-bold text-black rounded-3xl  font-sans px-3 py-2  ring ring-transparent outline-none"
                          : " text-center text-xl font-medium text-black rounded-md font-sans px-3 py-2 ring ring-transparent outline-none"
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
                          ? " text-center text-3xl font-bold text-black rounded-3xl  font-sans px-3 py-2 ring ring-transparent outline-none"
                          : " text-center text-xl font-medium text-black rounded-md font-sans px-3 py-2 ring ring-transparent outline-none"
                      }
                    >
                      Aesthetics
                    </div>
                  )}
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <Context
                  // aim={aim}
                  // setAim={setAim}
                  // domain={domain}
                  // setDomain={setDomain}
                  // target={target}
                  // setTarget={setTarget}
                  // targetAge={targetAge}
                  // setTargetAge={setTargetAge}
                  // targetCat={targetCat}
                  // setTargetCat={setTargetCat}
                  // behavior={behavior}
                  // setBehavior={setBehavior}
                  // selectObj1={KoivistoHamari}
                  // selectObj2={Aimo}
                  // selectObj3={categoriesSelection}
                  // selectObj4={ageSelection}
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
                  <Modality
                    modality={modality}
                    setModality={setModality}
                    selectObj1={modes}
                  />
                </Tab.Panel>
                <Tab.Panel>
                  <Dynamics dynamics={dynamics} setDynamics={setDynamics} />
                </Tab.Panel>
                <Tab.Panel>
                  <Personalization
                    personalization={personalization}
                    setPersonalization={setPersonalization}
                  />
                </Tab.Panel>
                <Tab.Panel>
                  <Feedback
                    timing={timing}
                    setTiming={setTiming}
                    context={context}
                    setContext={setContext}
                    timingDescription={timingDescription}
                    setTimingDescription={setTimingDescription}
                    contextDescription={contextDescription}
                    setContextDescription={setContextDescription}
                    selectObj1={tt}
                    selectObj2={contenuti}
                  />
                </Tab.Panel>
                <Tab.Panel>
                  <Affordances
                    select1={select1}
                    setSelected1={setSelected1}
                    select2={select2}
                    setSelected2={setSelected2}
                    affordances1={affordances1}
                    setAffordances1={setAffordances1}
                    affordances2={affordances2}
                    setAffordances2={setAffordances2}
                    affordances3={affordances3}
                    setAffordances3={setAffordances3}
                    affordances4={affordances4}
                    setAffordances4={setAffordances4}
                    affordances5={affordances5}
                    setAffordances5={setAffordances5}
                    affordances6={affordances6}
                    setAffordances6={setAffordances6}
                    open={open}
                    setOpen={setOpen}
                    affordancesSelection={affordancesSelection}
                  />
                </Tab.Panel>
                <Tab.Panel>
                  <Rules
                    rules={rules}
                    setRules={setRules}
                    affordances1={affordances1}
                    affordances2={affordances2}
                    affordances3={affordances3}
                    affordances4={affordances4}
                    affordances5={affordances5}
                    affordances6={affordances6}
                  />
                </Tab.Panel>
                <Tab.Panel>
                  <Aesthetics
                  // aesthetics={aesthetics}
                  // setAesthetics={setAesthetics}
                  />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>

          <div className="flex flex-row justify-center items-center mb-10 mr-2">

            <Pdf
            // selectedIndex={selectedIndex}
            // name={name}
            // behavior={behavior}
            // domain={domain}
            // aim={aim}
            // targetAge={targetAge}
            // targetCat={targetCat}

            // timing={timing}
            // timingDescription={timingDescription}

            // context={context}
            // contextDescription={contextDescription}

            // modality={modality}
            // device={device}

            // rules={rules}
            // affordances={affordances1}

            // aesthetics={aesthetics}
            />
            <div className="grow flex-row flex gap-5 items-center justify-end">
              <div
                className="py-4 inline-block px-8 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-gray-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out "
                onClick={() => {
                  if (selectedIndex == 0) setSelectedIndex(6);
                  else setSelectedIndex(selectedIndex - 1);
                }}
              >
                <h1 className="font-bold py-0.5 px-2 ">Previous</h1>
              </div>
              <div
                className={
                  selectedIndex == 6
                    ? " invisible"
                    : " py-4 inline-block px-8 bg-yellow-gamy text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
                }
                onClick={() => {
                  if (selectedIndex == 6) setSelectedIndex(0);
                  else setSelectedIndex(selectedIndex + 1);
                }}
              >
                <h1 className="font-bold py-0.5 px-2 ">Next</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          too much feedback - pls stop!
        </Alert>
      </Snackbar>
      <Footer />
    </div>
  );
}
