import Navbar from "../navbar";
import Footer from "../footer";
import Family from "./family.jpg";
// import ChildndFather from "../media/videos/father.mp4";
import React, { Component } from "react";

class SpecialEducation extends Component {

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
            Special Education Advocacy for Families
          </h1>

          <div className="lg:grid md:grid-cols-2 gap-4 mb-12 items-center">
            <div className="col-span-1 md:mt-0 mt-6  md:hidden">
              <img src={Family} />
            </div>
            <div className="col-span-1 text-lg">
              <p className="my-6 ">
                Navigating the special education process can be overwhelming and
                challenging for parents and caregivers of children with special
                needs. In a study conducted by the National Center for Learning
                Disabilities, over 90% of parents reported that they face
                challenges in understanding the special education process,
                including how to advocate for their child's needs and how to
                work effectively with school personnel.
              </p>

              <p className="my-6">
                EdSpring Solutions is dedicated to equipping parents with the
                necessary information and support to effectively advocate for
                their children and navigate the intricate maze of procedures and
                policies involved in accessing the education and services they
                are legally entitled to. Our consultants work with families to
                help them understand their rights under IDEA and provide
                guidance on issues such as obtaining evaluations and
                assessments, developing effective IEPs, attending IEP meetings,
                addressing behavioral concerns, and so on
              </p>
            </div>

            <div className="col-span-1 md:mt-0 mt-6 hidden md:block">
              <img src={Family} />
            </div>
          </div>
          {/* <h1 className="text-center my-8 text-2xl text-blue-500">
            Some common challenges that parents and caregivers may face include:
          </h1>
          <ul className="my-6 text-lg  text-white">
            <div className="md:grid grid-cols-4 gap-4">
              <div className="col-span-1 rounded-lg my-6 md:my-0 p-6 bg-blue-500">
                <li className="my-2 rounded-md ">
                  Understanding their rights under federal and state laws
                  governing special education
                </li>
              </div>
              <div className="col-span-1 rounded-lg my-6 md:my-0 p-6 bg-green-500">
                <li className="my-2 rounded-md ">
                  {" "}
                  Navigating the eligibility process for special education
                  services
                </li>
              </div>
              <div className="col-span-1 rounded-lg my-6 md:my-0 p-6 bg-orange-400">
                <li className="my-2 rounded-md ">
                  Understanding the various types of services and supports
                  available to their child
                </li>
              </div>
              <div className="col-span-1 rounded-lg my-6 md:my-0 p-6 bg-gray-400">
                <li className="my-2 rounded-md ">
                  {" "}
                  Communicating effectively with teachers and other school staff
                  about their child's needs and progress{" "}
                </li>
              </div>
            </div>
          </ul> */}
        </div>
        <Footer />
      </>
    );
  }
}

export default SpecialEducation;
