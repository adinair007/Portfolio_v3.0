import React from "react";

export const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-black">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p className="text-gray-300">
              Hey! I'm Aditya, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p className="text-gray-300">
              I am dedicated to building
              <h3 className="text-pink-600 inline">
                {" "}
                excellent, responsive web applications{" "}
              </h3>
              that improve the overall user exprience. I am always eager to try
              new things and am a fast learner. I am excited to start this new
              chapter in my career and look forward to working with you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
