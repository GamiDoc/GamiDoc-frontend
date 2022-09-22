import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/router"
import { getSession } from "@auth0/nextjs-auth0"
import PdfDisplayer from "../components/PdfDisplayer"
import TextField from "@mui/material/TextField"
import Header from "../components/Header"
import axios from "axios"



export const getServerSideProps = ({ req, res }) => {
  let url = (process.env.SECURE) ? "https://" : "http://"
  url = url + process.env.BACK_ENDPOINT
  const session = getSession(req, res)
  return ({ props: { token: session.accessToken, url: url } })
}

export default function ReviewPDF({ token, url }) {
  const [pdfBlob, setPdfBlob] = useState("")
  const [paperMetaData, setPaperMetaData] = useState("")
  const [review, setReview] = useState("")
  const { query } = useRouter()

  useEffect(() => {
    const paperID = query.id
    axios({
      method: "get",
      url: url + `/paper/${paperID}`,
      headers: { Authorization: "Bearer " + token }
    })
      .then((res) => {
        console.log(res.data)
        setPaperMetaData(res.data.info)
        const data = new Buffer.from(res.data.pdf.data, "base64")
        setPdfBlob(data)
      })
      .catch(err => console.log(err))
  }, [])

  if (paperMetaData.Title != null)
    return (
      <div className="flex-col gap-2 justify-center ">
        <Header />
        <div className="flex row gap-0.5">
          <p className="font-bold text-xl ml-4 text-black">
            {paperMetaData.Title}
          </p>
          <p className="font-semibold text-sm text-gray-500 ">
            {paperMetaData.Description}
          </p>
        </div>

        {(pdfBlob != null) ? <PdfDisplayer pdfBlob={pdfBlob} /> : ""}
        <TextField
          id="outlined-basic"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          label="Description"
          multiline
          rows={5}
          variant="outlined"
        />
        <div>
        </div>
      </div>
    )
}
