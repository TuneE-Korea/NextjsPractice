import HeaderNav from "@/molecules/HeaderNav";
import HeaderCateg from "@/atoms/HeaderCateg";
import HeaderSearch from "@/molecules/HeaderSearch";
import MusinsaBell from "@/molecules/MusinsaBell";

const HeaderLayer = () => {
  return (
    <div>
      <HeaderNav></HeaderNav>
      <MusinsaBell></MusinsaBell>
      <HeaderSearch></HeaderSearch>
      <HeaderCateg></HeaderCateg>
    </div>
  );
};

export default HeaderLayer;
