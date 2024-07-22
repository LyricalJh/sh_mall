import React from "react";

//compoent
import Profile from "../profile/Profile";

//hoc

const NoDataContent = () => {
  return (
    <div className=" h-dvh flex items-center justify-center">
      <div className="text-sm text-[#A8A8A8] mb-40">최근 검색 내역 없음.</div>
    </div>
  );
};

const ProfileStatus = ({ data }) => {
  return <div className="ms-2 text-xs text-[#A8A8A8]">{data}</div>;
};

const SearchList = () => {
  //List 컴포넌트에서 데이터 관리할것임
  //TODO call api
  const searchDatas = [
    {
      img: "https://lh6.googleusercontent.com/proxy/VcHOuK6MQ6XAKRt5DdL07ZSH2jegPHjpHsGx8hv08zFxy3suSK7JrMcK3HQDfZF7327O10f86HEiFeIuJL4cm_z4oghja1mo7V9D3MtR5dRRWtlP353046khQ4KK5vU9p0GrK07sUnqpdygTMdumO5hLVVKJQVbtrsKzB7KQsolaD05VwVIGR2FYm9xjYA20yDr3y5pPNBfAQkNcmylfk-gXwSzRP52h2o47jSdgUVwaPPE3bJaceOw7clNCx9i22SKsZEr83l_IrwA13uOIW231vDU",
      name: "envy_you",
      status: "팔로우중",
    },
    {
      img: "https://lh6.googleusercontent.com/proxy/VcHOuK6MQ6XAKRt5DdL07ZSH2jegPHjpHsGx8hv08zFxy3suSK7JrMcK3HQDfZF7327O10f86HEiFeIuJL4cm_z4oghja1mo7V9D3MtR5dRRWtlP353046khQ4KK5vU9p0GrK07sUnqpdygTMdumO5hLVVKJQVbtrsKzB7KQsolaD05VwVIGR2FYm9xjYA20yDr3y5pPNBfAQkNcmylfk-gXwSzRP52h2o47jSdgUVwaPPE3bJaceOw7clNCx9i22SKsZEr83l_IrwA13uOIW231vDU",
      name: "envy_you",
      status: "팔로우중",
    },
    {
      img: "https://lh6.googleusercontent.com/proxy/VcHOuK6MQ6XAKRt5DdL07ZSH2jegPHjpHsGx8hv08zFxy3suSK7JrMcK3HQDfZF7327O10f86HEiFeIuJL4cm_z4oghja1mo7V9D3MtR5dRRWtlP353046khQ4KK5vU9p0GrK07sUnqpdygTMdumO5hLVVKJQVbtrsKzB7KQsolaD05VwVIGR2FYm9xjYA20yDr3y5pPNBfAQkNcmylfk-gXwSzRP52h2o47jSdgUVwaPPE3bJaceOw7clNCx9i22SKsZEr83l_IrwA13uOIW231vDU",
      name: "envy_you",
      status: "팔로우중",
    },
    {
      img: "https://lh6.googleusercontent.com/proxy/VcHOuK6MQ6XAKRt5DdL07ZSH2jegPHjpHsGx8hv08zFxy3suSK7JrMcK3HQDfZF7327O10f86HEiFeIuJL4cm_z4oghja1mo7V9D3MtR5dRRWtlP353046khQ4KK5vU9p0GrK07sUnqpdygTMdumO5hLVVKJQVbtrsKzB7KQsolaD05VwVIGR2FYm9xjYA20yDr3y5pPNBfAQkNcmylfk-gXwSzRP52h2o47jSdgUVwaPPE3bJaceOw7clNCx9i22SKsZEr83l_IrwA13uOIW231vDU",
      name: "envy_you",
      status: "팔로우중",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 상단 영역 */}
      <div className="flex p-4 items-center">
        <div className="text-lg text-white">최근 검색 항목</div>
      </div>
      {/* 중앙 영역 */}
      {searchDatas.length === 0 ? (
        <NoDataContent />
      ) : (
        searchDatas.map((item, index) => (
          <div className="flex items-center justify-start my-2 ms-5">
            <Profile
              imgSrc={item.img}
              data={"팔로잉중..."}
              userName={item.name}
              subCompoent={ProfileStatus}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default SearchList;
