import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

export default function fourohfour() {
  return (
    <div className="flex flex-col h-screen justify-between gap-5">
      <Head>
        <title>GamiDoc</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <h1 className="font-bold flex justify-center ">PAGE NOT FOUND</h1>
      <Footer />
    </div>
  );
}
