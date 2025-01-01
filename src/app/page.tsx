"use client";
import React, { useState } from "react";
import ClientSideRendering from "../components/ClientSideRendering";
import ServerSideRendering from "../components/ServerSideRendering";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HomePage = () => {
  const [renderType, setRenderType] = useState<"csr" | "ssr" | null>(null);
  const [ssrTodos, setSsrTodos] = useState<
    { id: number; title: string; completed: boolean }[]
  >([]);

  const fetchSsrTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setSsrTodos(data.slice(0, 5));
    } catch (error) {
      console.error("Error fetching SSR todos:", error);
      setSsrTodos([]);
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen flex flex-col items-center justify-center space-y-8 bg-purple-100 px-4 sm:px-8 md:px-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 text-center">
          Client-Side vs Server-Side Rendering
        </h1>
        <p className="text-gray-700 text-lg text-center">
          Compare the difference between rendering methods in Next.js.
        </p>
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row">
          <button
            onClick={() => setRenderType("csr")}
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 text-center w-full sm:w-auto"
          >
            Client-Side Rendering
          </button>
          <button
            onClick={async () => {
              setRenderType("ssr");
              await fetchSsrTodos();
            }}
            className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-700 text-center w-full sm:w-auto"
          >
            Server-Side Rendering
          </button>
        </div>

        {renderType === "csr" && <ClientSideRendering />}
        {renderType === "ssr" && <ServerSideRendering todos={ssrTodos} />}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
