import React, { useEffect, forwardRef } from "react";
import { motion } from "framer-motion";

const SearchSideBar = forwardRef(({ isOpen, onClose }, searhSideRef) => {
  return (
    <motion.div
      ref={searhSideRef}
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? 0 : "-100%", zIndex: 0 }}
      transition={{ type: "tween", duration: 0.5 }}
      className="fixed top-0 h-full rounded-r-lg border-r border-[#262626] w-64 bg-[#000000] text-white p-4 "
      style={{ left: "158px" }}
    >
      <button onClick={() => onClose(false)} className="text-white">
        Close
      </button>
      <h2 className="text-lg font-semibold">Sidebar</h2>
      <p>Sidebar content goes here.</p>
    </motion.div>
  );
});

export default SearchSideBar;
