import Hero from "./components/hero";
import About from "./components/about";
import Founder from "./components/founder";
import Services from "./components/services";
// import Insight from "./components/insights";
import Partners from "./components/partners";
import ContactUs from "./components/contactUs";
import Footer from "./components/footer";
import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Hero />
        <About />
        <Founder />
        <Services />
        <Partners />
        <ContactUs />
        <Footer />
      </>
    );
  }
}

export default App;
