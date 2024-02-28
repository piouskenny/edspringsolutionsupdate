import Navbar from "../navbar";
import Footer from "../footer";
import Law from "./law.jpg";
import React, { Component } from "react";

class SPecialEducation504 extends Component {
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
            Special Education and Section 504 Compliance
          </h1>

          <div className="md:grid grid-cols-2 gap-10 items-center">
            <div className="col-span-1  md:hidden">
              <img src={Law} alt="" />
            </div>
            <div className="col-span-1">
              <p className="block my-6 text-lg">
                Ensuring compliance with special education laws and regulations
                is a challenge faced by many schools, and noncompliance remains
                a widespread issue due to the complexity of special education
                laws and regulations. Noncompliance with special education laws
                and regulations can have serious consequences, and schools,
                districts, or states that fail to comply with procedural and
                substantive requirements may face legal action, reputational
                harm, and a negative impact on the educational outcomes of
                students with special needs. The team at EdSpring Solutions can
                help your school untangle the complexity of compliance so that
                you can confidently meet the needs of students with IEPs and 504
                plans.
              </p>
            </div>
            <div className="col-span-1 hidden md:block">
              <img src={Law} alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default SPecialEducation504;
