import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const ContentHeader = ({
  userName,
  weather,
  location,
  regDtm,
  thumImg,
  size,
}) => {
  return (
    <div className="flex justify-between mt-10" style={{ width: size }}>
      <div className="flex">
        <img
          alt="profile"
          src={thumImg}
          className="flex rounded-full border-solid border-2 border-sky-500"
          style={{ width: "40px", height: "40px" }}
        />
        <div className="font-[GowunBatangR] flex flex-col ms-2 justify-center">
          <div className="text-white">{userName}</div>
          <div>
            <span className="text-white">{location} - </span>
            <span className="text-white">{weather}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center text-white">
        <FontAwesomeIcon className="cursor-pointer" icon={faEllipsis} />
      </div>
    </div>
  );
};

export default ContentHeader;
