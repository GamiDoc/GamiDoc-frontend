import * as React from "react";
import Link from "next/link"
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Avatar } from "@mui/material";
import { getSession } from "@auth0/nextjs-auth0"

export const getServerSideProps = ({ req, res }) => {
  let url = (process.env.SECURE) ? "https://" : "http://"
  url = url + process.env.BACK_ENDPOINT
  const session = getSession(req, res)
  if (!session) return ({ props: {} })
  return ({ props: { token: session.accessToken, url: url } })
}

export default function Support({ token, url }) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header token={token} url={url} />
      <h1 className="text-4xl font-bold ml-48 xs:ml-8 xs:mb-16">Contact us</h1>
      <div className="justify-center flex-col items-center flex gap-6 mb-10">
        <Avatar
          src="https://i.imgur.com/vNVoXlZ.png"
          sx={{ width: 80, height: 80 }}
          className="border border-black"
        />
        <h1 className="text-2xl">We&apos;d love to hear from you!</h1>
        <Link href="mailto:carlo.bottaro@studenti.unitn.it">
          <button
            className="py-4 inline-block px-8 w-40 bg-yellow-gamy text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
          >
            Email us!
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
