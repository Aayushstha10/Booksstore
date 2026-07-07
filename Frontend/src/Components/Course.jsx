import React from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Course() {
  const [book, setbook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://booksstore-5.onrender.com/book");
        setbook(res.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getBook();
  }, []);
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 ">
      {/* Header Section */}
      <div className="text-center mb-10 sm:mb-14 dark:bg-slate-900 dark:text-white rounded-lg p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Here are our <span className="text-cyan-600">Paid Courses</span>
        </h1>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300">
          You can access the courses after login
        </p>

        <Link to="/">
          <button className="mt-5 sm:mt-6 inline-flex items-center justify-center rounded-lg bg-cyan-600 px-5 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base text-white font-medium shadow-md hover:bg-cyan-700 hover:scale-105 transition-all duration-300">
            ← Back
          </button>
        </Link>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;
