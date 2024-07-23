import React from "react";

//TODO 자식 컴포넌트로 뺄 수 있는지 확인해야겠다.
const IsFollow = () => {
  return (
    <div className="flex items-center">
      <span className="ms-1">•</span>
      <div className="ms-1 text-sm cursor-pointer" style={{ color: "#027BFF" }}>
        팔로우
      </div>
    </div>
  );
};
//TODO 안티패턴 제거
const Profile = ({
  imgSrc = "https://blog.kakaocdn.net/dn/2dH4s/btrKdQdNChV/nV2c3jpSHnjXxaktdvcYL0/img.webp",
  userName,
  subCompoent,
  isFollow,
  data,
}) => {
  const Sub = subCompoent;

  return (
    <>
      <div className="flex items-center mb-2">
        <img className="rounded-full w-10 h-10" alt="profile" src={imgSrc} />
        <div className="d-flex flex-col">
          <div className="ms-2 text-sm">{userName}</div>
          {subCompoent && <Sub data={"팔로잉중..."} />}
        </div>
        {isFollow && <IsFollow />}
      </div>
    </>
  );
};

export default Profile;
