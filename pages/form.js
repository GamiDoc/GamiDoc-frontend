import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import NavbarIcon from "../components/NavbarIcon";
import dynamic from "next/dynamic";
const Pdf = dynamic(() => import("../components/CreatePDF"), { ssr: false });

export default function Home() {
  const [selected, setSelected] = useState(1);
  function handleSwitch() {
    switch (selected) {
      case 1:
        return (
          <div className="grid grid-cols-2 gap-2">
            <div className="mb-2 mx-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-2 mx-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="mx-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Cose
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="cosa"
                placeholder="cose"
              />
            </div>
            <div className="mx-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Cose2
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="cosa2"
                type="text"
                placeholder="troppe cose"
              />
            </div>
          </div>
        );
      case 2:
        return <div> ciao2</div>;
      case 3:
        return <div> ciao3</div>;
      case 4:
        return <div> ciao4</div>;
    }
  }

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div className="flex flex-col items-center w-screen justify-center h-screen">
        <div className="flex flex-col justify-center">
          <div className="flex flex-row justify-center items-center gap-32 text-2xl py-3">
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

          <div className="h-80 flex justify-center items-center w-full">
            {handleSwitch()}
          </div>

          <div className="flex flex-row justify-end gap-5 mb-2 mr-2">
            <Pdf content="ciao" />
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
