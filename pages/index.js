import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div className="px-28">
        <div className="w-[50em] xs:w-[10em]">
          <h1 className="font-extrabold text-5xl ">
            A holistic process for designing and evaluating gamified solution.
          </h1>
          <h3 className="py-5 text-2xl  ">
            The purpose of this tool is to lead the designer through various
            steps, from the first contextual ideas, to the final evaluation of
            the developed software.
          </h3>
        </div>
        <button
          onClick={() => router.push("/form")}
          className=" py-4 h-14 inline-block px-8 bg-yellow-gamy text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
        >
          Form
        </button>
      </div>

      <Footer />
    </div>
  );
}
