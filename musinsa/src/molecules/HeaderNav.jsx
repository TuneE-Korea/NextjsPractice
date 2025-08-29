import HeaderNavLeft from "../atoms/HeaderNavLeft";
import HeaderNavRight from "../atoms/HeaderNavRight";

const HeaderNav = () => {
  return (
    <nav className="flex justify-between">
      <HeaderNavLeft></HeaderNavLeft>
      <HeaderNavRight></HeaderNavRight>
    </nav>
  );
};

export default HeaderNav;
