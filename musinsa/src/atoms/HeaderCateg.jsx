import { NAV_BOT_CATEG } from "@/data/HeaderBottomCategory";
const HeaderCateg = () => {
  return (
    <div className="flex gap-2">
      {NAV_BOT_CATEG.map((link, i) => (
        <span
          key={i}
          className="py-1 text-sm font-bold text-gray-300 hover:text-white transition-colors"
        >
          {link.text}
        </span>
      ))}
    </div>
  );
};

export default HeaderCateg;
