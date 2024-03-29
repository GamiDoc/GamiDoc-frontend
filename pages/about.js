import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Avatar, Stack, Divider, Typography } from "@mui/material";
import { getSession } from '@auth0/nextjs-auth0';

export const getServerSideProps = ({ req, res }) => {
  let url = (process.env.SECURE) ? "https://" : "http://"
  url = url + process.env.BACK_ENDPOINT
  const session = getSession(req, res)
  return ({ props: { token: session.accessToken, url: url } })
}



export default function About({ token, url }) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header token={token} url={url} />
      <h1 className="text-4xl font-bold ml-48 xs:ml-8 xs:mb-16">The team</h1>
      <div
        className="justify-center items-center flex flex-row text-xl gap-24 xs:flex-col"
      >
        <Stack className="items-left font-semibold xs:w-40 w-60">
          <Avatar
            alt="Antonio Bucchiarone"
            src=""
            sx={{ width: 80, height: 80 }}
            className="border border-black "
          />

          <h1 className="py-4">Antonio Bucchiarone</h1>
          <h2 className="font-normal">Team principal</h2>
        </Stack>
        <Stack className="items-left font-semibold xs:w-40 w-60">
          <Avatar
            alt="Simone Bassanelli"
            src=""
            sx={{ width: 80, height: 80 }}
            className="border border-black"
          />
          <h1 className="py-4">Simone Bassanelli</h1>
          <h2 className="font-normal">Head executive</h2>
        </Stack>
        <Stack className="items-left font-semibold xs:w-40 w-60">
          <Avatar
            alt="Carlo Bottaro"
            src=""
            sx={{ width: 80, height: 80 }}
            className="border border-black"
          />
          <h1 className="py-4">Carlo Bottaro</h1>
          <h2 className="font-normal">Developer</h2>
        </Stack>
        <Stack className="items-left font-semibold xs:mb-16 xs:w-40 w-60">
          <Avatar
            alt="Andrea Mangrella"
            src=""
            sx={{ width: 80, height: 80 }}
            className="border border-black"
          />
          <h1 className="py-4">Andrea Mangrella</h1>
          <h2 className="font-normal">Developer</h2>
        </Stack>
      </div>
      <Footer />
    </div>
  );
}
