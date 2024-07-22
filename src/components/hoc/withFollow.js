import React from "react";

/** 수정 필요함..
 * HOC that adds an fllow text to the right of the wrapped component.
 * @param {React.Component} Component - The component to be wrapped.
 * @returns {React.Component} - The wrapped component with an icon.
 */

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
        <div className="flex">
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
