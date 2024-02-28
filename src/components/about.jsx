import { Link } from "react-router-dom";
import HeroImage from "./hero-edited.png";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-white text-white lg:mt-6  px-10 pt-10 md:pt-6 pb-10 items-center "
      >
        <div className="lg:mx-20">
          <h1 className="text-4xl text-center text-blue-500 font-semibold">
            EdSpring <span className="text-green-500 ">Solutions</span>
          </h1>
          <div className="lg:grid gap-6 grid-cols-2  mt-10 md:mt-2 ">
            <div className="mt-10  md:hidden">
              <img
                src={HeroImage}
                alt=""
                className="h-[250px] w-fill image-border"
              />
            </div>
            
            <div className="col-span-1">
              <p className="md:text-xl  text-gray-600 text-lg mt-6">
                Improving student outcomes is a complex and multifaceted
                challenge that requires a collaborative effort across the entire
                education ecosystem. At EdSpring Solutions, we believe in a
                holistic approach that takes into account the complex interplay
                of factors that affect student achievement, and we partner with
                our clients to proffer actionable solutions that support the
                achievement of all students.
              </p>
              <p className="md:text-xl hidden md:block text-gray-600 text-lg mt-4">
                Our team utilizes evidence-based practices and solution-oriented
                approaches to promote high-quality education for all students
                through our educational services. At the heart of our team's
                approach is a dedication to staying current with the latest
                research and best practices in the field of education, and we
                integrate this knowledge into our work with clients to achieve
                the desired results.
              </p>
              <Link to="/aboutMore">
                <button className="bg-white px-4 mt-6 py-2 border-lg border border-blue-500 rounded-lg md:rounded-xl text-blue-500 hover:bg-white hover:text-blue-400">
                  Read More About Us &rarr;
                </button>
              </Link>
            </div>
            <div className="col-span-1 mt-10 hidden md:block">
              <img
                src={HeroImage}
                alt=""
                className="h-fill w-fill md:h-[90%] md:w-[100%] shadow-xl image-border"
              />

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
