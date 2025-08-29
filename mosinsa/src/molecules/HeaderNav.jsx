import HeaderNavLeft from "./HeaderNavLeft";
import HeaderNavRight from "./HeaderNavRight";

const HeaderNav = () => {
  return (
    <div className="flex justify-between">
      <HeaderNavLeft></HeaderNavLeft>
      <HeaderNavRight></HeaderNavRight>
    </div>
  );
};

export default HeaderNav;
