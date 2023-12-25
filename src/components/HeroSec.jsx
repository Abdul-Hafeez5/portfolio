import React from "react";
import heroImage from "../assets/HeroImage.png";

const HeroSec = () => {
  return (
    <div>
      <img
        src={heroImage}
        alt="heroImage"
        className="absolute bottom-0 right-0 lg:left-0 lg:mx-auto h-5/6 object-cover"
      />
      {/* rounded div  */}
      <div className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-indigo-900 rounded-full -z-10 "></div>
      {/* animated text div  */}
      <div className="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left-48 xl:text-7xl font-bold">
        <span className="text-gray-600"> MERN Stack</span>
        <p className="text-red-500">Developer</p>
      </div>
      <div className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-10 bg-white p-6 h-fit w-1/3">
        <h1 className="text-4xl font-bold text-indigo-900">Hi, I'm Hafeez</h1>
        <p className="text-gray-400 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          doloribus, iusto minus, harum aliquid cum officia praesentium libero
          similique, repellat enim optio possimus dolore! Rerum corrupti
          explicabo qui a nesciunt natus consequatur nisi quas.
        </p>
        <a
          className="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit"
          href="#contact"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default HeroSec;
