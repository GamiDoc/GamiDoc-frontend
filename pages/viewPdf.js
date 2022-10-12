import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/router"
import { getSession } from "@auth0/nextjs-auth0"
import PdfDisplayer from "../components/PdfDisplayer"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import axios from "axios"

export const getServerSideProps = ({ req, res }) => {
  let url = (process.env.SECURE) ? "https://" : "http://"
  url = url + process.env.BACK_ENDPOINT
  const session = getSession(req, res)
  return ({ props: { token: session.accessToken, url: url } })
}

export default function ViewPdf({ token, url }) {
  // States that hold all the content fetched from the server 
  const [pdfBlob, setPdfBlob] = useState("")
  const [paperMetaData, setPaperMetaData] = useState("")

  // Url and router stuff
  const { query } = useRouter()
  const paperID = query.id

  useEffect(() => {
    axios({
      method: "get",
      url: url + `/paper/${paperID}`,
      headers: { Authorization: "Bearer " + token }
    })
      .then((res) => {
        setPaperMetaData(res.data.info)
        setPdfBlob(res.data.pdf.data)
      })
      .catch(err => console.log(err))
  }, [])

  const theme = createTheme({
    palette: {
      secondary: {
        main: '#FFB900'
      },
      primary: {
        main: '#374151'
      },
    }
  });

  if (paperMetaData.Title != null)
    return (
      <ThemeProvider theme={theme}>
        <Header url={url} token={token} />
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
              <p className="font-bold text-2xl text-black flex items-center justify-center">
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
        </div>

        <div className="flex justify-center items-center">
          <div
            onClick={() => {
              // console.log("Download PlaceHolder")
              const data = new Buffer.from(pdfBlob, "base64")
              const blob = new Blob([data])
              const fileURL = window.URL.createObjectURL(blob);
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = `${paperMetaData.Title}.pdf`;
              alink.click();
            }}
            disabled={pdfBlob == null}
            className=" py-4 inline-block px-8 xs:px-4 xs:py-2 bg-yellow-gamy text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-gray-gamy hover:shadow-xl focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
          >
            Download Now!
          </div>
        </div>

        <div className="mt-5 mb-5 flex items-center justify-center">
          {(pdfBlob != null) ? <PdfDisplayer pdfBlob={pdfBlob} /> : ""}
        </div>
        <Footer />
      </ThemeProvider >
    )
}
