import Port1 from "../assets/portfolios/Port1.png";
import Port2 from "../assets/portfolios/Port2.png";
import Port3 from "../assets/portfolios/Port3.png";
import Port4 from "../assets/portfolios/port4.png";
import Port5 from "../assets/portfolios/port5.png";
import Port6 from "../assets/portfolios/port6.png";
import Port7 from "../assets/portfolios/port7.png";
import Port8 from "../assets/portfolios/port8.png";

const Partners = () => {
  return (
    <>
      <section
        id="porfolios"
        className=" w-fulltext-white md:mt-6 md:px-32 px-10 py-6 md:py-16"
      >
        <div className="md:mx-40">
          <h1 className="text-4xl text-center text-blue-500 font-medium">
            Portfolio
          </h1>
        </div>

        <div className="grid grid-cols-3 text-center gap-12 my-10 items-center">
          <div className="col-1">
            <img
              className="md:w-40 md:h-40 h-[60px] w-[100px] object-center"
              src={Port1}
              alt="Partner 1"
            />
          </div>
          <div className="col-1">
            <img
              className="md:w-40 md:h-40 h-[60px] w-[100px] object-center"
              src={Port3}
              alt="Partner 1"
            />
          </div>
          <div className="col-1">
            <img
              className="md:w-40 md:h-40 h-[60px] w-[100px] object-center"
              src={Port4}
              alt="Partner 1"
            />
          </div>
          <div className="col-1">
            <img
              className="md:w-[15rem] md:h-[15rem] h-[60px] w-[100px] object-center"
              src={Port5}
              alt="Partner 1"
            />
          </div>
          <div className="col-1">
            <img className="w-fill h-fill" src={Port2} alt="Partner 2" />
          </div>
          <div className="col-1">
            <img
              className="md:w-40 md:h-40 h-[60px] w-[100px] object-center"
              src={Port6}
              alt="Partner 1"
            />
          </div>
          <div className="col-1">
            <img
              className="md:w-40 md:h-40 h-[60px] w-[100px] object-center"
              src={Port7}
              alt="Partner 1"
            />
          </div>
          <div className="col-1">
            <img
              className="md:w-40 md:h-40 h-[60px] w-[100px] object-center"
              src={Port8}
              alt="Partner 1"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
