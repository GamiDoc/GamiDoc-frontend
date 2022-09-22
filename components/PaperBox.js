import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from "next/router"

export default function PaperBox({ id, me, author, title, description }) {
  const router = useRouter()

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {author}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            router.push({
              pathname: "/reviewPdf",
              query: { id: id, me: me }
            })
          }
          }
        >
          Open
        </Button>
      </CardActions>
    </Card >
  )

}
