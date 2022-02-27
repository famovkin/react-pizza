import classNames from "classnames";
import React from "react";

function Button({ children, className, outline, circle }) {
  return (
    <button
      className={classNames("button", className, {
        button__outline: outline,
        button__circle: circle,
      })}
    >
      {children}
    </button>
  );
}

export default Button;
