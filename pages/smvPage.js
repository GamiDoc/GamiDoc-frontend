// import SMVtoJSON from "../components/UseSMVtoJSON"
import { useState } from "react"
import axios from "axios"

async function SMVtoJSON(event) {
  const file = event.target.files.item(0)
  const content = await file.text();
  console.log(content);
  return content.replace(/\n/g, "\\\\n")
}


export default function smvPage() {
  const [text, setText] = useState("")
  const [output, setOutput] = useState("")
  return (
    <div className="flex w-screen gap-5">
      <div className="flex-col gap-2 items-center w-1/3 h-1/3 border-2">
        <input type="file"
          onChange={async (event) => {
            let val = await SMVtoJSON(event)
            setText(val)
          }}
          className="w-full" />
        {(text == "") ? "" : <button
          onClick={
            async () => await axios.post("https://provadocker1234.herokuapp.com/converter/convert", { "data": text })
              .then((response) => {
                console.log(response)
                setOutput(response.data.Data)
              })
              .catch((err) => {
                console.log(err)
              })
          } > convert </button>}
      </div>
      <div className="w-1/3 h-full border-2 flex-col items-center ">
        <span className="flex justify-center items-center font-bold text-xl border-2">
          SMV file
        </span>
        <div className="w-full h-full " >
          {text}
        </div>
      </div>
      <div className="border-2 w-1/3 h-full flex-col  items-center " >
        <span className="flex justify-center items-center font-bold text-xl border-2 ">
          DOT file
        </span>
        <div className="w-full  h-full " >
          {output}
        </div>
      </div >
    </div >
  )
}
