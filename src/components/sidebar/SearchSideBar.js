import React from "react";
import { motion } from "framer-motion";

//compoent
import SearchInput from "../input/SearchInput";
import SearchList from "../search/SearchList";

const SearchSideBar = ({ isOpen }) => {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? 0 : "-100%", zIndex: 20 }}
      transition={{ type: "tween", duration: 0.5 }}
      className="fixed top-0 h-full rounded-r-lg border-r border-[#262626] w-80 bg-[#000000] text-white"
      style={{ left: "158px" }}
    >
      <div className="p-4">
        <h2 className="font-[GowunBatang] text-2xl text-[#F5F5F5]">검색</h2>
        <div className="mt-8">
          <SearchInput />
        </div>
      </div>
      <div className="mt-4 border-t-2 border-[#262626]">
        <SearchList />
      </div>
    </motion.div>
  );
};

export default SearchSideBar;
