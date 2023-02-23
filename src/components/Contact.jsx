import React, { useState } from "react";
import { validateEmail } from "../../src/utils/helpers";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("please enter a valid email");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div
      name="contact"
      className="w-full h-full  mx-auto bg-black flex justify-center items-center p-8"
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
          defaultValue={name}
          name="name"
          onBlur={handleChange}
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Email"
          defaultValue={email}
          name="email"
          onBlur={handleChange}
        />
        <textarea
          className="bg-[#ccd6f6] p-2 "
          rows="10"
          placeholder="Message"
          defaultValue={message}
          name="message"
          onBlur={handleChange}
        ></textarea>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
          type="submit"
          onSubmit={handleSubmit}
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
