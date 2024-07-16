import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * HOC that adds an icon to the right of the wrapped component.
 * @param {React.Component} Component - The component to be wrapped.
 * @returns {React.Component} - The wrapped component with an icon.
 */

const withIcon = (Component) => {
  return (props) => {
    return (
      <div className="flex justify-between">
        <Component {...props} />
        <div className="flex items-center">
          <FontAwesomeIcon className="cursor-pointer" icon={props.icon} />
        </div>
      </div>
    );
  };
};

export default withIcon;
