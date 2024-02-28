import { Link } from "react-router-dom";
import Planning from "../assets/img/point-papar.jpg";
import Building from "../assets/img/book-bible.jpg";
import bgCard from "../assets/img/classroom-close.jpg";
import Law from "./Pages/law.jpg";
import family from "./Pages/family.jpg";
import BlackandWhite from "./media/morepictures/blackandwhite.jpg";

const Services = () => {
  return (
    <>
      <section
        id="services"
        className="text-white md:px-28 w-full md:py-10 px-4 pt-20 pb-10 bg-opacity-60"
        style={{
          backgroundImage: `url(${bgCard})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" text-center font-bold text-4xl mb-6">Services</h1>

        {/* Mobile */}
        <div className="md:hidden  -mx-4  p-6">
          <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
            <div className="rounded shadow-xl h-full bg-green-500 bg-opacity-70">
              <Link to="/capacityBuilding" >
                <img
                  className="w-full m-0 rounded-t lazy"
                  src={BlackandWhite}
                  width="960"
                  height="500"
                  alt="This post thumbnail"
                />
              </Link>
              <div className="px-6 py-5">
                <div className="font-semibold text-lg mb-2">
                  <Link to="/capacityBuilding" className="text-white hover:text-orange-400" >
                    Capacity Building
                  </Link>
                </div>
                <p className="text-gray-100 mb-5" title="Published date">
                  Professional Learning Opportunities for Instructional Staff:
                  For instructional staff to create nurturing learning
                  experiences for students, they require continuous professional
                  learning opportunities tailored to their specific needs and
                  roles.
                </p>
                <Link
                  to="/capacityBuilding"
                
                  className="text-sm px-4 py-2 border-lg border border-text rounded-lg md:rounded-xl  text-white  hover:text-orange-400"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
            <div className="rounded shadow-md h-full bg-opacity-70 bg-blue-500">
              <Link  to="/systemandprogramPlanning" >
                <img
                  className="w-full m-0 rounded-t lazy"
                  src={Planning}
                  width="960"
                  height="500"
                  alt="This post thumbnail"
                />
              </Link>
              <div className="px-6 py-5">
                <div className="font-semibold text-lg mb-2">
                  <Link  to="/systemandprogramPlanning" className="text-white hover:text-orange-400" >
                    System & Program Planning
                  </Link>
                </div>
                <p className="text-gray-100 mb-4" title="Published date">
                  Strategic planning is the cornerstone of success for any
                  organization, providing a roadmap for achieving goals and
                  realizing its vision.
                </p>
                <Link
                  to="/systemandprogramPlanning"
                
                  className="text-sm  px-4 py-2 border-lg border border-text rounded-lg md:rounded-xl  text-white  hover:text-orange-400"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
            <div className="rounded shadow-md h-full bg-opacity-70 bg-orange-400">
              <Link to="/specialeducation" >
                <img
                  className="w-full m-0 rounded-t lazy"
                  src={family}
                  width="960"
                  height="500"
                  alt="This post thumbnail"
                />
              </Link>
              <div className="px-6 py-5">
                <div className="font-semibold text-lg mb-2">
                  <Link to="/specialeducation" className="text-white hover:text-orange-400" >
                    Special Education Advocacy for Families
                  </Link>
                </div>
                <p className="text-gray-100 mb-4" title="Published date">
                  Navigating the special education process can be overwhelming
                  and challenging for parents and caregivers of children with
                  special needs.
                </p>
                <Link
                  to="/specialeducation"
                
                  className="text-sm  px-4 py-2 border-lg border border-text rounded-lg md:rounded-xl  text-white  hover:text-orange-400"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
            <div className="rounded shadow-md h-full bg-opacity-70 bg-gray-400">
              <Link to="/specialeducation504" >
                <img
                  className="w-full m-0 rounded-t lazy"
                  src={Law}
                  width="960"
                  height="500"
                  alt="This post thumbnail"
                />
              </Link>
              <div className="px-6 py-5">
                <div className="font-semibold text-lg mb-2">
                  <Link to="/specialeducation504" className="text-white hover:text-orange-400" >
                    Special Education and Section 504 Compliance
                  </Link>
                </div>
                <p className="text-gray-100 mb-4" title="Published date">
                  Ensuring compliance with special education laws and
                  regulations is a challenge faced by many schools, and
                  noncompliance remains a widespread issue due to the complexity
                  of special education laws and regulations.
                </p>
                <Link
                  to="/specialeducation504"
                  className="text-sm  px-4 py-2 border-lg border border-text rounded-lg md:rounded-xl  text-white  hover:text-orange-400"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="md:flex  -mx-4  hidden">
          <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
            <div className="rounded shadow-xl h-full bg-green-500 bg-opacity-70">
              <Link to="/capacityBuilding">
                <img
                  className="w-full m-0 rounded-t lazy"
                  src={BlackandWhite}
                  width="960"
                  height="500"
                  alt="This post thumbnail"
                />
              </Link>
              <div className="px-6 py-5">
                <div className="font-semibold text-lg mb-2">
                  <Link to="/capacityBuilding" className="text-white hover:text-orange-400" >
                    Capacity Building
                  </Link>
                </div>
                <p className="text-gray-100 mb-5" title="Published date">
                  Professional Learning Opportunities for Instructional Staff:
                  For instructional staff to create nurturing learning
                  experiences for students, they require continuous professional
                  learning opportunities tailored to their specific needs and
                  roles.
                </p>
                <Link
                  to="/capacityBuilding"
                
                  className="text-sm px-4 py-2 border-lg border border-text rounded-lg md:rounded-xl  text-white  hover:text-orange-400"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
            <div className="rounded shadow-md h-full bg-opacity-70 bg-blue-500">
              <Link to="/systemandprogramPlanning">
                <img
                  className="w-full m-0 rounded-t lazy"
                  src={Planning}
                  width="960"
                  height="500"
                  alt="This post thumbnail"
                />
              </Link>
              <div className="px-6 py-5">
                <div className="font-semibold text-lg mb-2">
                  <Link to="/systemandprogramPlanning" className="text-white hover:text-orange-400" >
                    System & Program Planning
                  </Link>
                </div>
                <p className="text-gray-100 mb-4" title="Published date">
                  Strategic planning is the cornerstone of success for any
                  organization, providing a roadmap for achieving goals and
                  realizing its vision.
                </p>
                <Link
                  to="/systemandprogramPlanning"
                
                  className="text-sm  px-4 py-2 border-lg border border-text rounded-lg md:rounded-xl  text-white  hover:text-orange-400"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
            <div className="rounded shadow-md h-full bg-opacity-70 bg-orange-400">
              <Link  to="/specialeducation" >
                <img
                  className="w-full m-0 rounded-t lazy"
                  src={family}
                  width="960"
                  height="500"
                  alt="This post thumbnail"
                />
              </Link>
              <div className="px-6 py-5">
                <div className="font-semibold text-lg mb-2">
                  <Link  to="/specialeducation" className="text-white hover:text-orange-400" >
                    Special Education Advocacy for Families
                  </Link>
                </div>
                <p className="text-gray-100 mb-4" title="Published date">
                  Navigating the special education process can be overwhelming
                  and challenging for parents and caregivers of children with
                  special needs.
                </p>
                <Link
                  to="/specialeducation"
                
                  className="text-sm  px-4 py-2 border-lg border border-text rounded-lg md:rounded-xl  text-white  hover:text-orange-400"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          </div>
          
          <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
            <div className="rounded shadow-md h-full bg-opacity-70 bg-gray-400">
              <Link to="/specialeducation504">
                <img
                  className="w-full m-0 rounded-t lazy"
                  src={Law}
                  width="960"
                  height="500"
                  alt="This post thumbnail"
                />
              </Link>
              <div className="px-6 py-5">
                <div className="font-semibold text-lg mb-2">
                  <Link to="/specialeducation504" className="text-white hover:text-orange-400" >
                    Special Education and Section 504 Compliance
                  </Link>
                </div>
                <p className="text-gray-100 mb-4" title="Published date">
                  Ensuring compliance with special education laws and
                  regulations is a challenge faced by many schools, and
                  noncompliance remains a widespread issue due to the complexity
                  of special education laws and regulations.
                </p>
                <Link
                  to="/specialeducation504"
                  className="text-sm  px-4 py-2 border-lg border border-text rounded-lg md:rounded-xl  text-white  hover:text-orange-400"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
