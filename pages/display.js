import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0"
import { useRouter } from "next/router"
import Header from "../components/Header"
import PaperBox from "../components/PaperBox"
import axios from "axios"
import { useState, useEffect } from "react"

export const getServerSideProps = ({ req, res }) => {
  const session = getSession(req, res)
  let url = (process.env.SECURE) ? "https://" : "http://"
  url = url + process.env.BACK_ENDPOINT
  if (!session) return { props: { url: url } }
  return ({ props: { token: session.accessToken, url: url } })
}



export default function Display({ token, url }) {
  const [data, setData] = useState([])
  const { query } = useRouter()
  const { me, keyword, userID } = query

  // Fetch Only once 
  useEffect(() => {
    if (me)
      axios({
        method: "get",
        url: url + `/paper/all/me`,
        headers: { Authorization: "Bearer " + token }
      }).then((res) => {
        setData([...res.data.data])
        console.log(data)
      })
    if (userID)
      axios({
        method: "get",
        url: url + `/paper/all/${userID}`,
        headers: { Authorization: "Bearer " + token }
      }).then((res) => {
        setData([...res.data.data])
        console.log(data)
      })
    if (keyword)
      axios({
        method: "get",
        url: url + `/paper/search/${keyword}/1`,
        headers: { Authorization: "Bearer " + token }
      }).then((res) => {
        setData([...res.data.data])
        console.log(data)
      })
  }, [])

  return (
    <div className="w-full m-2 grid gap-2 flex-col">
      <Header />
      {(data) ?
        <div className="m-3 grid gap-2  grid-cols-5  auto-cols-max auto-rows-max">
          {data.map((val) => {
            return (
              <PaperBox key={val.id} me={me} id={val._id} author={val.Author} title={val.Title} description={val.Description} />
            )
          })}
        </div>
        : "Loading..."}
    </div>
  )
}
