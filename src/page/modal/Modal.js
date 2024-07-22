import React, { useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faEllipsis } from "@fortawesome/free-solid-svg-icons";

//components
import Profile from "../../components/profile/Profile";
import CommentList from "../../components/comment/CommentList";
import ContentIcons from "../../components/content/ContentIcons";
import CommentInput from "../../components/input/CommentInput";

//hoc
import withIcon from "../../components/hoc/withIcon";
import withFollow from "../../components/hoc/withFollow";
import withLike from "../../components/hoc/withLike";

const ProfieWithIcon = withIcon(Profile);
const ProfileWithFollowAndIcon = withFollow(ProfieWithIcon);
const IconswithLike = withLike(ContentIcons);

const Modal = ({ isOpen, setShowModal, ...props }) => {
  // 모달이 열릴 때 body의 스크롤을 비활성화하고, 닫힐 때 원래 상태로 복원
  const backGroundRef = useRef(null);

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
  const handleBackdropClick = (event) => {
    if (backGroundRef.current && backGroundRef.current.contains(event.target)) {
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
          <div
            ref={backGroundRef}
            className="fixed inset-0 bg-gray-900 opacity-50 z-40"
          ></div>
          <div
            className="rounded-lg text-white p-8 z-50 relative w-[450px] h-[600px] lg:w-[850px] "
            style={{
              backgroundColor: "#000000",
            }}
          >
            <div className="flex justify-end mb-5">
              <FontAwesomeIcon
                className="cursor-pointer"
                onClick={() => setShowModal(false)}
                icon={faX}
                size={"lg"}
              />
            </div>

            <div className="flex ">
              <div className="hidden lg:block p-2 min-w-100 w-[400px]">
                <h1>{poemTitle}</h1>
                <pre>{poemContent}</pre>
              </div>
              <div
                className="p-2 flex flex-col max-w-25 w-[400px]"
                style={{ borderColor: "#262626" }}
              >
                <ProfieWithIcon
                  isFollow={true}
                  userName={userName}
                  icon={faEllipsis}
                />

                <CommentList />
                <IconswithLike />
                <CommentInput />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
