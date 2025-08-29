import { Logs } from "lucide-react";
import { NAV_LEFT } from "@/data/Navigations";
const HeaderNavLeft = () => {
  return (
    <>
      <div className="flex items-center space-x-4">
        <button>
          <Logs className="h-6 w-6 text-gray-300" />
        </button>
        {NAV_LEFT.map((link) => (
          <span
            className="text-sm font-bold text-gray-300 hover:text-white transition-colors"
            key={link.id}
          >
            {link.text}
          </span>
        ))}
      </div>
    </>
  );
};

export default HeaderNavLeft;
