// import { useRouter } from "next/router"
import { useEffect, useRef } from "react"

export default function ReviewBox({ paper, review }) {
  // const router = useRouter()
  let counter = useRef(0);
  useEffect(() => {
    counter.current = 0
  }, [])
  return (
    <div className="rounded-md flex-col justify-center items-start shadow-black shadow-md bg-slate-300">
      <div className=" flex gap-2 items-center justify-start m-2">
        <p>
          {"Review of the paper: " + paper.Title}
        </p>
        <p>
          {"Written by " + paper.AuthorNickname}
        </p>
      </div>
      <p>
        {"Comment: " + review.Comment}
      </p>
      <div className=" flex gap-2 items-center justify-start m-2">
        {"Values: "}
        {
          review.Params.map((element) => {
            return (<p key={element.id} className="mr-0.5">{element}</p>)
          })
        }
        < p >
          {"Approved: " + review.Approved}
        </p>
      </div>
    </div >
  )
} 
