import React, { useState } from "react";

//components
import Modal from "../../page/modal/Modal";
import ContentIcons from "./ContentIcons";

const ContentSub = ({
  size,
  like,
  subMessage,
  userName,
  comments,
  ...rest
}) => {
  const [isSubShow, setIsSubShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  //더보기 조건
  const subShowCondition = !isSubShow && subMessage;

  const modalData = {
    subMessage,
    userName,
    comments,
    ...rest,
  };

  return (
    <div className="flex flex-col" style={{ width: size }}>
      <ContentIcons />
      <div className="flex text-white mt-2">
        <span>좋아요 {like}개</span>
      </div>
      <div className="relative text-white truncate" style={{ width: size }}>
        <p
          className={`text-white ${
            isSubShow ? "whitespace-pre-wrap" : "block w-[300px]"
          } truncate overflow-hidden`}
        >
          {subMessage}
        </p>

        {subShowCondition && (
          <span
            className="absolute cursor-pointer text-white"
            onClick={() => setIsSubShow(true)}
            style={{ top: "0px", right: "130px" }}
          >
            더보기
          </span>
        )}

        {comments && (
          <div className="cursor-pointer">
            <span
              onClick={() => setShowModal(true)}
              style={{ color: "#A8A8A8" }}
            >
              댓글{comments.length}개 모두 보기
            </span>
          </div>
        )}
      </div>

      <Modal isOpen={showModal} setShowModal={setShowModal} {...modalData} />
    </div>
  );
};

export default ContentSub;
