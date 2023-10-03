import Logo from "../../layout/Logo";
import menuItem from "../../utils/MenuItems";

const LargeDeviceNav = () => {
  return (
    <div className="hidden lg:flex  justify-between px-10 pt-8 pb-4  eachSection ">
      <div className="flex gap-x-8">
        <Logo />
        <ul id="menu" className="flex ">
          {menuItem.map((item) => {
            return (
              <li key={item.name} className="mx-4 text-gray-100">
                <a href={item.link}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="">
        <button className="border btn border-gray-900 text-gray-900 px-4 mx-4 rounded-md font-bold">
          Log In
        </button>
        <button className="rounded-md text-white font-bold btn skyBlueGradient ">
          Become a member
        </button>
      </div>
    </div>
  );
};

export default LargeDeviceNav;
