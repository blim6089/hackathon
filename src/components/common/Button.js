import React from "react";

const Button = ({ color = "warning", children, className = "" }) => {
  const buttonStyles = {
    warning: "bg-warning shadow-button-warning hover:bg-hover-warning",
    success: "bg-success shadow-button-success hover:bg-hover-success",
  };

  return (
    <button
      className={`h-14 font-semibold text-base text-white rounded-2xl px-[30px] transition ${buttonStyles[color]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
