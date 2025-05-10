import { useState } from "react";

import { CiSearch } from "react-icons/ci";
import "./Search.css";
import SearchDropdown from "./SearchDropdown";
function Search() {
  const [query, setQuery] = useState("");
  return (
    <div className="search">
      <div className="flex w-full items-center justify-between">
        <input
          type="search"
          placeholder="Search..."
          value={query}
          className="m-0 w-full"
          onChange={(e) => setQuery(e.target.value)}
        />
        <span>
          <CiSearch />
        </span>

        {query !== "" && <SearchDropdown query={query} />}
      </div>
    </div>
  );
}

export default Search;
