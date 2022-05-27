import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer class="text-center lg:text-left bg-gray-800 text-white">
      <div class="mx-40 py-10 text-center md:text-left">
        <div class="grid grid-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div class="">
            <Image
              src="/../public/LogoWhite.png"
              alt="logo"
              width={119}
              height={34}
            />
            <p class="mb-4  text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              atque ea quis molestias. Fugiat pariatur maxime quis culpa
              corporis vitae repudiandae aliquam voluptatem veniam, est atque
              cumque eum delectus sint!
            </p>
          </div>
          <div></div>
          <div></div>
          <div class="">
            <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Support
            </h6>
            <p class="mb-4">
              <a href="#!" class="text-gray-300">
                FAQ's
              </a>
            </p>
            <p class="mb-4">
              <a href="/Form" class="text-gray-300">
                Terms & condition
              </a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-gray-300">
                Privacy Policy
              </a>
            </p>
            <p>
              <a href="#!" class="text-gray-300">
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="text-center p-6 bg-gray-700">
        <span>© 2022 Copyright: </span>
        <a class="text-gray-300 font-semibold" href="">
          GamiDOC.
        </a>
      </div>
    </footer>
  );
}

export default Footer;
