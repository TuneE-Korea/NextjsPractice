import { NAV_RIGHT } from "@/data/Navigations";
const HeaderNavRight = () => {
  return (
    <div className="flex items-center space-x-4">
      {NAV_RIGHT.map((link) => (
        <span
          key={link.id}
          className="flex gap-1 justify-center text-sm text-[#BDBDBE] hover:text-white transition-colors"
        >
          {link.icon}
          {link.text}
        </span>
      ))}
      <button className="border border-gray-400 px-3 py-1 text-xs text-gray-300 hover:bg-gray-700 rounded-sm">
        로그인/회원가입
      </button>
    </div>
  );
};
export default HeaderNavRight;
