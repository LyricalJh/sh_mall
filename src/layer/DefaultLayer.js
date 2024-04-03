import React, { useEffect, useState } from "react";
//router
import { useNavigate } from "react-router-dom";

import AppHeaderDropdown from "../components/header/AppHeaderDropdown";

const DefaultLayer = () => {
  const navigate = useNavigate();

  return (
    <>
      <AppHeaderDropdown></AppHeaderDropdown>
    </>
  );
};

export default DefaultLayer;
