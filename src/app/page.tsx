"use client";
import React, { useState } from "react";
import ClientSideRendering from "../components/ClientSideRendering";
import ServerSideRendering from "../components/ServerSideRendering";

const HomePage = () => {
  const [renderType, setRenderType] = useState<"csr" | "ssr" | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6 bg-purple-100 px-4 sm:px-8 md:px-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 text-center">
        Client-Side vs Server-Side Rendering
      </h1>
      <div className="space-x-4 flex flex-col justify-center items-center sm:flex-row sm:space-x-6">
        <button
          onClick={() => setRenderType("csr")}
          className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 text-center mb-4 sm:mb-0 w-full sm:w-auto"
        >
          Client-Side Rendering
        </button>
        <button
          onClick={() => setRenderType("ssr")}
          className="px-4 sm:px-6 py-2 sm:py-3 bg-green-500 text-white rounded-md hover:bg-green-700 text-center w-full sm:w-auto"
        >
          Server-Side Rendering
        </button>
      </div>

      {renderType === "csr" && <ClientSideRendering />}
      {renderType === "ssr" && <ServerSideRendering />}
    </div>
  );
};

export default HomePage;
