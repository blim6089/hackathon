import React from "react";
import Up from "../../../assets/icons/up.svg";

const Resource = ({ tag, title, image }) => {
  return (
    <div className="flex items-center">
      <img
        src={image}
        className="w-[250px] h-[200px] mr-[30px] rounded-3xl"
        alt={title}
      />
      <div>
        <p className="font-semibold text-sm text-dark opacity-50 mb-4">{tag}</p>
        <p className="font-semibold text-xl text-dark mb-4">{title}</p>
        <div className="flex items-center cursor-pointer">
          <span className="uppercase text-base font-semibold text-warning mr-2">
            Learn More
          </span>
          <img src={Up} alt="learn more" className="w-6 h-6 rotate-90" />
        </div>
      </div>
    </div>
  );
};

export default Resource;
