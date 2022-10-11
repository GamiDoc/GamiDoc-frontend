import { useState, useEffect } from "react"
import { getSession } from "@auth0/nextjs-auth0"
import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ReviewBox from "../components/ReviewBox"
import { Divider } from '@mui/material';
import axios from "axios"

export const getServerSideProps = ({ req, res }) => {
  let url = (process.env.SECURE) ? "https://" : "http://"
  url = url + process.env.BACK_ENDPOINT
  const session = getSession(req, res)
  return ({ props: { token: session.accessToken, url: url } })
}

export default function YourReviews({ token, url }) {
  const [reviews, setReviews] = useState()
  useEffect(() => {
    axios({
      method: "get",
      url: url + "/paper/reviews/user",
      headers: { Authorization: "Bearer " + token }
    })
      .then((val) => {
        console.log(val)
        setReviews([...val.data.reviews])
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  console.log(reviews)
  if (reviews)
    return (
      <div className="flex flex-col gap-3 h-screen">
        <Header url={url} token={token} />

        <div className="flex-1">
          {(reviews[0]) ?
            <div>

              <p className=" flex justify-center text-4xl font-semibold font-sans mb-5 ">
                Your Reviews:
              </p>
              <div className=" flex items-center justify-center mb-3 ">
                <Divider className="w-2/3" />
              </div>

              <div className="flex-1 flex justify-center items-center w-full">
                <div className="m-3 grid gap-2  grid-cols-3  w-2/3 auto-cols-max auto-rows-max">
                  {reviews.map((review) => {
                    return (
                      <ReviewBox key={review.id} review={review} paper={review.Paper} />
                    )
                  })}
                </div>
              </div>

            </div>
            :
            <div className=" flex-col font-extrabold text-2xl flex justify-center items-center flex-1">
              <p>
                NO REVIEWS YET
              </p>
              <br />
              <Link href="/feed">
                <a className="text-yellow-gamy underline hover:font-extrabold hover:text-yellow-600">
                  Make One!
                </a>
              </Link >
            </div>
          }
        </div>
        <Footer />
      </div >
    )
}
