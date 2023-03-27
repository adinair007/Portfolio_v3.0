import React from "react";
import { projectData } from "../data/projectData";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div
      name="projects"
      className="md:p-8 w-full md:h-screen text-gray-300 bg-black sm:p-8"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 py-4 flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-4">
            // Check out some of my recent projects I've worked on.
          </p>
        </div>

        {/* Projects Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projectData.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100 duration-1000">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {item.name}
                </span>
                <div className="pt-4 text-center">
                  <a href={item.webpage} target="blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 bg-gray-100 text-gray-800 font-bold text-lg hover:scale-105 duration-500">
                      Webpage 🌐
                    </button>
                  </a>
                </div>
                <div className="pt-2 text-center">
                  <a href={item.github} target="blank" rel="norefferer">
                    <button className="text-center rounded-lg px-4 py-3 bg-black text-gray-300 font-bold text-lg hover:scale-105 duration-500">
                      GitHub <FaGithub size={25} className="inline"></FaGithub>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="py-4 text-center">
          You can also visit my{" "}
          <a
            href="https://github.com/adinair007"
            target="_blank"
            rel="noreferrer"
            className="text-purple-500 font-bold"
          >
            <button className="border-none bg-transparent hover:scale-105 duration-500">
              GitHub <FaGithub size={20} className="inline"></FaGithub>
            </button>
          </a>{" "}
          to view more!
        </p>
      </div>
    </div>
  );
};

export default Projects;
