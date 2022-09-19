import React from "react";
import CodeReview from "../../../assets/what.png";
import Console from "../../../assets/icons/console.svg";
import Share from "../../../assets/icons/share.svg";
import Api from "../../../assets/icons/api.svg";

const WhatWillDo = () => {
  const items = [
    {
      title: "Boilerplate Code",
      content:
        "Get started from any browser via the Google Colab / Jupyter Notebook provided.",
      icon: Console,
    },
    {
      title: "Connect via Enclaves",
      content:
        "Easily participate in a multiparty computation via enclaves for trustworthiness and transparency.",
      icon: Share,
    },
    {
      title: "Call REST APIs",
      content:
        "Each Differential Privacy and Synthetic Data framework is accessible via simple API calls",
      icon: Api,
    },
  ];

  return (
    <div className="w-full mb-[150px]">
      <p className="w-full max-w-[606px] font-semibold text-[40px] leading-tight text-dark mb-14">
        What you'll see during the competition
      </p>
      <div className="w-full flex">
        <div className="w-full max-w-[500px] mr-[60px]">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex py-10 border-b border-b-[#14203820]"
            >
              <span className="flex flex-shrink-0 items-center justify-center w-14 h-14 bg-warning rounded-2xl shadow-icon">
                <img src={item.icon} alt=":( Not Found" />
              </span>
              <div className="pl-4">
                <p className="font-semibold text-2xl text-dark leading-9 mb-4">
                  {item.title}
                </p>
                <p className="text-xl text-dark opacity-70">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <img src={CodeReview} alt=":( Not Found" />
      </div>
    </div>
  );
};

export default WhatWillDo;
