import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import { useRouter } from "next/router";

const figure1 = ({ src, width, quality }) => {
  return `https://i.imgur.com/np0Cgo4.png`;
};
export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen justify-between gap-5">
      <Head>
        <title>GamiDoc</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="px-28 xs:px-10">
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
        <button
          onClick={() => router.push("/name")}
          className=" py-4 inline-block px-8 bg-yellow-gamy xs:px-6 xs:py-3 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
        >
          Form
        </button>
      </div>

      <Footer />
    </div>
  );
}
