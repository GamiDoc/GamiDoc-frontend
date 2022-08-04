import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useState , useEffect} from "react";  
import MobileOffIcon from '@mui/icons-material/MobileOff';

import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function Name({nameP,setNameP}) {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between h-screen">
      
      <h1 className="hidden items-center justify-center font-bold text-2xl xs:flex "> ONLY DESKTOP USE <MobileOffIcon/> </h1>
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
            label="GamiDoc"
            value={nameP}
            onChange={(e) => setNameP(e.target.value)}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Description"
            multiline
            rows={3}
            variant="outlined"
          />
        </Stack>
        <button
          disabled={nameP == ""}
          //onClick={() => router.push("/form")}
          className={nameP === "" ? 'py-4 inline-block px-8 xs:px-6 xs:py-3 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md   focus:shadow-lg focus:outline-none focus:ring-0 bg-gray-500  transition duration-150 ease-in-out cursor-not-allowed' : 'py-4 inline-block px-8 bg-yellow-gamy xs:px-6 xs:py-3 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out'}

        >
          Form
        </button>
      </div>
      
    </div>
  );
}
