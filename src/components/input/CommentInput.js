import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";

const CommentInput = () => {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    const { value } = event.target;
    setText(value);
  };

  const handleOnClick = () => {
    //POST data to server
    console.log("post!!");
  };

  return (
    <div className="relative mt-2">
      <FontAwesomeIcon
        icon={faFaceSmile}
        className="absolute text-white text-xl"
        style={{ top: "7px", left: "10px" }}
      />
      <div className="flex">
        <textarea
          rows={1}
          className="rounded bg-black w-[320px] p-1 px-10 py-1 focus:outline-none resize-none text-white"
          value={text}
          onChange={handleOnChange}
          placeholder="댓글달기..."
        />
        <span
          className="mt-1"
          onCanPlay={handleOnClick}
          style={{ color: text === "" ? "#5A6E80" : "#027BFF" }}
        >
          게시
        </span>
      </div>
    </div>
  );
};

export default CommentInput;
