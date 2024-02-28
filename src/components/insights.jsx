const Insight = () => {
  return (
    <>
      <section
        id="about"
        className="bg-gray-200  text-white  md:px-32 px-10 py-6"
      >
        <div className="md:mx-40">
          <h1 className="text-2xl text-center text-gray-800 font-semibold mb-6">
            Insight
          </h1>
        </div>

        <div className="md:grid md:grid-cols-2 ">
          <div className="md:col-span-1 md:mt-20">
            <h2 className="text-gray-800 font-bold text-lg"></h2>
            <p className="md:text-md text-gray-600 mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              soluta saepe nulla quae, repellat officiis perspiciatis dolorum
              possimus alias quis quo ad pariatur est vel nemo optio? Recusandae
              cum voluptatem pariatur deleniti repellat minima quia cumque,
              maiores eaque assumenda placeat quod sed, expedita animi quo ad
              itaque error aut quis!
            </p>
          </div>
          <div className="md:col-span-1 mt-6 md:mt-0">
          <img
            src="https://img.freepik.com/free-photo/businesspeople-working-finance-accounting-analyze-financi_74952-1411.jpg?w=740&t=st=1677136354~exp=1677136954~hmac=1b624d85ca7d2a23badc64252e6b347d19ea1d7f289c305fa4ebe0fb086014b3"
            alt="Image PlaceHolder"
          />
        </div>
        </div>
      </section>
    </>
  );
};

export default Insight;
