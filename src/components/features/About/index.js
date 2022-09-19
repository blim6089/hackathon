import React from "react";
import Rocket from "../../../assets/icons/rocket.svg";
import User from "../../../assets/icons/user.svg";
import Misc1 from "../../../assets/misc/9.svg";
import Misc2 from "../../../assets/misc/11.svg";
import Misc3 from "../../../assets/misc/7.svg";
import Misc4 from "../../../assets/misc/8.svg";
import Misc5 from "../../../assets/misc/10.svg";
import Shadow from "../../../assets/shadows/5.png";
import Avatars from "../../../assets/avatars.png";

const About = () => {
  return (
    <div className="w-full relative mb-[137px]">
      <img
        src={Shadow}
        className="absolute left-0 top-10"
        alt=":( Not Found"
      />
      <div className="w-full max-w-container mx-auto relative z-10">
        <div className="relative flex justify-between pb-[150px] border-dashed border-b border-b-[#00000040]">
          <img
            src={Misc1}
            className="absolute left-[128px] top-0 -translate-y-full"
            alt=":( Not Found"
          />
          <div className="w-full max-w-[288px]">
            <p className="uppercase font-semibold text-warning text-sm mb-8">
              About
            </p>
            <p className="relative font-semibold text-5xl text-dark leading-[64px]">
              What is the UN PET Lab
              <img
                src={Misc2}
                className="absolute -bottom-[18px] -left-9"
                alt=":( Not Found"
              />
            </p>
          </div>
          <div className="flex">
            <div className="w-full max-w-[338px]">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-success shadow-icon mb-6">
                <img src={Rocket} alt=":( Not Found" />
              </div>
              <p className="font-semibold text-2xl text-dark mb-4 leading-normal">
                Launched in 2022
              </p>
              <p className="text-xl text-dark leading-normal opacity-70">
                Launched at EXPO 2020 by the UN Committee of Experts on Big Data
                and Data Science for Official Statistics.
              </p>
            </div>
            <div className="w-full max-w-[394px] ml-[86px]">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-success shadow-icon mb-6">
                <img src={User} alt=":( Not Found" />
              </div>
              <p className="font-semibold text-2xl text-dark mb-4 leading-normal">
                Confidential Collaboration
              </p>
              <p className="text-xl text-dark leading-normal opacity-70">
                The lab brings together national statistics bureaus, researchers
                and PET providers to work through the challenges in safely
                utilising the worlds most important information.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-36 relative">
          <img
            src={Misc4}
            className="absolute right-7 top-[88px]"
            alt=":( Not Found"
          />
          <img
            src={Misc5}
            className="absolute left-4 top-1/2 -translate-y-1/2"
            alt=":( Not Found"
          />
          <div className="w-full flex flex-col items-center max-w-5xl mx-auto">
            <img src={Misc3} className="mb-12" alt=":( Not Found" />
            <p className="w-full max-w-[952px] font-medium text-[40px] leading-tight text-dark text-center mb-16">
              An accurate portrait of the economy continues to be vital to
              provide critical statistics on the health and performance of
              economies. The current methods for collecting and disseminating
              statistical information are not sustainable.
            </p>
            <div className="flex flex-col items-center">
              <img src={Avatars} className="mb-4" alt=":( Not Found" />
              <div className="w-full max-w-[264px] flex flex-col items-center">
                <span className="font-semibold text-2xl leading-normal text-dark mb-2">
                  Ron Jarmin
                </span>
                <span className="font-medium text-base uppercase text-center text-black leading-5 opacity-40">
                  Deputy director of the US Census Bureau
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
