import outServiceData from "../../data/ourServiceData";

const OutService = () => {
  return (
    <div className="bg-navyBlue p-10 flex flex-col sm:px-10 lg:py-24 2xl:py-40  sm:py-10 md:flex-row gap-y-20 px-6 gap-x-2 items-center justify-center text-white  ">
      {outServiceData.map((val) => {
        return (
          <div
            key={val.desc}
            className="flex items-center justify-center text-center flex-col"
          >
            <val.Icon />
            <h2 className="text-2xl mt-4 font-bold 2xl:text-3xl">{val.name}</h2>
            <p className="font-medium mt-2 2xl:text-xl">{val.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default OutService;
