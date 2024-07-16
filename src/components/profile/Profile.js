import React from "react";

const Profile = ({ imgSrc, userName }) => {
  return (
    <div className="flex items-center">
      <img
        className="rounded-full w-10 h-10"
        alt="profile"
        src={
          "https://p16-capcut-sign-va.ibyteimg.com/tos-alisg-v-643f9f/oUFzwgzAAIyAfAzEvINBWl3UmJY4YrXbBhAlCE~tplv-nhvfeczskr-1:250:0.webp?lk3s=44acef4b&x-expires=1737485910&x-signature=KzZgXA791aZcBdxVNPQfB5kdAzI%3D"
        }
      />
      <div className="ms-2">{userName}</div>
    </div>
  );
};

export default Profile;
