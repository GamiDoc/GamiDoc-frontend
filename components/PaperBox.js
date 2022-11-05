import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useRouter } from "next/router"

export default function PaperBox({ id, me, author, title, description }) {
  const router = useRouter()

  return (
    <Card sx={{ minWidth: 25 }}
    >
      <CardContent
        className="pl-3 hover:bg-gray-gamy hover:text-white rounded-xl font-sans "
      >
        <Typography sx={{ fontSize: 14 }} gutterBottom
          className="flex justify-center "
        >
          {author}
        </Typography>
        <Typography variant="h5" component="div"
          className="flex justify-center "
        >
          <p
            className="font-bold">
            {title}
          </p>
        </Typography>
        <Typography variant="body2"
          className="flex justify-center "
        >
          {description}
        </Typography>
        <div className='justify-center flex items-center'>
          <div
            className=" flex justify-center items-center rounded-lg border-dotted hover:border-solid  hover:font-semibold hover:bg-yellow-gamy w-1/3 mt-3"
            onClick={() => {
              (me) ?
                router.push({
                  pathname: "/viewPdf",
                  query: { id: id }
                })
                :
                router.push({
                  pathname: "/reviewPdf",
                  query: { id: id }
                })
            }}
          >
            {(me) ? "Open" : "Review"}
          </div>
        </div>
      </CardContent>
    </Card >
  )
}
