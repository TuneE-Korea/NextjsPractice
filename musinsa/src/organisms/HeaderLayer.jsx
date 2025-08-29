import HeaderNav from "@/molecules/HeaderNav";
import HeaderCateg from "@/atoms/HeaderCateg";

const HeaderLayer = () => {
  return (
    <section>
      <HeaderNav></HeaderNav>
      {/* 검색창 구현  */}
      <div className="text-red-600">검색창 구현 예정</div>
      <HeaderCateg></HeaderCateg>
    </section>
  );
};

export default HeaderLayer;
