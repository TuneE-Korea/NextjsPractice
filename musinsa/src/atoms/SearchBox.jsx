import { Search } from "lucide-react";
const SearchBox = (props) => {
  return (
    <div className="relative flex items-center px-3">
      <button className="w-full">
        <input
          className="w-full h-10 px-1 bg-white rounded-sm"
          type="text"
          placeholder={props.pholder}
        />
      </button>
      <button className="absolute top-2 right-4">
        <Search />
      </button>
    </div>
  );
};

export default SearchBox;
