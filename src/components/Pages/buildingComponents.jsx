import Navbar from "../navbar";
import Footer from "../footer";
import ComponetImage from "./cpmponents.jpg";
import BlackandWhite from "../media/morepictures/blackandwhite.jpg";
import Team from "../media/morepictures/team.jpg";
import FocusArea from "../media/morepictures/childrenhandup.jpg";
import ChildrenVideos from "../media/videos/video of teacher.mp4";
import Offering from "./offering";
import FocusGif from "../hero-gif.gif";
import React, { Component } from "react";

const cardsData = [
  {
    title: "Educators",
    color: "bg-green-500",
  },
  {
    title: "School Administrators",
    color: "bg-blue-500",
  },
  {
    title: "Service Providers",
    color: "bg-orange-400",
  },
  {
    title: "Paraprofessionals",
    color: "bg-gray-500",
  },
];

class BuidingComponents extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="md:px-32 md:pb-10 md:pt-10 pt-20 pb-12 px-6 bg-white h-fit">
          <h1 className="text-center text-orange-400 uppercase font-medium text-2xl">
            Services
          </h1>
          <h1 className="font-bold text-center text-3xl  text-blue-500">
            Capacity Building
          </h1>

          <div className="md:grid md:grid-cols-2 gap-10 items-center">
            <div className="col-span-1 text-lg">
              <p className="block ">
                <span className="font-bold block text-2xl mt-5 mb-2">
                  Professional Learning Opportunities for Instructional Staff
                </span>
                For instructional staff to create nurturing learning experiences
                for students, they require continuous professional learning
                opportunities tailored to their specific needs and roles.
                Research has established that effective professional development
                for educators can improve student learning outcomes, with some
                studies showing gains of up to 21 percentile points. Teachers in
                the United States spend an average of 89 hours per year on
                professional development. However, many teachers reported
                feeling unsatisfied with the quality and relevance of the
                training they received.{" "}
                <a
                  href="https://s3.amazonaws.com/edtech-production/reports/Gates-PDMarketResearch-Dec5.pdf "
                  target="_blank"
                  className="text-blue-600"
                >
                  According to a survey conducted by the Bill and Melinda Gates
                  Foundation, only 29% of teachers were very satisfied with the
                  professional development they received.{" "}
                </a>
                This suggests a gap between the types of professional
                development opportunities offered and what teachers need to
                improve their effectiveness in the classroom. To address this
                issue, we ensure that our professional development offerings are
                grounded in research and are designed to be relevant,
                differentiated, engaging, and effective.
              </p>
            </div>
            <div className="col-span-1 text-lg">
              <img src={Team} alt="" />
            </div>
          </div>

          <div className="  mb-12">
            <div className="col-span-1 text-lg">
              <p className="block my-6">
                <span className="font-bold block text-2xl mt-6 mb-2">
                  Leadership Support and Coaching
                </span>
                Leadership coaching for school administration is becoming
                increasingly important as schools face a range of complex
                challenges and shifting educational landscapes. To this end,
                school administrators require professional learning
                opportunities in leading equitable schools that ensure all
                students have access to high-quality education. This included
                meeting the needs of students with disabilities, leading schools
                to support diverse learners, equitably serving all students, and
                meeting the needs of English learners. Unfortunately, while the
                evidence points to the efficacy of coaching support for school
                administration, fewer than one quarter (23%) of principals
                reported having a mentor or coach in the past 2 years—and this
                percentage was lower for principals in high-poverty schools
                (10%),{" "}
                <a
                  href="https://learningpolicyinstitute.org/product/elementary-school-principals-professional-learning-report"
                  target="_blank"
                  className="text-blue-600"
                >
                  {" "}
                  according to a study conducted by the National Association of
                  Elementary School Principals (NAESP) and the Learning Policy
                  Institute (LPI).{" "}
                </a>{" "}
                EdSpring Solutions can provide valuable support and coaching to
                school leaders as they work to create equitable learning
                outcomes for all students.
              </p>
            </div>
          </div>

          <p className="block my-6">
            <span className="font-bold block text-center text-2xl mt-6 mb-2">
              Components of High Quality Principal Professional Learning
            </span>
          </p>

          <div className="flex justify-center">
            <img src={ComponetImage} alt="" />
          </div>
          <p className="font-medium text-gray-500 mt-2">
            Source: Learning Policy Institute.
          </p>

          <div className="my-6  mx-0">
            <h1 className="text-center text-blue-500 text-2xl my-4">
              Training and Coaching Offerings{" "}
            </h1>
            <div className="lg:grid md:grid-cols-2 gap-4 my-12">
              <div className="col-span-1">
                <h1 className="font-medium text-blue-500 text-lg mt-4">
                  Our professional learning opportunities are delivered through
                  a variety of formats:
                </h1>
                <h1 className="font-bold text-xl mt-4 text-green-500">
                  Training
                </h1>
                <ul className="list-disc">
                  <li className="my-2">
                    <span className="text-bold"></span> On-site professional
                    development sessions
                  </li>
                  <li className="my-2">
                    <span className="text-bold"></span> Online courses:
                    Self-paced, on-demand learning opportunities that you can
                    access anytime
                  </li>
                  <li className="my-2">
                    <span className="text-bold"></span> Live or recorded
                    training sessions and workshops facilitated by an EdSpring
                    Solutions specialist
                  </li>
                </ul>

                <h1 className="font-bold text-xl mt-4 text-green-500">
                  Coaching
                </h1>
                <ul className="list-disc">
                  <li className="my-2">
                    <span className="text-bold"></span> In-person and virtual
                    instructional practice-based coaching
                  </li>
                  <li className="my-2">
                    <span className="text-bold"></span> In-person and virtual
                    leadership support and coaching{" "}
                  </li>
                </ul>
              </div>

              <div className="col-span-1 md:mt-0 mt-6 ">
                <img src={BlackandWhite} alt="" />
              </div>
            </div>

            <h1 className="text-center text-blue-500 text-2xl my-4">
              Our Audience
            </h1>

            {/* Desktop */}
            <div
              className="  justify-center items-center h-fit hidden md:flex "
              style={{
                backgroundImage: `url(${FocusArea})`,
                backgroundPosition: "center",
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(0, 0, 139, 0.5)",
                backgroundSize: "cover",
              }}
            >
              <div className="flex w-fit max-w-6xl my-10">
                {cardsData.map((card) => (
                  <div
                    key={card.title}
                    className={` bg-opacity-80 rounded-lg overflow-hidden ${card.color} w-full sm:w-1/2 md:w-1/2 lg:w-1/4 m-4 transition-all duration-400 transform hover:-translate-y-6`}
                  >
                    <div className="p-4">
                      <h2 className="text-2xl text-white font-bold my-4 text-center">
                        {card.title}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile */}
            <div
              className=" flex justify-center items-center h-fit md:hidden mt-10 py-16"
              style={{
                backgroundImage: `url(${FocusArea})`,
                backgroundPosition: "center",
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(0, 0, 139, 0.5)",
                backgroundSize: "cover",
              }}
            >
              <div className="flex flex-wrap w-fit max-w-4xl z-1">
                {cardsData.map((card) => (
                  <div
                    key={card.title}
                    className={` rounded-lg overflow-hidden ${card.color} bg-opacity-80 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 m-4 pb-6`}
                  >
                    <div className="p-4">
                      <h2 className="text-2xl text-white font-bold my-6">
                        {card.title}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Offering */}
          <div className="">
            <h1 className="text-blue-500 text-2xl mt-10 mb-3 text-center">
              EdSpring Solutions professional learning offerings are designed to
              be:
            </h1>

            <Offering />
          </div>

          {/* 
          <div className="my-6 ">
            <video src={ChildrenVideos} type="" controls autoPlay loop />
          </div> */}

          <div
            className="bg-video my-10 pb-10"
            style={{
              backgroundImage: `url(${FocusGif})`,
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(0, 0, 139, 0.5)",
              backgroundSize: "cover",
            }}
          >
            <h1 className="text-white text-4xl pt-10 my-10 text-center md:mt-0">
              Focus Areas
            </h1>

            <ul className="my-6 text-md list-disc text-white px-8 md:px-10">
              <div className="md:grid grid-cols-4 gap-4">
                <div className="col-span-1 rounded-lg mt-6 md:my-0 p-1 ">
                  <li className="my-2 rounded-md ">
                    Special Education Support and Services
                  </li>
                  <li className="my-2 rounded-md ">
                    English Learners (Multilingual Learners)
                  </li>
                  <li className="my-2 rounded-md ">
                    {" "}
                    Inclusion and Inclusive Practices
                  </li>
                  <li className="my-2 rounded-md "> Classroom Management</li>
                  <li className="my-2 rounded-md ">
                    Evidence-Based Behavior Interventions
                  </li>
                </div>
                <div className="col-span-1 rounded-lg  md:my-0 p-1 ">
                  <li className="my-2 rounded-md ">
                    {" "}
                    Trauma-Informed Teaching
                  </li>
                  <li className="my-2 rounded-md ">
                    Multi-Tiered System of Supports (MTSS)
                  </li>
                  <li className="my-2 rounded-md ">
                    {" "}
                    Differentiated Instruction
                  </li>
                  <li className="my-2 rounded-md ">
                    Universal Design for Learning (UDL)
                  </li>
                  <li className="my-2 rounded-md ">
                    Culturally Responsive and Sustaining Education
                  </li>
                </div>
                <div className="col-span-1 rounded-lg  md:my-0 p-1 ">
                  <li className="my-2 rounded-md ">
                    {" "}
                    Co-Teaching and Collaboration{" "}
                  </li>
                  <li className="my-2 rounded-md ">
                    {" "}
                    Social-Emotional Learning (SEL)
                  </li>
                  <li className="my-2 rounded-md ">
                    {" "}
                    Early Childhood Education
                  </li>
                  <li className="my-2 rounded-md "> Technology Integration </li>
                  <li className="my-2 rounded-md ">
                    {" "}
                    Special Education Compliance{" "}
                  </li>
                  <li className="my-2 rounded-md "> EdTech Integration </li>
                </div>
                <div className="col-span-1 rounded-lg  md:my-0 p-1">
                  <li className="my-2 rounded-md "> Section 504 Compliance </li>
                  <li className="my-2 rounded-md ">
                    {" "}
                    English Learners (EL) Compliance{" "}
                  </li>

                  <li className="my-2 rounded-md "> Parent Engagement </li>
                  <li className="my-2 rounded-md ">
                    {" "}
                    Education in Fragile and Conflict Contexts{" "}
                  </li>

                  <li className="my-2 rounded-md ">
                    {" "}
                    School Administration and Leadership{" "}
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default BuidingComponents;
