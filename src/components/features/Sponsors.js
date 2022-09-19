import React from "react";

import SponsorAvatar1 from "../../assets/sponsors/1.png";
import SponsorAvatar2 from "../../assets/sponsors/2.png";
import SponsorAvatar3 from "../../assets/sponsors/3.png";
import SponsorAvatar4 from "../../assets/sponsors/4.png";
import SponsorAvatar5 from "../../assets/sponsors/5.png";
import SponsorAvatar6 from "../../assets/sponsors/6.png";

const Sponsors = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="font-semibold text-sm text-warning leading-5 uppercase mb-8">
        parters
      </span>
      <p className="font-semibold text-5xl text-dark leading-tight mb-[100px]">
        Supported by:
      </p>
      <div className="w-full flex justify-between items-center">
        <img src={SponsorAvatar1} alt=":( Not Found" />
        <img src={SponsorAvatar2} alt=":( Not Found" />
        <img src={SponsorAvatar3} alt=":( Not Found" />
        <img src={SponsorAvatar4} alt=":( Not Found" />
        <img src={SponsorAvatar5} alt=":( Not Found" />
        <img src={SponsorAvatar6} alt=":( Not Found" />
      </div>
    </div>
  );
};

export default Sponsors;
