import menuItem from "../../utils/MenuItems";

const LargeDeviceNav = () => {
  return (
    <div className="hidden lg:flex  justify-between px-10  eachSection ">
      <div className="flex gap-x-8">
        <p className="text-white">BrandName</p>
        <ul id="menu" className="flex ">
          {menuItem.map((item) => {
            return (
              <li key={item.name} className="mx-4 text-gray-800">
                <a href={item.link}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <button className="border border-white px-4 py-2">Log In</button>
        <button className="bg-skyBlue px-4 py-2 rounded-md text-white font-bold">
          Become a member
        </button>
      </div>
    </div>
  );
};

export default LargeDeviceNav;
