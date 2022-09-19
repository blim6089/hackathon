import React from "react";

const Technology = ({ title, content, icon }) => {
  return (
    <div>
      <span className="w-14 h-14 bg-dark rounded-2xl flex items-center justify-center mb-8">
        <img src={icon} />
      </span>
      <p className="font-semibold text-2xl leading-normal text-dark mb-4">
        {title}
      </p>
      <p className="text-xl leading-normal text-dark opacity-70">
        {content}
      </p>
    </div>
  );
};

export default Technology;