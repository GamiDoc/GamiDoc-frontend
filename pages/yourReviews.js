import { useState, useEffect } from "react"
import { getSession } from "@auth0/nextjs-auth0"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ReviewBox from "../components/ReviewBox"
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
      <div className="flex-col gap-3 h-screen">
        <Header url={url} token={token} />
        <div className=" flex-1 flex-col justify-center gap-4 mb-3">
          {(reviews[0]) ?
            reviews.map((review) => {
              return (
                <ReviewBox key={review.id} review={review} paper={review.Paper} />
              )
            }) :
            <div className=" font-extrabold text-2xl flex justify-center items-center flex-1">
              NO REVIEWS
            </div>
          }
        </div>
        <Footer />
      </div>
    )
}
