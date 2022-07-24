import React from "react";
import Image from "next/image";

const sanityIoImageLoader = ({ src, width, quality }) => {
  return `https://i.imgur.com/jTsP1Dl.png`;
};

function Footer() {
  return (
    <footer className="text-center lg:text-left bg-gray-800 text-white ">
      <div className="mx-40 xs:mx-8  py-10 text-center md:text-left">
        <div className="grid grid-1 lg:grid-cols-4 gap-8 md:gap-2 xs:gap-2">
          <div className="">
            <Image
              loader={sanityIoImageLoader}
              src="image-src"
              alt="GamiDoc"
              width={119}
              height={34}
            />
            <p className="mb-4  text-gray-400 md:text-base xs:text-sm">
              A holistic process to guide designers and researchers in the
              development of gamified solutions, by providing a game design
              model and its review, a methods design control, a support in the
              selection of gamified elements, a help in the software
              development, and a list of standardized user experience
              questionnaire in order to evaluate the user experience in a proper
              way.
            </p>
          </div>
          <div></div>
          <div></div>
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Support
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-gray-300">
                FAQ s
              </a>
            </p>
            <p className="mb-4">
              <a href="/documentation" className="text-gray-300">
                Documentation
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-300">
                Privacy Policy
              </a>
            </p>
            <p>
              <a href="#!" className="text-gray-300">
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center p-6 bg-gray-700">
        <span>© 2022 Copyright: </span>
        <a className="text-gray-300 font-semibold" href="">
          GamiDOC.
        </a>
      </div>
    </footer>
  );
}

export default Footer;
