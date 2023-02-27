import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full  mx-auto bg-black flex justify-center items-center p-8 md:p-12"
    >
      <form
        method="POST"
        action="https://getform.io/f/fce0a308-ae69-4cfd-b728-130ee98ded49"
        className="flex flex-col max-w-[600px] w-full my-10"
      >
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // If you want to get in touch, submit the form below or shoot me an
            email- adinair.in@outlook.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 "
          rows="10"
          placeholder="Message"
          name="message"
        ></textarea>
        <button
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
          type="submit"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
