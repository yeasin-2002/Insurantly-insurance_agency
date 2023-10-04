import Facebook from "../../components/Icons/Facebook";
import Instagram from "../../components/Icons/Instagram";
import Twitter from "../../components/Icons/Twitter";

const FooterOutro = () => {
  return (
    <div className="bg-white  sm:flex justify-between px-14  md:px-32 py-10 ">
      <div>
        <p className="font-bold text-lg text-gray-700">
          Made With Love By Yeasin200.dev <br />
        </p>
        <p className="font-semibold text-sm text-gray-600">
          {" "}
          All Right Reserved{" "}
        </p>
      </div>
      <div className="flex mt-8 sm:mt-0 gap-x-2">
        <Facebook />
        <Instagram />
        <Twitter />
      </div>
    </div>
  );
};

export default FooterOutro;
