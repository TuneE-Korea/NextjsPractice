import { Logs } from "lucide-react";
import { NAV_LEFT } from "@/data/Navigations";
const HeaderNavLeft = () => {
  return (
    <>
      <div className="flex gap-6 items-center">
        <button>
          <Logs className="h-6 w-6" color="#9A9A9C" />
        </button>
        {NAV_LEFT.map((link) => (
          <span
            key={link.id}
            className="flex text-sm font-bold text-gray-300 hover:text-white transition-colors"
          >
            {link.text}
          </span>
        ))}
      </div>
    </>
  );
};

export default HeaderNavLeft;
