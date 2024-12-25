import React, { useState, useEffect } from "react";

export const getServerSideProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  const todos = data.slice(0, 5);

  return {
    props: {
      todos: todos || [],
    },
  };
};

interface ServerSideRenderingProps {
  todos: { id: number; title: string; completed: boolean }[];
}

const ServerSideRendering = ({ todos }: ServerSideRenderingProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96 md:w-1/2 lg:w-1/3">
        <h2 className="text-xl font-semibold text-green-600 mb-4 text-center">
          Fetched Todos (SSR)
        </h2>
        <div className="flex flex-col items-center">
          <div className="loader border-t-4 border-green-500 w-12 h-12 rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  if (!todos || todos.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96 md:w-1/2 lg:w-1/3">
        <h2 className="text-xl font-semibold text-green-600 mb-4">
          Fetched Todos (SSR)
        </h2>
        <p>No todos available.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96 md:w-1/2 lg:w-1/3">
      <h2 className="text-xl font-semibold text-green-600 mb-4 text-center">
        Fetched Todos (SSR)
      </h2>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="p-4 border border-gray-300 rounded-lg shadow-md hover:bg-green-50"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {todo.title}
            </h3>
            <p className="text-sm text-gray-500">
              Completed: {todo.completed ? "Yes" : "No"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServerSideRendering;
