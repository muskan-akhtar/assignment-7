import React from "react";
import { AiOutlineRead } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { SiGithub } from "react-icons/si";
import Image from "next/image";
function Navbar() {
  return (
    <div className="bg-blue-500 p-2">
      <div className="flex items-center bg-green-500 p-2">
        <div className="flex justify-between items-center bg-white gap-[1370px] px-2 py-2">
          <div className="flex gap-1 justify-center items-center">
            <Image
              src="/Images/renderitlogo.jpg"
              alt="logo"
              width={70}
              height={90}
              className="border-[5px] border-black rounded-full p-3"
            />
            <h1 className="text-[30px] p-1 font-bubble font-bold">RenderIT</h1>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col justify-center items-center">
              <a
                href="/Description"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-500"
                title="Read more Description!"
                aria-label="Description"
              >
                <AiOutlineRead className="h-8 w-8" />
              </a>
              <h1 className="font-semibold font-playfair text-[20px]">
                Description
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <a
                href="https://www.linkedin.com/in/muskan-akhtar-a7b7722b6 "
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-500"
                title="Visit my LinkedIn profile"
                aria-label="LinkedIn Profile"
              >
                <CiLinkedin className="h-8 w-8" />
              </a>
              <h1 className="font-semibold font-playfair text-[20px]">
                LinkedIn
              </h1>
            </div>

            <div className="flex flex-col justify-center items-center">
              <a
                href="https://github.com/muskan-akhtar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-500"
                title="Visit my GitHub profile"
                aria-label="GitHub Profile"
              >
                <SiGithub className="h-8 w-8" />
              </a>
              <h1 className="font-semibold font-playfair text-[20px]">
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
