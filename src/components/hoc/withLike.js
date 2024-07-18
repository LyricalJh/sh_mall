import React from "react";

const withLike = (Component) => {
  return ({
    like = 0,
    date = new Intl.DateTimeFormat("ko-KR", {
      month: "long",
      day: "numeric",
    }).format(new Date()),
    ...rest
  }) => {
    return (
      <div
        className="border-t-2 border-b-2 pt-1 pb-2"
        style={{ borderColor: "#262626" }}
      >
        <Component {...rest} />
        <div className="text-sm ms-2 mt-2">좋아요 {like}개</div>
        <div className="text-xs ms-2" style={{ color: "#A8A8A8" }}>
          {date}
        </div>
      </div>
    );
  };
};

export default withLike;
