import Navbar from "../navbar";
import Planning from "../media//morepictures/point-papar.jpg";
import Footer from "../footer";
import React, { Component } from "react";

class SystemAndProgramPlanning extends Component {
  
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="md:px-32 md:pb-10 md:pt-10 pt-28 pb-12 px-6 bg-white h-fit">
          <h1 className="text-center text-orange-400 uppercase font-medium text-2xl">
            Services
          </h1>
          <h1 className="font-bold text-center text-3xl my-6 text-blue-500">
            System & Program Planning
          </h1>
          <div className="col-span-1 md:hidden">
            <img src={Planning} alt="" />
          </div>
          <div className="md:grid grid-cols-2 gap-10">
            <div className="col-span-1">
              <p className="block my-6 text-lg">
                Strategic planning is the cornerstone of success for any
                organization, providing a roadmap for achieving goals and
                realizing its vision. At EdSpring Solutions, we understand the
                importance of strategic planning, and we are committed to
                supporting our clients develop and implement effective strategic
                plans. Our collaborative approach ensures that the strategic
                planning process is inclusive and engages all stakeholders,
                providing a solid foundation for successful implementation. With
                our support, organizations and schools can move beyond reactive
                modes of operation, achieve clarity in their direction, and
                maximize opportunities for growth and improvement.
              </p>
            </div>

            <div className="col-span-1 hidden md:block">
              <img src={Planning} alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default SystemAndProgramPlanning;
