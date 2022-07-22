import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

import dynamic from "next/dynamic";
const Pdf = dynamic(() => import("../components/CreatePDF"), { ssr: false });

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Home() {

  const router = useRouter();
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <div className="text-center ">
        <h1 className=" text-3xl  font-bold">
          Lets start with the name:
        </h1>
        <Box className="py-8" component="form" noValidate required autoComplete="off">
          <TextField id="outlined-basic" label="GamiDoc" variant="outlined" />
        </Box>
        <button
          onClick={() => router.push("/form")}
          className=" py-4 inline-block px-8 bg-yellow-gamy xs:px-6 xs:py-3 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
        >
          Form
        </button>
      </div>
      <Footer />
    </div>
  );
}
