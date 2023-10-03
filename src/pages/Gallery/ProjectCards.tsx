import projectBG from "../../assets/temp/forest.webp";

interface projectProps {
  type: string;
  title: string;
  image?: string;
  link: string;
}

const ProjectCards = ({ type, title, link }: projectProps) => {
  return (
    <div
      className="w-full h-80 relative   rounded-md"
      style={{
        backgroundImage: `url(${projectBG})`,
      }}
    >
      <div className="flex flex-col justify-end  items-start px-6  py-4     h-full">
        <h3 className="text-sm mb-3 font-bold text-white">{type}</h3>
        <h4 className="text-lg font-bold text-white">{title}</h4>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="btn skyBlueGradient mt-5 px-4 py-2 text-slate-300  font-bold"
        >
          View Project
        </a>
      </div>
      {/* <div className="absolute top-0 w-full h-full left-0 bg-gradient-to-b from-black to-neutral-700"></div> */}
    </div>
  );
};

export default ProjectCards;
