import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect, useRef } from "react";
import { Fragment } from "react";
import dynamic from "next/dynamic";
const Pdf = dynamic(() => import("../components/CreatePDF"), { ssr: false });
import MobileOffIcon from "@mui/icons-material/MobileOff";
import Head from "next/head";
import { useRouter } from "next/router"
import axios from "axios"
var Mutex = require("async-mutex").Mutex
// Auth0 user hook  
import { useUser, getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';

// Tabs
import { Tab } from "@headlessui/react";
import Context from "../components/tabs/Context";
import Affordances from "../components/tabs/Affordances";
import Rules from "../components/tabs/Rules";
import Aesthetics from "../components/tabs/Aesthetics";
import Device from "../components/tabs/Device";
import Feedback from "../components/tabs/Feedback";
import Modality from "../components/tabs/Modality";
import Dynamics from "../components/tabs/Dynamics";
import Personalization from "../components/tabs/Personalization";

//alert
import Alert from '@mui/material/Alert';
import { Snackbar } from "@mui/material";

export const getServerSideProps = ({ req, res }) => {
  let url = (process.env.SECURE) ? "https://" : "http://"
  url = url + process.env.BACK_ENDPOINT
  const session = getSession(req, res)
  if (!session) return { props: {} }
  return { props: { token: session.accessToken, url: url } }
}

const Aimo = ["Outcome", "Performance", "Process/learning"];
const categorySelection = ["Student", "Employee", "Researcher"];

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


const DeviceSelection = [
  "Mobile",
  "Computer/Laptop",
  "Tablet",
  "Head-mounted Display",
  "Augmented Reality",
  "Real Life (non digital)",
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

export default withPageAuthRequired(function Home({ token, url }) {

  // Feedback Page states
  const [timing, setTiming] = useState("");
  // const [timingDescription, setTimingDescription] = useState("");
  const [context, setContext] = useState("");
  const [contextDescription, setContextDescription] = useState("");

  // Modality Page state
  const [modality, setModality] = useState("");
  const [modalityDescription, setModalityDescription] = useState("");
  //Dynamics
  const [dynamics, setDynamics] = useState("");
  //Personalization
  const [personalization, setPersonalization] = useState("");

  //context
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [domain, setDomain] = useState("");
  const [domainDescription, setDomainDescription] = useState("");
  const [behavior, setBehavior] = useState("");
  const [discBehavior, setDiscBehavior] = useState("");
  const [aim, setAim] = useState("");
  const [aimDescription, setAimDescription] = useState("");
  const [targetAge, setTargetAge] = useState([]);
  const [targetUser, setTargetUser] = useState("");
  const [targetCategory, setTargetCategory] = useState("");

  //Device
  const [device, setDevice] = useState("");
  const [deviceDescription, setDeviceDescription] = useState("");

  //Affordances
  const [affordances, setAffordances] = useState([{ type: "Game Elements", text: "Description", pos: 0 },]);

  //Aestethics
  const [aesthetics, setAesthetics] = useState("");
  const [images, setImages] = useState([])
  const [imgUrl, setImgUrl] = useState([])

  //Rules
  const [rules, setRules] = useState("");

  // Valori URL
  const { query } = useRouter()
  const [name, setName] = useState(query.name)
  const [description, setDescription] = useState(query.description)

  const mutex = useRef(new Mutex())

  const saveDraft = () => {
    // let aff = affordances.split("=>")
    if (!draftID) {
      axios.post(url + "/draft/new", {
        title: query.name,
        description: query.description,
        behavior: behavior,
        discbehavior: discbehavior,
        domain: domain,
        domainDescription: domainDescription,
        aim: aim,
        aimDescription: aimDescription,
        targetAge: targetAge,
        targetUser: targetUser,
        targetCategory: targetCategory,
        device: device,
        deviceDescription: deviceDescription,
        modality: modality,
        modalityDescription: modalityDescription,
        dynamics: dynamics,
        personalization: personalization,
        context: context,
        contextDescription: contextDescription,
        timing: timing,
        // timingDescription: timingDescription,
        // gameAction: aff[0],
        // condition: aff[1],
        affordances: affordances,
        rules: rules,
        aesthetics: aesthetics,
        draftId: draftID
      },
        {
          headers: {
            Authorization: "Bearer " + token
          }
        }).then((val) => {
          console.log("NEW:", val.data)
          setDraftID(val.data.draft._id)
        }
        )
    }
    else {
      axios.patch(url + "/draft/" + draftID, {
        title: name,
        description: query.description,
        behavior: behavior,
        discbehavior: discbehavior,
        domain: domain,
        domainDescription: domainDescription,
        aim: aim,
        aimDescription: aimDescription,
        targetAge: targetAge,
        targetUser: targetUser,
        targetCategory: targetCategory,
        device: device,
        deviceDescription: deviceDescription,
        modality: modality,
        modalityDescription: modalityDescription,
        dynamics: dynamics,
        personalization: personalization,
        context: context,
        contextDescription: contextDescription,
        timing: timing,
        // timingDescription: timingDescription,
        // gameAction: aff[0],
        // condition: aff[1],
        affordances: affordances,
        rules: rules,
        aesthetics: aesthetics,
        draftId: draftID

      },
        {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then((val) => console.log("PATCH:", val.data))
    }
  }

  // DRAFT SAVER  
  const [timer, setTimer] = useState(false)
  const [draftID, setDraftID] = useState(query.draftID)
  const [allertBool, setAllertBool] = useState(false)
  const [snackBool, setSnackBool] = useState(false)

  useEffect(() => {
    console.log("1st: in the useEffect")
    mutex.current.runExclusive(async function() {
      if (timer) {
        console.log("2nd:there was no timer")
        setTimeout(() => {
          console.log("timer is up ")
          setTimer(true)
        }, 5000);
        setTimer(false)
        console.log("inside the setState callback")
        if (!draftID) {
          axios.post(url + "/draft/new", {
            title: query.name,
            description: query.description,
            behavior: behavior,
            discbehavior: discbehavior,
            domain: domain,
            domainDescription: domainDescription,
            aim: aim,
            aimDescription: aimDescription,
            targetAge: targetAge,
            targetUser: targetUser,
            targetCategory: targetCategory,
            device: device,
            deviceDescription: deviceDescription,
            modality: modality,
            modalityDescription: modalityDescription,
            dynamics: dynamics,
            personalization: personalization,
            context: context,
            contextDescription: contextDescription,
            timing: timing,
            // timingDescription: timingDescription,
            // gameAction: aff[0],
            // condition: aff[1],
            affordances: affordances,
            rules: rules,
            aesthetics: aesthetics,
            draftId: draftID

          },
            {
              headers: {
                Authorization: "Bearer " + token
              }
            }).then((val) => {
              console.log("NEW:", val.data)
              setDraftID(val.data.draft._id)
              setAllertBool(true)
              console.log(allertBool)
            }
            )
        }
        else {
          axios.patch(url + "/draft/" + draftID, {

            title: query.name,
            description: query.description,
            behavior: behavior,
            discbehavior: discbehavior,
            domain: domain,
            domainDescription: domainDescription,
            aim: aim,
            aimDescription: aimDescription,
            targetAge: targetAge,
            targetUser: targetUser,
            targetCategory: targetCategory,
            device: device,
            deviceDescription: deviceDescription,
            modality: modality,
            modalityDescription: modalityDescription,
            dynamics: dynamics,
            personalization: personalization,
            context: context,
            contextDescription: contextDescription,
            timing: timing,
            // timingDescription: timingDescription,
            // gameAction: aff[0],
            // condition: aff[1],
            affordances: affordances,
            rules: rules,
            aesthetics: aesthetics,
            draftId: draftID,
          },
            {
              headers: {
                Authorization: "Bearer " + token
              }
            })
            .then((val) => {
              console.log("PATCH:", val.data)
              setAllertBool(true)
              console.log(allertBool)
            })
        }
      } else console.log("NO DRAFTING")
    })
  },
    [
      timing,
      context,
      contextDescription,
      modality,
      modalityDescription,
      dynamics,
      personalization,
      domain,
      domainDescription,
      behavior,
      discBehavior,
      aim,
      aimDescription,
      targetAge,
      targetUser,
      targetCategory,
      device,
      deviceDescription,
      affordances,
      aesthetics,
      images,
      rules,
    ])


  // Start saving the paper after 10 seconds that u open it 
  useEffect(() => {
    console.log("0n:in the start useEffect")
    if (query.draftID) {
      axios({
        method: "get",
        url: url + "/draft/" + draftID,
        headers: { Authorization: "Bearer " + token },
      })
        .then((val) => {
          setName(val.data.draft.Title)
          setDescription(val.data.draft.Description)
          setBehavior(val.data.draft.Behavior)
          setDomain(val.data.draft.Domain)
          setDomainDescription(val.data.draft.DomainDescription)
          setAim(val.data.draft.Aim)
          setAimDescription(val.data.draft.AimDescription)
          setTargetAge(val.data.draft.TargetAge)
          setTargetUser(val.data.draft.TargetUser)
          setTargetCategory(val.data.draft.TargetCategory)
          setDevice(val.data.draft.Device)
          setDeviceDescription(val.data.draft.DeviceDescription)
          setModality(val.data.draft.Modality)
          setDynamics(val.data.draft.Dynamics)
          setPersonalization(val.data.draft.Personalization)
          setContext(val.data.draft.Context)
          setContextDescription(val.data.draft.ContextDescription)
          setTiming(val.data.draft.Timing)
          // setTimingDescription(val.data.draft.TimingDescription)
          setAffordances(val.data.draft.Affordances)
          setRules(val.data.draft.Rules)
          setAesthetics(val.data.draft.Aestethics)
          console.log("Affordances server data: ", val.data.draft.Affordances)
        })
      setDraftID(query.draftID)
    }
    setTimeout(() => {
      console.log("timer is up (from start timer)")
      setTimer(true)
    }, 10000); // 10s 
  }, [])


  return (
    <div className="flex flex-col justify-between h-screen ">
      <Snackbar
        open={allertBool}
        autoHideDuration={5000}
        onClose={() => { setAllertBool(false) }}
      >
        <Alert severity="info" >
          Paper saved as a Draft
        </Alert>
      </Snackbar>

      <Snackbar
        open={snackBool}
        autoHideDuration={5000}
        onClose={() => { setSnackBool(false) }}
      >
        <Alert severity="error" >
          Too many game elements
        </Alert>
      </Snackbar>



      <Head>
        <title>GamiDoc</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header url={url} token={token} />
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
                      Affordances
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
                      Dynamics
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
                      Aestethics
                    </div>
                  )}
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <Context
                    aim={aim}
                    setAim={setAim}
                    aimDescription={aimDescription}
                    setAimDescription={setAimDescription}

                    domain={domain}
                    setDomain={setDomain}
                    domainDescription={domainDescription}
                    setDomainDescription={setDomainDescription}

                    targetAge={targetAge}
                    setTargetAge={setTargetAge}

                    targetUser={targetUser}
                    setTargetUser={setTargetUser}

                    targetCategory={targetCategory}
                    setTargetCategory={setTargetCategory}

                    behavior={behavior}
                    setBehavior={setBehavior}
                    discBehavior={discBehavior}
                    setDiscBehavior={setDiscBehavior}

                    selectObj1={KoivistoHamari}
                    selectObj2={Aimo}
                    selectObj3={ageSelection}
                    selectObj4={categorySelection}
                    saveDraft={saveDraft}
                  />
                </Tab.Panel>
                <Tab.Panel>
                  <Device
                    device={device}
                    setDevice={setDevice}
                    deviceDescription={deviceDescription}
                    setDeviceDescription={setDeviceDescription}
                    DeviceSelection={DeviceSelection}
                    saveDraft={saveDraft}
                  />
                </Tab.Panel>
                <Tab.Panel>
                  <Modality
                    modality={modality}
                    setModality={setModality}
                    modalityDescription={modalityDescription}
                    setModalityDescription={setModalityDescription}
                    selectObj1={modes}
                    saveDraft={saveDraft}
                  />
                </Tab.Panel>
                <Tab.Panel>
                  <Rules
                    rules={rules}
                    setRules={setRules}
                    saveDraft={saveDraft}
                  />
                </Tab.Panel>
                <Tab.Panel>
                  <Affordances
                    affordances={affordances}
                    setAffordances={setAffordances}
                    affordancesSelection={affordancesSelection}
                    saveDraft={saveDraft}
                    snackBool={snackBool}
                    setSnackBool={setSnackBool}
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
                    saveDraft={saveDraft}
                  />
                </Tab.Panel>
                <Tab.Panel>
                  <Dynamics
                    dynamics={dynamics}
                    setDynamics={setDynamics}
                    saveDraft={saveDraft}
                  />
                </Tab.Panel>
                <Tab.Panel>
                  <Personalization
                    personalization={personalization}
                    setPersonalization={setPersonalization}
                    saveDraft={saveDraft}
                  />
                </Tab.Panel>
                <Tab.Panel>
                  <Aesthetics
                    aesthetics={aesthetics}
                    setAesthetics={setAesthetics}
                    images={images}
                    setImages={setImages}
                    imgUrl={imgUrl}
                    setImgUrl={setImgUrl}
                    saveDraft={saveDraft}
                  />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>

          <div className="flex flex-row justify-center items-center mb-10 mr-2">
            <Pdf
              // Indice e token auth 
              selectedIndex={selectedIndex}
              token={token}
              imgUrl={imgUrl}
              url={url}

              // Dati paper presi come props  
              name={name}
              description={description}

              // Stati delle tabs 
              behavior={behavior}
              discBehavior={discBehavior}
              domain={domain}
              domainDescription={domainDescription}
              aim={aim}
              aimDescription={aimDescription}
              targetAge={targetAge}
              targetUser={targetUser}
              targetCategory={targetCategory}

              device={device}
              deviceDescription={deviceDescription}
              modality={modality}
              modalityDescription={modalityDescription}
              dynamics={dynamics}
              personalization={personalization}

              timing={timing}
              // timingDescription={timingDescription}
              context={context}
              contextDescription={contextDescription}

              affordances={affordances}
              rules={rules}
              aesthetics={aesthetics}
              draftID={draftID}
            />
            <div className="grow flex-row flex gap-5 items-center justify-end">
              <div
                className="py-4 inline-block px-8 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-gray-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out "
                onClick={() => {
                  if (selectedIndex == 0) setSelectedIndex(8);
                  else setSelectedIndex(selectedIndex - 1);
                }}
              >
                <h1 className="font-bold py-0.5 px-2 ">Previous</h1>
              </div>
              <div
                className={
                  selectedIndex == 8
                    ? " invisible"
                    : " py-4 inline-block px-8 bg-yellow-gamy text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
                }
                onClick={() => {
                  if (selectedIndex == 8) setSelectedIndex(0);
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
    </div>
  );
})
