import mockData from "../../data/MOCK_DATA.json";
import FeedbackCard from "./FeedbackCard";

const Review = () => {
  return (
    <section id="Review" className="bg-skyBlue eachSection py-20 ">
      <div className="py-10 text-center">
        <h2 className="text-3xl font-bold py-8 text-white">
          Let's see what others say
        </h2>
        <p className="text-white text-xl">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-4 px-5   ">
        {mockData.splice(0, 5).map((data) => {
          return (
            <FeedbackCard
              key={data.id}
              title={data.title}
              roll={data.roll}
              star={data.star}
              desc={data.desc}
              image={data.image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Review;
