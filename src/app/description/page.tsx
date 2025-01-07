"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

function Description() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-white">
        <h1
          className="text-[30px] sm:text-[40px] lg:text-[50px] font-playfair font-bold flex justify-center items-center py-6 sm:py-8 lg:py-11 border-[3px] border-blue-500 mx-4 sm:mx-8 lg:mx-12 text-center"
          data-aos="fade-down"
        >
          What is Server-Side Rendering?
        </h1>
        <p
          className="text-[16px] sm:text-[20px] lg:text-[25px] font-bold font-lora flex justify-center items-center py-6 sm:py-8 lg:py-11 border-[3px] border-blue-500 mx-4 sm:mx-8 lg:mx-12 text-center"
          data-aos="fade-up"
        >
          Server-Side Rendering (SSR) is a web development technique where the
          page content is rendered on the server and then sent to the browser.
          This is in contrast to client-side rendering (CSR), where the content
          is rendered in the browser.
        </p>
        <div
          className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-7 mx-4 sm:mx-8 lg:mx-12"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src="/Images/ssractual.webp"
              alt="SSR Image 2"
              width={1000}
              height={1200}
              className="rounded-lg max-w-full h-auto"
            />
            <u className="text-center">Server-side Rendering</u>
          </div>
        </div>

        <h1
          className="text-[30px] sm:text-[40px] lg:text-[50px] font-playfair font-bold flex justify-center items-center py-6 sm:py-8 lg:py-11 border-[3px] border-blue-500 mx-4 sm:mx-8 lg:mx-12 text-center"
          data-aos="zoom-in"
        >
          Description of SSR:
        </h1>
        <ol
          className="text-[16px] sm:text-[20px] lg:text-[25px] font-bold font-roboto flex flex-col gap-4 justify-center items-center py-6 sm:py-8 lg:py-11 border-[3px] border-blue-500 mx-4 sm:mx-8 lg:mx-12 text-center"
          data-aos="fade-right"
        >
          <li className="font-lora">
            <strong>Request Processing:</strong> When a user visits a webpage,
            the server generates the HTML of the page and sends it to the client
            (browser).
          </li>
          <li className="font-lora">
            This process happens on every request, whether the user reloads the
            page or requests a new one.
          </li>
        </ol>
        <div
          className="flex flex-col items-center justify-center gap-2 mb-6 sm:mb-8"
          data-aos="flip-left"
        >
          <Image
            src="/Images/adofssr.png"
            alt="Advantages of SSR"
            width={1000}
            height={1200}
            className="rounded-lg max-w-full h-auto"
          />
          <u className="text-center">Advantages of SSR</u>
        </div>

        <h1
          className="text-[30px] sm:text-[40px] lg:text-[50px] font-playfair font-bold flex justify-center items-center py-6 sm:py-8 lg:py-11 border-[3px] border-green-500 mx-4 sm:mx-8 lg:mx-12 text-center"
          data-aos="fade-down"
        >
          What is Client-Side Rendering?
        </h1>
        <p
          className="text-[16px] sm:text-[20px] lg:text-[25px] font-bold font-lora flex justify-center items-center py-6 sm:py-8 lg:py-11 border-[3px] border-green-500 mx-4 sm:mx-8 lg:mx-12 text-center"
          data-aos="fade-up"
        >
          Client-Side Rendering (CSR) is a web development technique where the
          browser downloads a minimal HTML document along with JavaScript files
          to build the page dynamically on the client side. The rendering is
          handled entirely in the browser.
        </p>
        <div
          className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-7 mx-4 sm:mx-8 lg:mx-12"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src="/Images/csractual.webp"
              alt="CSR Image 2"
              width={1000}
              height={1200}
              className="rounded-lg max-w-full h-auto"
            />
            <u className="text-center">Client-side Rendering</u>
          </div>
        </div>

        <h1
          className="text-[30px] sm:text-[40px] lg:text-[50px] font-playfair font-bold flex justify-center items-center py-6 sm:py-8 lg:py-11 border-[3px] border-green-500 mx-4 sm:mx-8 lg:mx-12 text-center"
          data-aos="zoom-in"
        >
          Description of CSR:
        </h1>
        <ol
          className="text-[16px] sm:text-[20px] lg:text-[25px] font-bold font-roboto flex flex-col gap-4 justify-center items-center py-6 sm:py-8 lg:py-11 border-[3px] border-green-500 mx-4 sm:mx-8 lg:mx-12 text-center"
          data-aos="fade-right"
        >
          <li className="font-lora">
            <strong>Dynamic Interaction:</strong> CSR allows for dynamic and
            interactive web applications without requiring a full page reload.
          </li>
          <li className="font-lora">
            Faster transitions between pages as only data and assets are loaded
            instead of full HTML.
          </li>
        </ol>
        <div
          className="flex flex-col items-center justify-center gap-2 mb-6 sm:mb-8"
          data-aos="flip-right"
        >
          <Image
            src="/Images/csrprocess.png"
            alt="Advantages of CSR"
            width={1000}
            height={1200}
            className="rounded-lg max-w-full h-auto"
          />
          <u className="text-center">Client-Side Rendering step-by-step</u>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Description;
