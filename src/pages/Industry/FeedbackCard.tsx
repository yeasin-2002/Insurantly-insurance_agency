import avatar from "../../assets/temp/avatar.png";
import FullStar from "../../components/Icons/FullStar";

interface cardProps {
  title: string;
  roll: string;
  star: number;
  desc: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image?: any;
}

const FeedbackCard = ({ title, star, roll, desc }: cardProps) => {
  return (
    <div className=" py-6 px-8 bg-white rounded-sm relative">
      <p className="text-gray-600  font-bold  text-xl  ">{title}</p>
      <h4 className="text-gray-700  font-base ">{roll}</h4>
      <p className="flex">
        {star}
        <FullStar />
      </p>

      <br />
      <p className="text-gray-600"> {desc}</p>

      <div className="absolute top-5   -left-5 w-10 h-10">
        <img src={avatar} alt={title} className="w-full h-full rounded-full" />
      </div>
    </div>
  );
};

export default FeedbackCard;
