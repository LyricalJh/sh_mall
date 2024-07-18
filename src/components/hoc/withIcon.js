import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * HOC that adds an icon to the right of the wrapped component.
 * @param {React.Component} Component - The component to be wrapped.
 * @returns {React.Component} - The wrapped component with an icon.
 */

const withIcon = (Component) => {
  return (props) => {
    const [like, setLike] = useState(false);

    const handleClickIcon = () => {
      if (props.handleToggleIcon) {
        const message = props?.handleToggleIcon();

        if (message === "hitIcon") {
          setLike((pre) => !pre);
        }
      }
    };

    return (
      <div className="flex justify-between">
        <Component {...props} />
        <div className="flex items-center">
          <FontAwesomeIcon
            className={`cursor-pointer ${like && "text-red-600"}`}
            icon={props.icon}
            onClick={handleClickIcon}
          />
        </div>
      </div>
    );
  };
};

export default withIcon;
