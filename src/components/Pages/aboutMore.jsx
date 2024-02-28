import { Link } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";
import DrTaiwo from "./drTaiwo.jpeg";
import cardBg from "./class-far.jpg";
import HeroImage from "../hero-edited.png";
import React, { Component } from "react";

const cardsData = [
  {
    title: "Equity",
    content:
      "We recognize that systemic barriers exist in education, and we strive to address these inequities through our services. We believe every student deserves access to a high-quality education, regardless of background or circumstances.",
    color: "bg-green-500",
  },
  {
    title: "Collaborative Partnership",
    content:
      "We value collaborative partnerships with our clients. We work closely with our clients to understand their unique needs and goals, and we partner with them to develop effective solutions that improve educational outcomes.",
    color: "bg-blue-500",
  },
  {
    title: "Evidence-Based Practices",
    content:
      "We stay up-to-date with the latest research and best practices in education and use this knowledge to inform our services. We believe that evidence-based practices are essential to achieving the best outcomes for students.",
    color: "bg-orange-400",
  },
  {
    title: "Innovation",
    content:
      "We believe that new ideas and approaches can drive positive change in education, and our team thinks outside the box and develop innovative solutions to complex challenges. We believe that through innovation, we can improve educational outcomes and make a positive impact on students' lives.",
    color: "bg-gray-500",
  },
];

class AboutMore extends Component {
  componentDidMount  () {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Navbar />
        <section id="about" className=" text-white lg:mt-0  px-2 pb-10">
          <div className="px-6 md:pt-6 pt-20 py-10 bg-white shadow-md">
            <h1 className="text-4xl text-center text-blue-500 font-semibold">
              EdSpring <span className="text-green-500 ">Solutions</span>
            </h1>
            <div className="lg:grid gap-6 grid-cols-2  mt-10 md:mt-2 ">
              <div className="mt-10  md:hidden mb-10">
                <img src={HeroImage} alt="" className="h-[250px] w-fill" />
              </div>
              <div className="col-span-1">
                <p className="md:text-xl  text-gray-600 text-lg">
                  Improving student outcomes is a complex and multifaceted
                  challenge that requires a collaborative effort across the
                  entire education ecosystem. At EdSpring Solutions, we believe
                  in a holistic approach that takes into account the complex
                  interplay of factors that affect student achievement, and we
                  partner with our clients to proffer actionable solutions that
                  support the achievement of all students.
                </p>
                <p className="md:text-xl  text-gray-600 mt-4 text-lg">
                  Our team utilizes evidence-based practices and
                  solution-oriented approaches to promote high-quality education
                  for all students through our educational services. At the
                  heart of our team's approach is a dedication to staying
                  current with the latest research and best practices in the
                  field of education, and we integrate this knowledge into our
                  work with clients to achieve the desired results.
                </p>
                <p className="md:text-xl  text-gray-600 text-lg mt-4 mb-1">
                  Our collaborative approach involves working closely with our
                  clients to create a shared understanding of their needs,
                  challenges, and desired outcomes. We strive to establish open
                  lines of communication with our clients, listening to their
                  input and feedback at every step of the way, thereby providing
                  comprehensive and actionable solutions.
                </p>
              </div>

              <div className="col-span-1 mt-10 hidden md:block">
                <img
                  src={HeroImage}
                  alt=""
                  className="h-fill w-fill md:h-[90%] md:w-[100%] shadow-xl"
                />
              </div>
            </div>

            {/* Desktop */}
            <div
              className="  justify-center items-center h-fit hidden md:flex my-20"
              style={{
                backgroundImage: `url(${cardBg})`,
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
                      <p className="text-white">{card.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile */}
            <div
              className=" flex justify-center items-center h-fit md:hidden mt-10 py-16"
              style={{
                backgroundImage: `url(${cardBg})`,
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(0, 0, 139, 0.5)",
                backgroundSize: "cover",
              }}
            >
              <div className="flex flex-wrap w-fit max-w-4xl">
                {cardsData.map((card) => (
                  <div
                    key={card.title}
                    className={` rounded-lg overflow-hidden ${card.color} bg-opacity-80 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 m-4 pb-6 `}
                  >
                    <div className="p-4">
                      <h2 className="text-2xl text-white font-bold my-6">
                        {card.title}
                      </h2>
                      <p className="text-white">{card.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="">
              <h2 className="text-blue-500 text-3xl mb-6  text-center md:text-start">
                Meet the <span className="my-3 ">Founder</span>
              </h2>
              <div className="lg:grid gap-6 grid-cols-2   items-center ">
                <div className="col-span-1 lg:mt-0 text-center flex items-center justify-center">
                  <img
                    src={DrTaiwo}
                    alt="Founders Image"
                    className="
              md:h-[550px] md:w-[550px] 
              h-full w-full"
                  />
                </div>
                <div className="lg:col-span-1 lg:mt-10">
                  <p className="md:text-xl font-light text-gray-600 text-lg mt-12">
                    Dr. Emmanuel Taiwo is an education leader and consultant
                    with over 15 years of dedicated experience promoting
                    excellence and equity in education for all students. He
                    possesses a broad range of expertise, including special
                    education, inclusive education, teaching multilingual
                    learners, culturally sustaining pedagogy, Multi-Tiered
                    System of Supports (MTSS), behavior supports and
                    interventions, differentiated instruction, Universal Design
                    for Learning (UDL), school leadership, and compliance.
                    Having worked in both K–12 and higher education settings,
                    Dr. Taiwo is deeply committed to empowering stakeholders in
                    education to achieve equitable learning outcomes for all
                    students, with a focus on driving systemic change and
                    creating opportunities for all students to flourish. As a
                    passionate advocate for inclusive education, Dr. Taiwo has
                    made significant contributions to the field through his
                    research, publications, and numerous presentations at
                    national and international conferences. He is a member of
                    several professional organizations and holds a doctorate in
                    Special Education from John Hopkins University, Baltimore,
                    USA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}



export default AboutMore;
