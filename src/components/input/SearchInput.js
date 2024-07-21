import React, { useState, useRef, useEffect } from "react";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";

const SearchInput = ({ xSize }) => {
  const [search, setSearch] = useState("");
  const [click, setClick] = useState(false);

  const inputRef = useRef(null);

  const handleSearch = (e) => {
    const { value, name } = e.target;
    setSearch(value);
  };

  const handleClick = (isClick) => {
    !isClick && setSearch("");
    setClick(isClick);
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setClick(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <FontAwesomeIcon
        className="absolute text-[#8E8E8E]"
        icon={faMagnifyingGlass}
        style={{ top: "12.5px", left: "18px", fontSize: "1em" }}
      />
      {click && (
        <div
          className="absolute rounded-full w-3 h-3 flex items-center justify-center p-2 cursor-pointer text-white"
          style={{ top: "12.5px", right: "15px", backgroundColor: "#C7C7C7" }}
          onClick={() => handleClick(false)}
        >
          <FontAwesomeIcon
            className="text-[#262626]"
            style={{ fontSize: "0.5em" }}
            icon={faX}
            onClick={() => handleClick(false)}
          />
        </div>
      )}

      <input
        ref={inputRef}
        className="rounded bg-[#262626] text-[#F5F5F5] p-1 px-14 py-2 focus:outline-none"
        onClick={() => handleClick(true)}
        value={search}
        onChange={handleSearch}
        placeholder="검색"
      />
    </div>
  );
};

export default SearchInput;
