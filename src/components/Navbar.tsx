import React from "react";
import { AiOutlineRead, AiOutlineHome } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { SiGithub } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="bg-blue-500 p-2">
      <div className="flex items-center bg-green-500 p-2">
        <div className="flex flex-wrap justify-between items-center bg-white px-4 py-2 w-full">
          <div className="flex gap-3 justify-center items-center">
            <Image
              src="/Images/renderitlogo.jpg"
              alt="logo"
              width={70}
              height={90}
              className="border-[5px] border-black rounded-full p-3"
            />
            <h1 className="text-[20px] sm:text-[25px] lg:text-[30px] font-bubble font-bold">
              RenderIT
            </h1>
          </div>

          <div className="flex flex-wrap gap-6 justify-center items-center mt-4 lg:mt-0">
            <div className="flex flex-col justify-center items-center">
              <Link href="/" passHref>
                <div
                  className="text-black hover:text-blue-500"
                  title="Go to Home"
                  aria-label="Home"
                >
                  <AiOutlineHome className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
              </Link>
              <h1 className="font-semibold font-playfair text-[16px] sm:text-[20px]">
                Home
              </h1>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Link href="/description" passHref>
                <div
                  className="text-black hover:text-blue-500"
                  title="Read more Description!"
                  aria-label="Description"
                >
                  <AiOutlineRead className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
              </Link>
              <h1 className="font-semibold font-playfair text-[16px] sm:text-[20px]">
                Description
              </h1>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Link
                href="https://www.linkedin.com/in/muskan-akhtar-a7b7722b6"
                passHref
              >
                <div
                  className="text-black hover:text-blue-500"
                  title="Visit my LinkedIn profile"
                  aria-label="LinkedIn Profile"
                >
                  <CiLinkedin className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
              </Link>
              <h1 className="font-semibold font-playfair text-[16px] sm:text-[20px]">
                LinkedIn
              </h1>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Link href="https://github.com/muskan-akhtar" passHref>
                <div
                  className="text-black hover:text-blue-500"
                  title="Visit my GitHub profile"
                  aria-label="GitHub Profile"
                >
                  <SiGithub className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
              </Link>
              <h1 className="font-semibold font-playfair text-[16px] sm:text-[20px]">
                GitHub
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
