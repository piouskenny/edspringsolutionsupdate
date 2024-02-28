import Navbar from "./navbar";
import Footer from "./footer";
import React, { Component } from "react";

class ContactUsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, message } = this.state;
    const mailaddress = "info@edspringsolutions.com";
    const emailLink = `mailto:${mailaddress}?subject=EdSpring Solutions&body=Name:${name}%0D%0AEmail:${email}%0D%0AMessage:${message}%0D%0A`;
    window.location.href = emailLink;
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <>
        <Navbar />
        <div
          id="contact"
          className="max-w-7xl mx-auto sm:px-6 lg:px-8 md:px-32 px-10 shadow-gray-900 shadow-sm  pt-20 md:mt-0 md:py-12"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-medium tracking-tight text-blue-500 sm:text-4xl text-center">
              Contact Us
            </h2>
            <form className="mt-6" onSubmit={this.handleSubmit}>
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
                    id="name"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    placeholder="Enter your name"
                    value={name}
                    onChange={this.handleNameChange}
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
                    type="email"
                    id="email"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    placeholder="Enter your email"
                    value={email}
                    onChange={this.handleEmailChange}
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
                    id="message"
                    rows="5"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    placeholder="Enter your message"
                    value={message}
                    onChange={this.handleMessageChange}
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
        <Footer />
      </>
    );
  }
}

export default ContactUsPage;
