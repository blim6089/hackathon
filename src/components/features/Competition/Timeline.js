import React from "react";
import Timeline1 from "../../../assets/timeline/1.png";
import Timeline2 from "../../../assets/timeline/2.png";
import Timeline3 from "../../../assets/timeline/3.png";
import Line from "../../../assets/line.png";
import Tools from "../../../assets/icons/tools.svg";
import Lamp from "../../../assets/icons/lamp.svg";
import Console from "../../../assets/icons/console.svg";
import Camera from "../../../assets/icons/camera.svg";
import Play from "../../../assets/icons/play-warning.svg";
import Avatar1 from "../../../assets/avatar/1.png";
import Avatar2 from "../../../assets/avatar/2.png";
import Avatar3 from "../../../assets/avatar/3.png";
import Avatar4 from "../../../assets/avatar/4.png";

const Timeline = () => {
  return (
    <div className="w-full mb-[150px]">
      <div className="flex items-center pb-16 relative">
        <img
          src={Line}
          className="absolute h-full top-0 left-1/2 -translate-x-1/2"
          alt=":( Not Found"
        />
        <div className="w-full relative">
          <img src={Timeline1} alt=":( Not Found" />
          <div className="w-full max-w-[305px] h-24 absolute p-6 -left-7 -bottom-11 rounded-xl shadow-icon bg-white flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-warning">
                <img
                  src={Avatar1}
                  className="w-full h-full"
                  alt=":( Not Found"
                />
              </div>
              <div className="px-3">
                <p className="font-semibold text-dark text-base leading-[18px] mb-1">
                  Alfredo Carder
                </p>
                <p className="font-semibold text-xxs text-dark opacity-40 leading-none">
                  webinar speaker
                </p>
              </div>
            </div>
            <div className="flex">
              <img
                src={Avatar2}
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src={Avatar3}
                className="w-8 h-8 rounded-full border-2 border-white -ml-5"
              />
              <img
                src={Avatar4}
                className="w-8 h-8 rounded-full border-2 border-white -ml-5"
              />
            </div>
          </div>
        </div>
        <div className="w-60 h-full flex-shrink-0 relative flex justify-center items-center">
          <div className="p-4 bg-white">
            <div className="w-[76px] h-[76px] rounded-full bg-success flex items-center justify-center font-semibold text-xl leading-normal text-dark">
              01
            </div>
          </div>
        </div>
        <div className="w-full">
          <p className="font-semibold text-2xl text-dark mb-4">
            Learn about PETs
          </p>
          <p className="text-xl text-dark leading-normal opacity-70">
            Take part in the workshop series through October and learn about
            secure enclaves, differential privacy and synthetic data.
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center pb-16 relative">
        <img
          src={Line}
          className="absolute h-full top-0 left-1/2 -translate-x-1/2"
          alt=":( Not Found"
        />
        <div className="w-full relative">
          <img src={Timeline2} alt=":( Not Found" />
          <div className="max-w-[185px] bg-dark rounded-2xl absolute -top-8 -left-10 p-5 text-white">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-[#FFFFFF10]">
                <img src={Tools} alt=":( Not Found" />
              </div>
              <span className="pl-3 font-semibold text-sm leading-5">
                Hone your skills
              </span>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-[#FFFFFF10]">
                <img src={Lamp} alt=":( Not Found" />
              </div>
              <span className="pl-3 font-semibold text-sm leading-5">
                Intuition and strategy
              </span>
            </div>
          </div>
        </div>
        <div className="w-60 h-full flex-shrink-0 relative flex justify-center items-center">
          <div className="p-4 bg-white">
            <div className="w-[76px] h-[76px] rounded-full bg-success flex items-center justify-center font-semibold text-xl leading-normal text-dark">
              02
            </div>
          </div>
        </div>
        <div className="w-full">
          <p className="font-semibold text-2xl text-dark mb-4">
            Learn about PETs
          </p>
          <p className="text-xl text-dark leading-normal opacity-70">
            Take part in the workshop series through October and learn about
            secure enclaves, differential privacy and synthetic data.
          </p>
        </div>
      </div>
      <div className="flex items-center relative">
        <img
          src={Line}
          className="absolute h-full top-0 left-1/2 -translate-x-1/2"
          alt=":( Not Found"
        />
        <div className="w-full relative">
          <div className="absolute flex -top-9 -left-9">
            <div className="w-[70px] h-[70px] flex items-center justify-center bg-warning rounded-3xl shadow-icon mr-6">
              <img src={Console} alt=":( Not Found" />
            </div>
            <div className="w-[70px] h-[70px] flex items-center justify-center bg-warning rounded-3xl shadow-icon">
              <img src={Camera} alt=":( Not Found" />
            </div>
          </div>
          <img src={Timeline3} alt=":( Not Found" />
          <div className="w-full max-w-[260px] h-[72px] flex items-center shadow-icon rounded-full p-4 absolute -right-10 bottom-0 translate-y-1/2 bg-white">
            <img src={Play} className="flex-shrink-0" alt=":( Not Found" />
            <span className="pl-3 font-semibold text-sm text-dark leading-5">
              Training data is only accessible via PETs.
            </span>
          </div>
        </div>
        <div className="w-60 h-full flex-shrink-0 relative flex justify-center items-center">
          <div className="p-4 bg-white">
            <div className="w-[76px] h-[76px] rounded-full bg-success flex items-center justify-center font-semibold text-xl leading-normal text-dark">
              03
            </div>
          </div>
        </div>
        <div className="w-full">
          <p className="font-semibold text-2xl text-dark mb-4">
            Learn about PETs
          </p>
          <p className="text-xl text-dark leading-normal opacity-70">
            Take part in the workshop series through October and learn about
            secure enclaves, differential privacy and synthetic data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
