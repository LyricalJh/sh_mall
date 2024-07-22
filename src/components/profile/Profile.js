import React from "react";

const Profile = ({
  imgSrc = "https://blog.kakaocdn.net/dn/2dH4s/btrKdQdNChV/nV2c3jpSHnjXxaktdvcYL0/img.webp",
  userName,
  subCompoent,
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
      </div>
    </>
  );
};

export default Profile;
