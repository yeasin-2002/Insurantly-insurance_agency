import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import menuItem from "../../utils/MenuItems";
import { useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:hidden  px-6 bg-navyBlue py-4  ">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-white font-bold">BrandName</p>
        </div>

        <div className="flex gap-x-3">
          <span>
            <AiOutlineSearch className="text-white text-2xl" />
          </span>
          <span>
            <AiOutlineShoppingCart className="text-white text-2xl " />
          </span>
          <span>
            <BiMenuAltRight
              className="text-white text-2xl cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          </span>
        </div>
      </div>

      {isOpen && (
        <div className=" mt-6 w-full h-[30vh]   transition-all   flex flex-col justify-center text-xl items-center gap-y-3">
          {menuItem.map((item) => {
            return (
              <div key={item.name}>
                <a
                  href={item.link}
                  className="hover:font-bold font-normal text-white"
                >
                  {item.name}
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MobileNav;
