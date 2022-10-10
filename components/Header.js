import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from "next/image";
import { useRouter } from "next/router";
import { useUser } from '@auth0/nextjs-auth0';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import axios from "axios"

// Sweetalert2
import Swal from "sweetalert2"
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal) // semplice wrapper

// Mui menu stuff 
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

// Menu icons 
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import RateReviewsIcon from '@mui/icons-material/RateReview';
import ReviewsIcon from '@mui/icons-material/Reviews';
import GradingIcon from '@mui/icons-material/Grading';
import ModeIcon from '@mui/icons-material/Mode';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpen from '@mui/icons-material/MenuOpen';
const sanityIoImageLoader = () => {
  return `https://i.imgur.com/Y3QF08D.png`;
};

export default function Header({ url, token }) {
  const router = useRouter();
  const { user, error, isLoading } = useUser();
  const [drafts, setDrafts] = useState()
  const [selected, setSelected] = useState()
  useEffect(() => {
    if (user)
      axios({
        method: "get",
        url: url + "/draft/me",
        headers: { Authorization: "Bearer " + token }
      }).then((val) => {
        setDrafts(val.data.Drafts)
      })
  }, [user])

  // Menu states and callbacks 
  const [open, setOpen] = useState(null)
  const menuValue = Boolean(open);
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };
  const theme = createTheme({
    palette: {
      secondary: {
        main: '#FFB900',
        font: "bold"
      },
      primary: {
        main: '#374151',
        font: "bold"
      },
      black: {
        main: '#000000',
        font: "bold"
      },
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="relative px-24 xs:px-8 py-9 flex flex-wrap items-center justify-between mb-3">
        <Link href="/">
          <Image
            loader={sanityIoImageLoader}
            src="image-src"
            alt="GamiDoc"
            width={139}
            height={24}
          />
        </Link>
        <div className="flex flex-row gap-5" id="button">
          {(!user) ?
            <button
              className="py-4 inline-block px-8 xs:px-4 xs:py-2 
                     bg-yellow-gamy text-white font-medium text-xs leading-tight 
                     uppercase rounded-full shadow-md  hover:bg-gray-gamy hover:shadow-lg
                     focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 
                     active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
            >
              <Link href="/api/auth/login">
                <a>
                  Login
                </a>
              </Link>
            </button> :
            <div className="fixed top-5 right-5 text-right">
              < div className="w-max rounded-full  flex items-center p-2 m-2 font-xl" > {/* shadow-xl border border-gray-gamy */}
                < Image alt="pfp" src={user.picture} width={35} height={35} className="rounded-full" />
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  {(open) ? <MenuOpen fontSize='large' color="primary" /> : <MenuIcon fontSize='large' color="black" />}
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={open}
                  open={menuValue}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                  className="mt-5 "
                >
                  <MenuItem
                    className=" text-left text-lg font-semibold text-black font-sans px-3 py-5 ring ring-transparent outline-none hover:underline hover:font-semibold"
                    onClick={() => {
                      handleClose()
                      router.push({ pathname: "/feed", })
                    }
                    }>
                    <ListItemIcon >
                      <RateReviewsIcon color="primary" />
                    </ListItemIcon >
                    <ListItemText color="primary">
                      Review
                    </ListItemText>
                  </MenuItem>
                  <MenuItem
                    className=" text-left text-lg font-semibold text-black font-sans px-3 py-5 ring ring-transparent outline-none hover:underline hover:font-semibold"
                    onClick={() => {
                      router.push({ pathname: "/yourReviews" })
                      handleClose()
                    }
                    }>
                    <ListItemIcon >
                      <ReviewsIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText color="primary">
                      Your Reviews
                    </ListItemText>
                  </MenuItem>
                  <MenuItem
                    className=" text-left text-lg font-semibold text-black font-sans px-3 py-5 ring ring-transparent outline-none hover:underline hover:font-semibold"
                    onClick={() => {
                      router.push({ pathname: "/display", query: { me: 1 } })
                      handleClose()
                    }
                    }>
                    <ListItemIcon >
                      <ArticleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText color="primary">
                      Your Papers
                    </ListItemText>
                  </MenuItem>
                  <MenuItem
                    className=" text-left text-lg font-semibold text-black font-sans px-3 py-5 ring ring-transparent outline-none hover:underline hover:font-semibold"
                    onClick={() => {
                      // router.push({ pathname: "/display", query: { me: 1 } })
                      axios({
                        method: "get",
                        url: url + "/draft/me",
                        headers: { Authorization: "Bearer " + token }
                      }).then((val) => {
                        setDrafts(val.data.resDrafts)
                        MySwal.fire({
                          html: (
                            <div className='flex-col items-center justify-center gap-3'>
                              <p>
                                Your Drafts:
                              </p>
                              {drafts.map((item) => {
                                return (
                                  <button
                                    key={item.id}
                                    className="flex items-center gap-2 font-bold rounded-xl border-2 justify-center shadow-md "
                                    onClick={() => setSelected(item._id)}
                                  >
                                    <p>
                                      {item.Title}
                                    </p>
                                    <p>
                                      {item.Description}
                                    </p>
                                    <div>
                                      {item._id}
                                    </div>
                                  </button>)
                              })}
                            </div>
                          )
                        })
                          .then((val) => {
                            router.push({ pathname: "/form", query: { draftID: selected } })
                          })
                      })
                        .catch((err) => Swal.fire('Server Error!', '', 'error'))
                      handleClose()
                    }
                    }>
                    <ListItemIcon >
                      <ModeIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText color="primary">
                      Drafts
                    </ListItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    className=" text-left text-lg font-semibold text-black font-sans px-3 py-5 ring ring-transparent outline-none hover:underline hover:font-semibold"
                    onClick={() => {
                      // router.push({ pathname: "/feed", })
                      handleClose()
                    }
                    }>
                    <ListItemIcon>
                      <PersonIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText color="primary">
                      {
                        (user.name.search("@")) ?
                          user.name.split("@")[0] : user.name
                      }
                    </ListItemText>
                  </MenuItem>

                  <MenuItem
                    className=" text-left text-lg font-semibold text-black font-sans px-3 py-2 ring ring-transparent outline-none hover:underline hover:font-semibold"
                    onClick={() => {
                      let a = document.createElement("a")
                      a.href = "/api/auth/logout"
                      a.click()
                    }
                    }>
                    <ListItemIcon >
                      <ExitToAppIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText color="primary" >
                      Logout
                    </ListItemText>
                  </MenuItem>
                </Menu>
              </div >
            </div>
          }
        </div >
      </div >
    </ThemeProvider >
  );
}

