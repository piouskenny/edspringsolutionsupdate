import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const mailaddress = "info@edspringsolutions.com";
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const emailLink = `mailto:${mailaddress}?subject=EdSpring Solutions&body=Name:${name}%0D%0AEmail:${email}%0D%0AMessage:${message}%0D%0A`;

    window.location.href = emailLink;
  };

  return (
    <div
      id="contact"
      className="max-w-7xl mx-auto sm:px-6 lg:px-8  md:px-32 px-10 shadow-gray-900 shadow-sm py-6 mt-10 md:mt-0 md:py-12"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-medium tracking-tight text-blue-500 sm:text-4xl text-center">
          Contact Us
        </h2>

        <form
          // method="POST"
          className="mt-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                onChange={(event) => setName(event.target.value)}
                className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                name="email"
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <div className="mt-1">
              <textarea
                name="message"
                onChange={(event) => setMessage(event.target.value)}
                rows="5"
                className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
          </div>
          <div className="mt-6 text-center mb-6">
            <button
              type="submit"
              className="inline-flex items-center py-3 border border-transparent rounded-md shadow px-20 bg-blue-500 text-white my-6"
            >
              Contact US
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
