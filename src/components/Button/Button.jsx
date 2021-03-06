import React from "react";

function Button({ children, ...props }) {
  return (
    <button type="button" className="button" {...props}>
      {children}
    </button>
  );
}

export default Button;
