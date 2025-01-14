"use client";
import React, { useState, useEffect, useCallback } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const ClientSideRendering = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (!response.ok) {
        throw new Error("Failed to fetch data.");
      }
      const data = await response.json();
      setData(data.slice(0, 5));
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 1000);
    return () => clearTimeout(timer);
  }, [fetchData]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96 md:w-1/2 lg:w-1/3">
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="loader border-t-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center">
          <p className="font-medium">{error}</p>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold text-blue-600 mb-4 text-center">
            Fetched Todos (CSR)
          </h2>
          <ul className="space-y-3" aria-label="List of Todos">
            {data.map((todo) => (
              <li
                key={todo.id}
                className="text-black p-3 border border-gray-300 rounded-md bg-gray-50"
              >
                <p className="font-semibold text-black">Title: {todo.title}</p>
                <p className="text-black">
                  Completed: {todo.completed ? "Yes" : "No"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ClientSideRendering;
