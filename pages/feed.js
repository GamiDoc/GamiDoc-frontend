import { useState, useEffect, useRef } from "react"
import { getSession } from "@auth0/nextjs-auth0"
import Header from "../components/Header"
import Footer from "../components/Footer"
import PaperBox from "../components/PaperBox"
import { Divider } from '@mui/material';
import axios from "axios"

export const getServerSideProps = ({ req, res }) => {
  let url = (process.env.SECURE) ? "https://" : "http://"
  url = url + process.env.BACK_ENDPOINT
  const session = getSession(req, res)
  return ({ props: { token: session.accessToken, url: url } })
}


export default function Feed({ token, url }) {
  const [data, setData] = useState([])

  useEffect(() => {
    axios({
      method: "get",
      url: url + `/paper/feed`,
      headers: { Authorization: "Bearer " + token }
    })
      .then((res) => {
        setData([...res.data.data])
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <div className=" flex flex-col  h-screen">
      <Header url={url} token={token} />
      <div className="flex-1">
        <p className="flex justify-center text-4xl font-semibold font-sans mb-5 ">
          Pick a Paper to Review:
        </p>
        <div className="flex  justify-center mb-3 ">
          <Divider className="w-2/3" />
        </div>
        <div className="flex-1 flex justify-center ">
          <div className="m-3 grid gap-2  grid-cols-3  w-2/3 ">
            {data.map((val) => {
              return (
                <PaperBox key={val.id} id={val._id} author={val.Author} title={val.Title} description={val.Description} />
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div >



  )
}


