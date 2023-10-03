import Nav from "../Nav/Nav";
import OutService from "./OutService";
import HeroCover from "../../assets/covers/heroCover.svg";

const Hero = () => {
  return (
    <main
      className="w-full min-h-screen"
      style={{
        background: `url(${HeroCover}) `,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="w-full h-screen 
        bg-gradient-to-t md:bg-gradient-to-r from-black to-transparent 
        "
      >
        <Nav />

        {/* main content */}
        <div className="flex flex-col  justify-center items-start w-full h-full text-gray-200 pl-2 md:pl-6 ">
          <h1 className="text-2xl font-bold lg:text-4xl">
            We Ensure A Best Insurance Service
          </h1>
          <p className="sm:text-lg text-base mt-4 font-bold">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex  flex-col gap-y-5 sm:flex-row  gap-x-2 mt-4 sm:gap-y-0 btn ">
            <button className="btn skyBlueGradient text-white">
              Get Quote Now
            </button>
            <button
              className="rounded-full border border-blue-600 
             hover:border-blue-700 hover:bg-blue-600 hover:text-white transition-all  btn "
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <OutService />
    </main>
  );
};

export default Hero;
