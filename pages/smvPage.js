// Classici import 
import { useState, useEffect, useRef } from "react"
import axios from "axios"
import Header from "../components/Header";
// import { ArchiveBoxArrowDownIcon } from "@heroicons/react/24/solid/ArchiveBoxArrowDownIcon"

// Componente per generare Grafi 
import GraphConverter from "../components/GraphConverter"

// Componente per trasformare elementi in canvas, che successivamente 
// trasformiamo in blob e scarichiamo 
import html2canvas from "html2canvas"

// Componente per scaricare blob senza dovere usare <a> che sono un cancro in next 
import FileSaver from "file-saver"

// Funzione che ci trasforma l'input per essere adatto a essere inviato in un json
async function SMVtoJSON(event) {
  const file = event.target.files.item(0)
  const content = await file.text();
  return content.replace(/\n/g, "\\\\n")
}

// Il componente ! 
export default function SmvPage() {
  const [text, setText] = useState("")  // Stato per testo in Input
  const [output, setOutput] = useState("") // Stato per testo in Output
  const [graph, setGraph] = useState("") // Stato che contiene solo il testo del Grafo 
  const [fileName, setFileName] = useState("") // Stato che contiene solo il testo del Grafo 

  // useRef per i blobs dei due file di testo 
  var blob = useRef()
  var graphBlob = useRef()
  // useEffect  che avviene ogni nuova traduzione aggiorna blob output e lo stato graph  

  useEffect(() => {
    if (output != "") {
      blob.current = new Blob([output]);
      let noBoilerPlate = output.split("digraph")
      setGraph("digraph " + noBoilerPlate[1])
    }
  }, [output])

  // Aggiorna il blob del grafo solo quando viene effettivamente aggiornato lo stato del grafo !
  useEffect(() => {
    if (graph != "") graphBlob.current = new Blob([graph]);
  }, [graph])


  // Il jsx del componente ! 
  return (
    <div >
      {/* <Header /> */}
      <div className="flex justify-center m-2 items-center gap-3">

        {(text == "") ? <></> :
          <button
            onClick={
              async () => await axios.post(process.env.SMV_ENDPOINT + "/converter/convert", { "data": text })
                .then((response) => {
                  // console.log(response)
                  if (response.data.Data.search("syntools") != -1) {
                    let noBoilerPlate = response.data.Data.split("Please report bugs to <support@astroproject.org>.")
                    setOutput(noBoilerPlate[1])
                  } else setOutput("error")
                })
                .catch((err) => {
                  console.log(err)
                })
            }
            className="py-4 inline-block px-8 xs:px-4 xs:py-2 bg-yellow-gamy text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
          >
            Genera
          </button>}

        {(output == "") ? <></> :
          <button
            className="py-4 inline-block px-8 xs:px-4 xs:py-2 bg-yellow-gamy text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => {
              FileSaver.saveAs(blob.current, fileName + "_full.dot")
            }}
          >
            Full Download .dot
          </button>

        }

        {(graph == "") ? <></> :
          <>
            <button
              className="py-4 inline-block px-8 xs:px-4 xs:py-2 bg-yellow-gamy text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
              onClick={() => {
                FileSaver.saveAs(graphBlob.current, fileName + "_graph.dot")
              }}
            >
              Graph Download .dot
            </button>
            <button
              className="py-4 inline-block px-8 xs:px-4 xs:py-2 bg-yellow-gamy text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
              onClick={async () => {
                try {
                  let canvas = await html2canvas(document.querySelector("#graph"));
                  canvas.toBlob((blob) => {
                    FileSaver.saveAs(blob, fileName + "_graph.jpg")
                  }, 'image/jpeg', 0.95);
                } catch (err) {
                  console.log(err)
                }
              }}
            >
              Download Graph Image
            </button>
          </>
        }
      </div>
      <div className="flex w-screen gap-3 justify-evenly">
        <div className="flex-col ">
          <input type="file"
            onChange={async (event) => {
              let val = await SMVtoJSON(event)
              setText(val)
              val = event.target.files.item(0).name.split(".")
              setFileName(val[0])
              console.log(fileName)
            }}
            className="flex-col justify-center items-center border-2" />
          <div id="graph">
            {(graph != "") ?
              <GraphConverter graph={graph} />
              : ""}
          </div>
        </div>
        <div className="w-1/3  flex-col items-center ">
          <span className="flex justify-center items-center font-bold text-xl border-2">
            .SMV
          </span>
          {(text != "") ?
            <div className="w-full h-full text-sm p-2 border-2" >
              {text}
            </div> : <></>}
        </div>
        <div className=" w-1/3 flex-col  items-center " >
          <span className="flex justify-center items-center font-bold text-xl border-2 ">
            .DOT
          </span>
          {(output != "") ?
            <div className="w-full  h-full text-sm p-2 border-2" >
              {output}
            </div> : <></>}
        </div >
      </div >
    </div >
  )
}
