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
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    axios({
      method: "get",
      url: url + "/paper/reviews/user",
      headers: { Authorization: "Bearer " + token }
    })
      .then((val) => {
        setReviews([...val.data.reviews])
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  if (reviews)
    return (
      <div >
        <Header />
        <div className="flex justify-center w-full items-center">
          <div className=" flex-col justify-center gap-4 mb-3">
            {reviews.map((review) => {
              return (
                <ReviewBox key={review.id} review={review} paper={review.Paper} />
              )
            })}
          </div>
        </div>
        <Footer />
      </div>
    )
}
