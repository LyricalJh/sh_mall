import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faEllipsis } from "@fortawesome/free-solid-svg-icons";

//components
import Profile from "../../components/profile/Profile";
import CommentList from "../../components/comment/CommentList";
//hoc
import withIcon from "../../components/hoc/withIcon";

const ProfieWithIcon = withIcon(Profile);

const Modal = ({ isOpen, setShowModal, ...props }) => {
  // 모달이 열릴 때 body의 스크롤을 비활성화하고, 닫힐 때 원래 상태로 복원

  const {
    comments,
    poemContent,
    poemTitle,
    subMessage,
    thumImg,
    userName,
    weather,
  } = props;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // 백드롭 클릭 시 모달을 닫기 위해 이벤트를 막음
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={handleBackdropClick}
        >
          <div className="fixed inset-0 bg-gray-900 opacity-50 z-40"></div>
          <div
            className="rounded-lg text-white  p-8 w-full z-50 relative w-[800px] h-[800px]"
            style={{
              backgroundColor: "#000000",
            }}
          >
            <div className="flex justify-end mb-5">
              <FontAwesomeIcon
                className="cursor-pointer"
                onClick={() => setShowModal(false)}
                icon={faX}
                size={"md"}
              />
            </div>

            <div className="flex">
              <div className="p-2 min-w-100 w-[400px]">
                <h1>{poemTitle}</h1>
                <pre>{poemContent}</pre>
              </div>
              <div className="p-2 flex flex-col max-w-25 w-[400px]">
                <ProfieWithIcon userName={userName} icon={faEllipsis} />
                <hr
                  className="my-4 border-1-2"
                  style={{ borderColor: "#262626" }}
                />
                <Profile imgSrc={thumImg} userName={userName} />
                <div className="mt-2">{subMessage}</div>
                <CommentList />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
