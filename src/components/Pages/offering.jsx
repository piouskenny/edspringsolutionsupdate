import FocusArea from "../media/morepictures/childrenhandup.jpg";
import Team from "../media/morepictures/team.jpg";

const cardsItems = [
  {
    title: "Relevant",
    color: "bg-green-500",
  },
  {
    title: "Engaging",
    color: "bg-blue-500",
  },
  {
    title:  " Coherent ",
    color: "bg-orange-400",
  },
  {
    title: "Targeted",
    color: "bg-gray-500",
  },
  {
    title: "Data-driven",
    color: "bg-green-500",
  },
  {
    title:"Differentiated",
    color: "bg-blue-500",
  },
  {
    title: "Collaborative",
    color: "bg-orange-400",
  },
];

const Offering = () => {
  return (
    <>
      <div>
        {/* Desktop */}
        <div
          className="  justify-center items-center h-fit hidden md:flex "
          style={{
            backgroundImage: `url(${Team})`,
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 139, 0.5)",
            backgroundSize: "cover",
          }}
        >
          <div className="flex w-fit max-w-9xl my-16 text-center">
            {cardsItems.map((card) => (
              <div
                key={card.title}
                className={` bg-opacity-80 rounded-lg overflow-hidden ${card.color}  m-4 transition-all duration-400 transform hover:-translate-y-6`}
              >
                <div className="p-5">
                  <h2 className="text-[16px] text-white font-bold my-3 text-center items-center">
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
            backgroundImage: `url(${Team})`,
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 139, 0.5)",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-wrap w-fit max-w-4xl z-1">
            {cardsItems.map((card) => (
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

    </>
  );
};

export default Offering;
