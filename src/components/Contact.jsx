import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Contact = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      id="contact"
      className={`text-3xl font-medium ${isDarkMode && "bg-slate-900"} `}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-indigo-600 font-bold">CONTACT</h1>
          <h1 className={`text-3xl ${isDarkMode && "text-white"}`}>
            Have a Question?
          </h1>
          <p className="w-1/2 text-center text-gray-400">
            Do you have an idea? Let's discuss it and see what we can do
            together.
          </p>
        </div>
        <form className="mt-5 p-8 flex flex-col gap-5 items-center">
          <input
            className={`p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm ${
              isDarkMode && "bg-slate-800 ring-0 text-white"
            }`}
            type="text"
            placeholder="Name Surname"
          />
          <input
            className={`p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm ${
              isDarkMode && "bg-slate-800 ring-0 text-white"
            }`}
            type="email"
            placeholder="Email"
          />
          <textarea
            className={`p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm ${
              isDarkMode && "bg-slate-800 ring-0 text-white"
            }`}
            cols="30"
            rows="10"
            placeholder="Message..."
          ></textarea>
          <button className="w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 rounded-md cursor-pointer">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
