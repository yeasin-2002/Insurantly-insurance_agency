import { HTMLAttributes } from "react";
import CheckIcon from "../../components/Icons/CheckIcon";
import ExclamationIcon from "../../components/Icons/ExclamationIcon";

interface pricingProps extends HTMLAttributes<HTMLDivElement> {
  pricingType: string;
  desc: string;
  pricing: {
    cost: number;
    dates: string;
  };
  btnLink: {
    link: string;
    btnChild: string;
  };
  feature: {
    isDone: boolean;
    featureName: string;
  }[];
}

const PricingCard = ({
  pricingType,
  desc,
  pricing,
  btnLink,
  feature,
}: pricingProps) => {
  return (
    <>
      <div className="w-full  px-10 py-12 bg-white rounded-lg border border-neutral-200 flex-col justify-start items-center gap-9 inline-flex">
        <div className="text-slate-800 text-2xl font-bold font-['Montserrat'] leading-loose tracking-tight">
          {pricingType}
        </div>
        <div className="text-center text-neutral-500 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">
          {desc}
          Organize across all <br />
          apps by hand
        </div>
        <div className="flex-col justify-start items-center flex">
          <div className="text-sky-500 text-4xl font-bold font-['Montserrat'] leading-10 tracking-tight">
            {pricing.cost}$
          </div>
          <div className="text-blue-300 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">
            Per {pricing.dates}
          </div>
        </div>
        <div className="h-12 px-10 py-3.5 bg-sky-500 rounded flex-col justify-start items-center gap-2.5 flex">
          <a
            href={btnLink.link}
            className="text-center text-white text-sm font-bold font-['Montserrat'] leading-snug tracking-tight"
          >
            Try for free
          </a>
        </div>
        <div className="flex-col justify-start items-start gap-3.5 flex">
          {feature.map((value) => {
            return (
              <div>
                {value.isDone ? (
                  <div className="justify-start items-center gap-2.5 inline-flex">
                    <div className="w-8 h-8 px-2 py-2.5 bg-green-500 rounded-full justify-center items-center flex">
                      <CheckIcon />
                    </div>
                    <div className="w-52 h-7 text-slate-800 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
                      {value.featureName}
                    </div>
                  </div>
                ) : (
                  <div className="justify-start items-center gap-2.5 inline-flex">
                    <div className="w-8 h-8 px-2 py-2.5 bg-stone-300 rounded-full justify-center items-center flex">
                      <ExclamationIcon />
                    </div>
                    <div className="w-52 h-7 text-slate-800 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
                      {value.featureName}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PricingCard;
