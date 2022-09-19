import React, { useState } from "react";
import Up from "../../assets/icons/up.svg";
import Down from "../../assets/icons/down.svg";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-light rounded-2xl p-8">
      <div className="flex items-center pr-10 relative">
        <p className="font-semibold text-2xl text-dark leading-9 pr-6">
          {title}
        </p>
        <button className="absolute right-0" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <img src={Up} alt=":( Not found" />
          ) : (
            <img src={Down} alt=":( Not Found" />
          )}
        </button>
      </div>
      <div
        className={`${
          isOpen ? `h-auto pt-6` : `h-0 pt-0`
        } text-xl text-dark opacity-70 leading-tight overflow-hidden transition`}
      >
        {content}
      </div>
    </div>
  );
};

export default Collapse;
