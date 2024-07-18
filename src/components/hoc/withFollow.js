import React from "react";

const withFollow = (Component) => {
  return (props) => {
    console.log(props);
    return (
      <div className="static">
        <Component
          userName={props.userName}
          imgSrc={props.thumImg}
          icon={props.icon}
        />
        <div
          className="absolute flex"
          style={{ top: "89.8px", right: "240px" }}
        >
          <span className="ms-1">•</span>
          <div
            className="ms-1 text-sm cursor-pointer"
            style={{ color: "#027BFF" }}
          >
            팔로우
          </div>
        </div>
      </div>
    );
  };
};

export default withFollow;
