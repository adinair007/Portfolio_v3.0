import React from "react";

import Crypto from "../assets/Crypto.jpg";
import TTG from "../assets/TTG.png";
import TeamProfile from "../assets/Team_Profile.png";
import Weather from "../assets/Weather.png";
import JATE from "../assets/JATE1.png";
import STG from "../assets/STG.png";

const Projects = () => {
  return (
    <div name="projects" className="w-full md:h-screen text-gray-300 bg-black">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">
            // Check out some of my recent projects I've worked on
          </p>
        </div>

        {/* Projects Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Project 1 */}
          <div
            style={{ backgroundImage: `url(${Crypto})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-1000">
              <span className="text-2xl font-bold text-white tracking-wider">
                MyFavouriteCrypto
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-800 font-bold text-lg">
                    Webpage
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 bg-black text-gray-300 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div
            style={{ backgroundImage: `url(${TTG})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-1000">
              <span className="text-2xl font-bold text-white tracking-wider">
                The Triggered Gamer
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-800 font-bold text-lg">
                    Webpage
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 bg-black text-gray-300 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div
            style={{ backgroundImage: `url(${JATE})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-1000">
              <span className="text-2xl font-bold text-white tracking-wider">
                Just Another Text Editor
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-800 font-bold text-lg">
                    Webpage
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 bg-black text-gray-300 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div
            style={{ backgroundImage: `url(${STG})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-1000">
              <span className="text-2xl font-bold text-white tracking-wider">
                The Spectacular Tech Blog
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-800 font-bold text-lg">
                    Webpage
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 bg-black text-gray-300 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>

            {/* Project 5 */}
          <div
            style={{ backgroundImage: `url(${Weather})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-1000">
              <span className="text-2xl font-bold text-white tracking-wider">
                Weather Dashboard
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-800 font-bold text-lg">
                    Webpage
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 bg-black text-gray-300 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        {/* Project 6 */}
        <div
            style={{ backgroundImage: `url(${TeamProfile})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-1000">
              <span className="text-2xl font-bold text-white tracking-wider">
                Team Profile Generator
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-800 font-bold text-lg">
                    Webpage
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 bg-black text-gray-300 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
