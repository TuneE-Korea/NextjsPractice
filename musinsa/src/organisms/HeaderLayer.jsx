import HeaderNav from "@/molecules/HeaderNav";
import HeaderCateg from "@/atoms/HeaderCateg";
import HeaderSearch from "@/molecules/HeaderSearch";
import MusinsaBell from "@/molecules/MusinsaBell";

const HeaderLayer = () => {
  return (
    <section>
      <HeaderNav></HeaderNav>
      <MusinsaBell></MusinsaBell>
      {/* 검색창 구현  */}
      <HeaderSearch></HeaderSearch>
      <HeaderCateg></HeaderCateg>
    </section>
  );
};

export default HeaderLayer;
