import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import { useRouter } from "next/router";
import { getSession, useUser } from "@auth0/nextjs-auth0"
import axios from "axios";

export const getServerSideProps = ({ req, res }) => {
  const session = getSession(req, res)
  let url = (process.env.SECURE) ? "https://" : "http://"
  url = url + process.env.BACK_ENDPOINT
  // console.log(session.accessToken)
  if (!session) return { props: { url: url } }
  return ({ props: { token: session.accessToken, url: url } })
}

export default function Home({ token, url }) {
  const router = useRouter();
  const { user, error, isLoading } = useUser();

  return (
    <div className="flex flex-col h-screen ">
      <Head>
        <title>GamiDoc</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header url={url} token={token} />
      <div className="flex-1 px-28 xs:px-10 mt-10">
        <div className="w-full lg:grid-cols-2 lg:grid">
          <h1 className="font-extrabold text-5xl xs:text-3xl ">
            A holistic process for designing and evaluating gamified solution.
          </h1>
          <h1> </h1>
          <h3 className="py-5 text-2xl  xs:text-lg">
            The purpose of this tool is to lead the designer through various
            steps, from the first contextual ideas, to the final evaluation of
            the developed software.
          </h3>
        </div>
        {(user) ?
          <button
            onClick={() => router.push("/name")}
            className=" py-4 inline-block px-8 bg-yellow-gamy xs:px-6 xs:py-3 text-md text-white font-medium leading-tight uppercase rounded-full shadow-md  hover:bg-gray-gamy hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out my-5"
          >
            Create a Form
          </button>
          :
          ""
        }
        <button
          onClick={() =>
            axios({
              method: "get",
              url: url + "/user/removeFirstConfig",
              headers: { Authorization: "Bearer " + token }
            }).then(() => console.log("ha funzionato")).catch((err) => { console.log(err) })}
          className=" py-4 inline-block px-8 bg-yellow-gamy xs:px-6 xs:py-3 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-gray-gamy hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
        >
          Remove Metadata
        </button>
      </div>
      <Footer />
    </div >
  );
}
