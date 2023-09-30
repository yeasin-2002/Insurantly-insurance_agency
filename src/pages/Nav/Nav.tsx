import LargeDeviceNav from "./LargeDeviceNav";
import MobileNav from "./MobileNav";

const Nav = () => {
  return (
    <nav>
      <MobileNav />
      <LargeDeviceNav />
    </nav>
  );
};

export default Nav;
