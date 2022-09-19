import React from "react";
import Timeline from "./Timeline";
import WhatWillDo from "./WhatWillDo";
import UpcomingWebinar from "./UpcomingWebinar";
import Underline from "../../../assets/underlines/2.png";
import Misc1 from "../../../assets/misc/6.svg";
import Misc2 from "../../../assets/misc/4.svg";

const Competition = () => {
  return (
    <div className="max-w-container mx-auto mb-[150px] relative z-10">
      <div className="flex flex-col items-center mb-[100px] relative">
        <p className="font-semibold text-sm text-warning leading-5 mb-8 text-center">
          competition
        </p>
        <p className="font-semibold text-5xl leading-[64px] text-dark text-center">
          What is the competition
        </p>
        <img
          src={Misc1}
          className="absolute top-8 right-0"
          alt=":( Not Found"
        />
      </div>
      <div className="flex flex-col items-center relative bg-white rounded-[48px] px-[106px] pt-[120px] pb-[150px]">
        <img
          src={Misc2}
          className="absolute top-[108px] left-[170px]"
          alt=":( Not Found"
        />
        <div className="flex flex-col items-end mb-16">
          <p className="font-semibold text-[40px] text-dark mb-2 text-center mb-2">
            How does the competition work
          </p>
          <img src={Underline} alt=":( Not Found" />
        </div>
        <Timeline />
        <WhatWillDo />
        <UpcomingWebinar />
      </div>
    </div>
  );
};

export default Competition;
