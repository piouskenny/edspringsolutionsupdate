import React from "react";
import { Link } from "react-router-dom";
import Logo from "./white_logo.png";


function Footer() {
  return (
    <footer className=" text-white py-8 bg-blue-500">
      <hr className="my-6" />
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0  rounded-lg shadow-lg lg:shadow-xl p-6">
          <img src={Logo} alt="" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0  rounded-lg shadow-lg lg:shadow-xl p-6">
          <h3 className="text-lg font-bold mb-4">Links</h3>
          <ul className="list-none">
            <li className="mb-2">
              <a href="/">Home</a>
            </li>
            <li className="mb-2">
              <Link to="/aboutMore">About</Link>
            </li>
            <li className="mb-2">
              <Link to="/servicesPage">Services</Link>
            </li>
            {/* <li className="mb-2">
              <a href="/#insights">Insights</a>
            </li> */}
            <li className="mb-2">
              <Link to="/portfolioPage">Porfolio</Link>
            </li>
            <li className="mb-2">
              <Link to="/contactPage">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0  rounded-lg shadow-lg lg:shadow-xl p-6">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="list-none">
            <li className="mb-2">Email: info@edspringsolutions.com</li>
            <li className="mb-2">Phone: +1 (240) 319 8728</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
