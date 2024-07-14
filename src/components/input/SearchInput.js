import React, { useState, useRef, useEffect } from "react";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";

const SearchInput = () => {
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
        className="absolute"
        icon={faMagnifyingGlass}
        style={{ top: "6.5px", left: "10px" }}
        size="lg"
      />
      {click && (
        <div
          className="absolute rounded-full w-3 h-3 flex items-center justify-center p-2 cursor-pointer text-white"
          style={{ top: "7.5px", right: "15px", backgroundColor: "#C7C7C7" }}
          onClick={() => handleClick(false)}
        >
          <FontAwesomeIcon
            className="text-black"
            style={{ fontSize: "0.5em" }}
            icon={faX}
            onClick={() => handleClick(false)}
          />
        </div>
      )}

      <input
        ref={inputRef}
        className="rounded p-1 px-10 py-1 focus:outline-none"
        onClick={() => handleClick(true)}
        value={search}
        onChange={handleSearch}
        placeholder="검색"
      />
    </div>
  );
};

export default SearchInput;
