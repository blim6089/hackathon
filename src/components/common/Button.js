import React from "react";

const Button = ({ color = "warning", children, className = "" }) => {
  const buttonStyles = {
    warning: "text-white bg-warning shadow-button-warning hover:bg-hover-warning",
    success: "text-dark bg-success shadow-button-success hover:bg-hover-success",
  };

  return (
    <button
      className={`h-14 font-semibold text-base rounded-2xl px-[30px] transition ${buttonStyles[color]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
