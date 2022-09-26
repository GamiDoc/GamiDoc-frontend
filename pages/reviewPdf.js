import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/router"
import { getSession } from "@auth0/nextjs-auth0"
import PdfDisplayer from "../components/PdfDisplayer"
import TextField from "@mui/material/TextField"
import Header from "../components/Header"
import Footer from "../components/Footer"
import CustomSlider from "../components/CustomSlider"
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

  let reviewParams = []
  const [sliderValue, setSliderValue] = useState([])
  useEffect(() => {
    reviewParams[sliderValue[1]] = sliderValue[0]
  }, [sliderValue])

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
        setPdfBlob(res.data.pdf.data)
        // const data = new Buffer.from(res.data.pdf.data, "base64")
        // const blob = new Blob(res.data.pdf.data)
        // setPdfBlob(URL.createObjectURL(blob))
      })
      .catch(err => console.log(err))
  }, [])

  if (paperMetaData.Title != null)
    return (
      <>
        <Header />
        <div className="flex-col gap-5 justify-center items-center mb-5 ">
          <div className="flex justify-center items-baseline gap-2">
            <p className="font-light text-gray-500 ">
              Author:
            </p>
            <p className="font-semibold text-xl text-black flex items-center justify-center">
              {paperMetaData.Author}
            </p>
          </div>

          <div className="flex justify-center items-baseline gap-5 ml-5 mb-5">
            <>
              <p className="font-light text-gray-500 ">
                Title:
              </p>
              <p className="font-bold text-4xl text-black flex items-center justify-center">
                {paperMetaData.Title}
              </p>
            </>
            <>
              <p className="font-light text-gray-500 ">
                Description:
              </p>
              <p className="font-semibold text-sm text-gray-700  flex justify-start ">
                {paperMetaData.Description}
              </p>
            </>
          </div>

          <div className="flex gap-5 justify-center  ">
            {(pdfBlob != null) ? <PdfDisplayer pdfBlob={pdfBlob} /> : ""}
            <div className="flex-col w-1/3 justify-evenly items-baseline gap-10">
              <div className="flex justify-center items-center gap-3">
                <div
                  onClick={() => {
                    console.log("Send PlaceHolder")
                  }}
                  disabled={review == ""}
                  className="py-4 inline-block px-8 xs:px-4 xs:py-2 bg-yellow-gamy text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-blue-500 hover:shadow-xl focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Send
                </div>

                <div
                  onClick={() => {
                    console.log("Download PlaceHolder")
                  }}
                  disabled={pdfBlob == null}
                  className="py-4 inline-block px-8 xs:px-4 xs:py-2 bg-yellow-gamy text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-blue-500 hover:shadow-xl focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Download Now!
                </div>
              </div>
              <CustomSlider
                data={sliderValue}
                setState={setSliderValue}
                pos={0}
                type="Type1"
              />
              <CustomSlider
                data={sliderValue}
                setState={setSliderValue}
                pos={1}
                type="Type2"
              />
              <CustomSlider
                data={sliderValue}
                setState={setSliderValue}
                pos={2}
                type="Type3"
              />
              <TextField
                className="w-full"
                id="outlined-basic"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                label="Review"
                multiline
                rows={10}
                variant="outlined"
              />

            </div>
          </div>

          <div>
          </div>
        </div >
        <Footer />
      </>
    )
}
