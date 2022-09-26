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
        className="pl-3 hover:bg-yellow-gamy hover:text-white rounded-lg "
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
            className=" flex justify-center items-center rounded-lg shadow-md hover:font-semibold hover:bg-blue-300 hover:underline w-1/3 mt-3"
            onClick={() => {
              router.push({
                pathname: "/reviewPdf",
                query: { id: id, me: me }
              })
            }}
          >
            Open
          </div>
        </div>
      </CardContent>
    </Card >
  )

}
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
{/* <CardActions> */ }
{/* <Button */ }
{/*           size="small" */ }
{/*           className="my-3 flex justify-center items-center" */ }
{/*           onClick={() => { */ }
{/*             router.push({ */ }
{/*               pathname: "/reviewPdf", */ }
{/*               query: { id: id, me: me } */ }
{/*             }) */ }
{/*           } */ }
{/*           } */ }
{/*         > */ }
{/*           Open */ }
{/*         </Button> */ }
{/* </CardActions> */ }
