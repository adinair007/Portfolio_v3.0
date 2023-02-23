import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      name="footer"
      className="flex flex-col items-center justify-between px-6 py-4 bg-black"
    >
      <div className="invisible flex flex-col items-center justify-between px-6 py-4 bg-black lg:visible">
        <p className="text-gray-300 font-bold">Made by Aditya Nair 🦖</p>
      </div>
      <div className="visible flex flex-col items-center justify-between  bg-black lg:invisible">
        <div className="flex -mx-2">
          <a
            className="hover:scale-110 duration-500 flex justify-between items-center w-full text-gray-300"
            href="https://www.linkedin.com/in/adityanair09/"
          >
            <FaLinkedin size={30} className="bg-blue-500" />
          </a>
          <a
            className="hover:scale-110 duration-500 flex justify-between items-center pl-5 w-full  text-gray-300"
            href="https://github.com/adinair007"
          >
            <FaGithub size={30} className="bg-purple-800" />
          </a>
          <a
            className="hover:scale-110 duration-500 flex justify-between items-center pl-5 w-full  text-gray-300"
            href="mailto:adinair.in@outlook.com"
          >
            <HiOutlineMail size={30} className="bg-green-600" />
          </a>
          <a
            className="hover:scale-110 duration-500 flex justify-between items-center pl-5 w-full  text-gray-300"
            href="https://drive.google.com/file/d/1LTrfFkLDZS3mirvLmeL7ajnPk5kh4cFe/view?usp=sharing"
          >
            <BsFillPersonLinesFill size={30} className="bg-slate-600" />
          </a>
        </div>
        <p className="py-8 text-gray-300 font-bold">Made by Aditya Nair 🦖</p>
      </div>
    </div>
  );
};

export default Footer;
