import React from "react";
import Image from "next/image";

const sanityIoImageLoader = ({ src, width, quality }) => {
  return `https://i.imgur.com/jTsP1Dl.png`;
};

function Footer() {
  return (
    <footer className="text-center lg:text-left bg-gray-800 text-white">
      <div className="mx-40 py-10 text-center md:text-left">
        <div className="grid grid-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="">
            <Image
              loader={sanityIoImageLoader}
              src="image-src"
              alt="GamiDoc"
              width={119} height={34}
            />
            <p className="mb-4  text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              atque ea quis molestias. Fugiat pariatur maxime quis culpa
              corporis vitae repudiandae aliquam voluptatem veniam, est atque
              cumque eum delectus sint!
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
                FAQ's
              </a>
            </p>
            <p className="mb-4">
              <a href="/Form" className="text-gray-300">
                Terms & condition
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
