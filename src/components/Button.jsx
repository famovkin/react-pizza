import React from "react";
import classNames from "classnames";

function Button({ children, className, outline }) {
  return (
    <button
      className={classNames("button", className, { "button__outline": outline })}
    >
      {children}
    </button>
  );
}

export default Button;
