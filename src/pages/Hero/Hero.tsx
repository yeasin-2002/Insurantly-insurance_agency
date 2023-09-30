import Nav from "../Nav/Nav";
import HeroCover from "../../assets/covers/heroCover.svg";
const Hero = () => {
  return (
    <main
      className="w-full min-h-screen relative"
      style={{
        background: `url(${HeroCover}) no-repeat center center `,
        // background: `linear-gradient(90deg, #000 0.13%, #000 0.14%, rgba(0, 0, 0, 0.00) 99.56%)`,
      }}
    >
      <div
        className="w-full h-full absolute top-0 left-0"
        style={{
          background: `linear-gradient(90deg, #000 0.13%, #000 0.14%, rgba(0, 0, 0, 0.00) 99.56%)`,
        }}
      ></div>
      <Nav />
    </main>
  );
};

export default Hero;
