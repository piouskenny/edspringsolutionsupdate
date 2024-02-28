import Navbar from "./navbar";
import HeroImage from "./hero-gif.gif";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-no-repeat w-full
        h-fit
         text-white
        text-center
        md:pb-0
      "
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover", 
        }}
      >
        <div
          className="bg-gray-900 bg-opacity-60 md:bg-opacity-70
         md:px-10 md:pb-40 md:pt-20  px-6 md:bg-cover bg-contain
         h-[65vh] 
  
         md:h-screen"
         
    
        >
          <div id="content" className="md:mt-20 md:mb-0 text-center pt-24 md:pt-0 ">
            <h1 className="text-5xl md:text-8xl font-bold text-center text-blue-400 cursor-pointer hover:text-green-400">
              EdSpring <span className="text-green-400  hover:text-blue-500">
               Solutions 
              </span>  <span className="text-white text-4xl md:text-7xl block md:mt-4"  >LLC</span>
            </h1>
            <h1 className="md:text-xl font-medium text-md text-white mt-6 md:mt-10">
              Transforming Education with Innovative Solutions, Improving
              Student Outcomes
            </h1>
            <a href="#contact" >
              <button className="cursor-pointer transform hover:scale-125 text-white px-4 mt-10 py-2 border-md border  border-blue-400  rounded-lg md:rounded-xl  hover:border-blue-500">
                Schedule a meeting now &rarr;
              </button>
            </a>
            <br/>
             <br/>
              <br/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;