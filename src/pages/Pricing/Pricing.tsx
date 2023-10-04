import pricingData from "../../data/PricingData";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <section className="bg-navyBlue py-16">
      <div className=" text-center">
        <h2 className="text-3xl font-bold py-8 text-gray-300">Pricing</h2>
        <p className="text-gray-400 mb-4 text-xl">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 px-6 md:grid-cols-2 lg:grid-cols-3 ">
        {pricingData.map((val) => (
          <PricingCard
            pricingType={val.pricingType}
            btnLink={{
              link: val.btnLink.link,
              btnChild: val.btnLink.btnChild,
            }}
            desc=""
            pricing={val.pricing}
            feature={val.feature}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
