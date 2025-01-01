import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";

function Description() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-white">
        <h1 className="text-[55px] font-playfair font-bold flex justify-center items-center py-11 border-[3px] border-blue-500 m-8 text-center">
          What is Server-Side Rendering?
        </h1>
        <p className="text-[35px] font-bold font-lora flex justify-center items-center py-11 border-[3px] border-blue-500 m-8 text-center">
          Server-Side Rendering (SSR) is a web development technique where the
          page content is rendered on the server and then sent to the browser.
          This is in contrast to client-side rendering (CSR), where the content
          is rendered in the browser.
        </p>
        <div className="flex justify-center items-center gap-7">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src="/Images/ssrimg1.webp"
              alt="ssr image"
              width={900}
              height={1200}
            />
            <u className="text-center">Server-side Rendering Image</u>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src="/Images/ssrimg2.png"
              alt="ssr image 2"
              width={900}
              height={1700}
            />
            <u className="text-center">Server-side Rendering Image</u>
          </div>
        </div>

        <h1 className="text-[55px] font-playfair font-bold flex justify-center items-center py-11 border-[3px] border-blue-500 m-8 text-center">
          Description of SSR:
        </h1>
        <ol className="text-[35px] font-bold font-roboto flex flex-col gap-4 justify-center items-center py-11 border-[3px] border-blue-500 m-8 text-center">
          1. Request Processing:
          <li className="text-[30px] font-lora">
            When a user visits a webpage, the server generates the HTML of the
            page and sends it to the client (browser).
          </li>
          <li className="text-[30px] font-lora">
            This process happens on every request, whether the user reloads the
            page or requests a new one.
          </li>
        </ol>

        <ol className="text-[35px] font-bold font-roboto flex flex-col gap-4 justify-center items-center py-11 border-[3px] border-blue-500 m-8 text-center">
          2. SEO Friendly:
          <li className="text-[30px] font-lora">
            SSR is very beneficial for SEO because search engine bots can easily
            crawl the fully rendered content. Hence, SSR pages are more visible
            to search engines.
          </li>
        </ol>

        <ol className="text-[35px] font-bold font-roboto flex flex-col gap-4 justify-center items-center py-11 border-[3px] border-blue-500 m-8 text-center">
          3. Initial Load Time:
          <li className="text-[30px] font-lora">
            SSR pages may have a slightly higher initial load time compared to
            CSR because the server has to render the page first. However, once
            the page is loaded, the performance is generally better.
          </li>
        </ol>

        <ol className="text-[35px] font-bold font-roboto flex flex-col gap-4 justify-center items-center py-11 border-[3px] border-blue-500 m-8 text-center">
          4. Benefits:
          <li className="text-[30px] font-lora">
            <mark className="text-[40px] font-bold">
              Faster First Page Load:
            </mark>{" "}
            Since the server sends the full HTML, the initial page load is
            faster.
          </li>
          <li className="text-[30px] font-lora">
            <mark className="text-[40px] font-bold">Improved SEO:</mark> Search
            engines get pre-rendered HTML, which is easier to crawl.
          </li>
          <li className="text-[30px] font-lora">
            <mark className="text-[40px] font-bold">Security:</mark> Sensitive
            operations are handled server-side, keeping them hidden from the
            client side.
          </li>
        </ol>

        <ol className="text-[35px] font-bold font-roboto flex flex-col gap-4 justify-center items-center py-11 border-[3px] border-blue-500 m-8 text-center">
          5. Challenges:
          <li className="text-[30px] font-lora">
            <mark className="text-[40px] font-bold">Higher Server Load:</mark>{" "}
            The server has to generate HTML for every request, which can put
            additional load on the server.
          </li>
          <li className="text-[30px] font-lora">
            <mark className="text-[40px] font-bold">Slower Navigation:</mark>{" "}
            Since the page reloads after every interaction, it can slow down
            navigation compared to CSR.
          </li>
        </ol>

        <div className="flex flex-col items-center justify-center gap-2 mb-8">
          <Image
            src="/Images/adofssr.png"
            alt="ssr image"
            width={1300}
            height={1500}
          />
          <u className="text-center">Advantages of SSR</u>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Description;
