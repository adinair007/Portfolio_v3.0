import React from "react";

export const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-black text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hey! I'm Aditya, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am dedicated to building excellent, responsive web applications
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
