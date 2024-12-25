"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const MainPage = () => {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 500);

    AOS.init({
      duration: 1000,
      easing: "ease-out-back",
      once: true,
    });

    return () => clearTimeout(timer);
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTodos(data.slice(0, 10));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-purple-400 flex items-center justify-center p-4 md:p-10">
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="loader border-t-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
        </div>
      ) : (
        <div
          className="p-5 bg-white shadow-lg rounded-lg w-full max-w-4xl mx-auto"
          data-aos="fade-right"
        >
          <h1 className="text-2xl font-bold text-center mb-5 text-blue-600">
            Fetched Todos
          </h1>
          <ul className="space-y-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="p-3 border border-gray-300 rounded-md bg-gray-50"
                data-aos="fade-up"
              >
                <p className="font-semibold">Title: {todo.title}</p>
                <p>Completed: {todo.completed ? "Yes" : "No"}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MainPage;
