import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import WeatherImg from "../assets/weatherPhoto.png";

const Work = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div id="works" className={`py-40 ${isDarkMode && "bg-slate-900"}`}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-indigo-600 font-bold">PORTFOLIO</h1>
          <h1
            className={`text-3xl ${isDarkMode && "text-white"} dark:text-white`}
          >
            Works & Projects
          </h1>
          <p className="w-1/2 text-center text-gray-400">
            I help designers, small agencies and businesses bring their ideas to
            life. Powered by Figma, VS Code and coffee, I turn your requirements
            into a well-designed websites
          </p>
        </div>
        <div className="p-5 sm:p-0 flex flex-wrap justify-between">
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src={WeatherImg} alt="img" />
          </div>
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src={WeatherImg} alt="img" />
          </div>
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src={WeatherImg} alt="img" />
          </div>
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src={WeatherImg} alt="img" />
          </div>
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src={WeatherImg} alt="img" />
          </div>
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src={WeatherImg} alt="img" />
          </div>
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src={WeatherImg} alt="img" />
          </div>
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src={WeatherImg} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
