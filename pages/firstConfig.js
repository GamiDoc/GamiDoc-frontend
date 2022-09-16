import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getSession } from "@auth0/nextjs-auth0"
import Image from "next/image";
import axios from "axios"
import { useState } from "react"
import router from "next/router"
export function getServerSideProps({ req, res }) {
  let url = (process.env.SECURE) ? "http://" : "https://"
  url = url + process.env.BACK_ENDPOINT + "/user/firstConfig"
  const session = getSession(req, res)
  if (!session) return { props: {} }
  return { props: { accessToken: session.accessToken, user: session.user, url: url } }
}

export default function FirstConfig({ user, accessToken, url }) {
  const [userNameState, setUserNameState] = useState("")
  const [bioState, setBioState] = useState("")

  const sanityIoImageLoader = ({ src, width, quality }) => {
    return `https://i.imgur.com/Y3QF08D.png`;
  };

  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          GamiDOC
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  // const theme = createTheme();

  const sendData = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log(data)

    axios.post(url, {
      username: userNameState,
      description: bioState,
    }
      , {
        headers: {
          Authorization: 'Bearer ' + accessToken
        }
      })
      .then(() => router.replace("/"))
      .catch((err) => { console.error(err) })
  }

  return (
    <div>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link href="/">
            <Image
              loader={sanityIoImageLoader}
              src="image-src"
              alt="GamiDoc"
              width={119 * 1.5}
              height={20 * 1.5}
            />
          </Link>
          <Box
            component="form"
            onSubmit={sendData}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              defaultValue={user.email}
              placeholder={user.email}
              disabled
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="UserName"
              name="userName"
              autoFocus
              helperText="Please enter your prefered UserName"
              onChange={(val) => { setUserNameState(val.target.value) }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Bio"
              label="Bio"
              id="Bio"
              multiline
              helperText="A few lines to describe you and your work!"
              onChange={(val) => { setBioState(val.target.value) }}
            />
            <button
              className="py-4 inline-block px-8 bg-yellow-gamy text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
              type="submit"
            >
              Subscribe
            </button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </div>

  )
}

