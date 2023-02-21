import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

export const Home = () => {
  return (
    <div className="w-full h-screen bg-black">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Aditya Nair
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer
        </h2>
        <p className="text-gray-300 py-4 max-w-[700px]">
          I am a web developer based in Dallas-Fort Worth, TX with a Bachelors
          in Automotive Engineering. I got into web development when looking for
          a career change and haven't looked back since. Currently I'm focused
          on building responsive full-stack web applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View My Work
            <span>
              <HiArrowNarrowRight className="ml-2 group-hover:rotate-90 duration-300" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
