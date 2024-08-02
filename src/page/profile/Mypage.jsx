import React from "react";

//component
import Btn from "../../components/button/Btn";
import GridList from "../../components/grid/GridList";

const ThumImg = ({ thumImg }) => {
  return (
    <div>
      <img
        className="w-100 h-100 rounded-full cursor-pointer"
        alt="profile"
        src={thumImg}
      />
    </div>
  );
};

const MyPageHeader = () => {
  return (
    <div className="flex text-white">
      <div className="text-2xl font-[GowunBatang]">Mecupt</div>
      <div className="mx-4">
        <Btn name="프로필 편집" />
      </div>
      <div>
        <Btn name="보관된 시 보기" />
      </div>
    </div>
  );
};

const MyPageMiddle = () => {
  return (
    <div className="flex items-center text-white my-10">
      <div>게시물 5</div>
      <div className="mx-4">팔로워 20</div>
      <div>팔로우 88</div>
    </div>
  );
};

const MyPage = ({
  thumImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw8d04HZawFy7yblF6yhaNdFT9flVON5UNAXE4ktpl_XPXrPOgm5oy_mTvJLuYJTS4QRs&usqp=CAU",
}) => {
  //call api here
  const listData = [
    {
      title: "1인칭 작가 시점..",
      subTitle: "첫 작가의 데뷔",
      author: "시톡작가",
      img: "",
    },
    {
      title: "1인칭 작가 시점..",
      subTitle: "첫 작가의 데뷔",
      author: "시톡작가",
      img: "",
    },
    {
      title: "1인칭 작가 시점..",
      subTitle: "첫 작가의 데뷔",
      author: "시톡작가",
      img: "",
    },
    {
      title: "1인칭 작가 시점..",
      subTitle: "첫 작가의 데뷔",
      author: "시톡작가",
      img: "",
    },
    {
      title: "1인칭 작가 시점..",
      subTitle: "첫 작가의 데뷔",
      author: "시톡작가",
      img: "",
    },
    {
      title: "1인칭 작가 시점..",
      subTitle: "첫 작가의 데뷔",
      author: "시톡작가",
      img: "",
    },
    {
      title: "1인칭 작가 시점..",
      subTitle: "첫 작가의 데뷔",
      author: "시톡작가",
      img: "",
    },
    {
      title: "1인칭 작가 시점..",
      subTitle: "첫 작가의 데뷔",
      author: "시톡작가",
      img: "",
    },
  ];
  return (
    <div className="flex flex-col p-20">
      <div className="flex items-center lg:flex-row flex-col">
        <ThumImg thumImg={thumImg} />
        <div className="flex flex-col mt-10 lg:mt-0 lg:ms-40">
          <MyPageHeader />
          <MyPageMiddle />
        </div>
      </div>
      <div className="mt-10">
        <GridList listData={listData} />
      </div>
    </div>
  );
};

export default MyPage;
