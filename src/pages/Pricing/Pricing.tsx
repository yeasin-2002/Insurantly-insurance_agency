import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div>
      <div className="py-10 text-center">
        <h2 className="text-3xl font-bold py-8 text-gray-800">Pricing</h2>
        <p className="text-gray-600 text-xl">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 px-6 md:grid-cols-2 lg:grid-cols-3 ">
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </div>
  );
};

export default Pricing;
