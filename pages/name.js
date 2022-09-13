import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useState } from "react";
import MobileOffIcon from "@mui/icons-material/MobileOff";
import Head from "next/head";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { withPageAuthRequired } from "@auth0/nextjs-auth0"

export const getServerSideProps = withPageAuthRequired()

export default function Name() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="flex flex-col justify-between h-screen">
      <Head>
        <title>GamiDoc</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <h1 className="hidden items-center justify-center font-bold text-2xl xs:flex ">
        {" "}
        ONLY DESKTOP USE <MobileOffIcon />{" "}
      </h1>
      <div className="text-center xs:hidden">
        <h1 className=" text-3xl  font-bold">Lets start with the name:</h1>
        <Stack
          className="py-8 "
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
          noValidate
          required
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Paper Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            label="Description"
            multiline
            variant="outlined"
          />
        </Stack>
        <button
          disabled={name == "" || description == ""}
          onClick={() =>
            router.push({
              pathname: "/form",
              query: { name: name, description: description },
            })
          }
          className={
            name === ""
              ? "py-4 inline-block px-8 xs:px-6 xs:py-3 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md   focus:shadow-lg focus:outline-none focus:ring-0 bg-gray-500  transition duration-150 ease-in-out cursor-not-allowed"
              : "py-4 inline-block px-8 bg-yellow-gamy xs:px-6 xs:py-3 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
          }
        >
          Form
        </button>
      </div>
      <Footer />
    </div >
  );
}
