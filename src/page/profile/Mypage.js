import React from "react";

//component
import Btn from "../../components/button/Btn";

const MyPage = ({
  thumImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw8d04HZawFy7yblF6yhaNdFT9flVON5UNAXE4ktpl_XPXrPOgm5oy_mTvJLuYJTS4QRs&usqp=CAU",
}) => {
  return (
    <div className="flex flex-col p-20">
      <div className="flex items-center lg:flex-row flex-col">
        <div>
          <img
            className="w-100 h-100 rounded-full cursor-pointer"
            alt="profile"
            src={thumImg}
          />
        </div>
        <div className="flex flex-col mt-10 lg:mt-0 lg:ms-40">
          <div className="flex text-white">
            <div className="text-2xl font-[GowunBatang]">Mecupt</div>
            <div className="mx-4">
              <Btn name="프로필 편집" />
            </div>
            <div>
              <Btn name="보관된 시 보기" />
            </div>
          </div>
          <div className="flex items-center text-white my-10">
            <div>게시물 5</div>
            <div className="mx-4">팔로워 20</div>
            <div>팔로우 88</div>
          </div>
          <div className="flex text-white">소중한</div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
