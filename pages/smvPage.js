import { useState, useEffect, useRef } from "react"
import axios from "axios"
import FileSaver from "file-saver"
import Header from "../components/Header";

async function SMVtoJSON(event) {
  const file = event.target.files.item(0)
  const content = await file.text();
  console.log(content);
  return content.replace(/\n/g, "\\\\n")
}

export default function SmvPage() {
  const [text, setText] = useState("")
  const [output, setOutput] = useState("")
  const [url, setUrl] = useState()
  var blob = useRef()
  useEffect(() => {
    blob.current = new Blob([output]);
    // setUrl(URL.createObjectURL(blob));
  }, [output])
  return (
    <div >
      <Header />
      <div className="flex justify-center m-2 items-center gap-2">
        {(text == "") ? <></> :
          <button
            onClick={
              async () => await axios.post("https://provadocker1234.herokuapp.com/converter/convert", { "data": text })
                .then((response) => {
                  console.log(response)
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
          > convert </button>}

        {(output == "") ? <></> :
          <button
            className="py-4 inline-block px-8 xs:px-4 xs:py-2 bg-yellow-gamy text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => {
              // const blob = new Blob([output])
              FileSaver.saveAs(blob.current, "output.dot")
            }}
          >
            Download
          </button>
        }
      </div>
      <div className="flex w-screen gap-5">
        <div className="flex gap-2 items-center w-1/3 h-1/3 justify-center">
          <input type="file"
            onChange={async (event) => {
              let val = await SMVtoJSON(event)
              setText(val)
            }}
            className="flex-col justify-center items-center border-2" />
        </div>
        <div className="w-1/3 h-full  flex-col items-center ">
          <span className="flex justify-center items-center font-bold text-xl border-2">
            .SMV
          </span>
          {(text != "") ?
            <div className="w-full h-full text-sm p-2 border-2" >
              {text}
            </div> : <></>}
        </div>
        <div className=" w-1/3 h-full flex-col  items-center " >
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
