import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div className="px-28">
        <h1 className="font-extrabold text-5xl ">
          Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.
        </h1>
        <h3 className="py-5 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Sed fermentum
          at felis quis consequat. <br/>Cras lacinia, quam in facilisis venenatis,
          ipsum lacus imperdiet erat, <br/>a elementum dolor nisi vel leo
        </h3>
      </div>

      <Footer />
    </div>
  );
}
