import { NAV_RIGHT } from "@/data/Navigations";
const HeaderNavRight = () => {
  return (
    <div className="flex items-center space-x-4">
      {NAV_RIGHT.map((link) => (
        <span className="text-xs text-gray-400 hover:text-white transition-colors">
          {link.text}
        </span>
      ))}
      <button className="border border-gray-600 px-3 py-1.5 text-xs text-gray-300 hover:bg-gray-700 rounded-sm">
        로그인/회원가입
      </button>
    </div>
  );
};
export default HeaderNavRight;
