import React from "react";
import Misc from "../../../assets/misc/5.svg";
import Play from "../../../assets/icons/play.svg";
import Marker from "../../../assets/icons/marker.svg";
import Display from "../../../assets/icons/display.svg";
import Video1 from "../../../assets/video/1.png";
import Video2 from "../../../assets/video/2.png";
import Video3 from "../../../assets/video/3.png";

const UpcomingWebinar = () => {
  const items = [
    {
      title: "Global Challenges and the Importance of Relevant and Timely Data",
      period: "2022, 7-11 november",
      location: "Yogyakarta, Indonesia",
      video: Video1,
    },
    {
      title: "2022 UN Big Data Hackathon",
      period: "2022, 8-11 november",
      location: "Yogyakarta, Indonesia",
      display: "Virtual",
      video: Video2,
    },
    {
      title: "What is the UN PET Lab and why is it important?",
      period: "2022, 15 february,  08:00 - 9:00 AM (NY Time)",
      location:
        "Virtual side event of the 53rd United Nations Statistical Commission",
      video: Video3,
    },
  ];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-[100px]">
        <p className="relative">
          <span className="inline-flex w-full max-w-[288px] font-semibold text-[40px] leading-tight text-dark">
            Upcoming Webinars
          </span>
          <img
            src={Misc}
            className="absolute right-6 -top-9"
            alt=":( Not Found"
          />
        </p>
        <p className="w-full max-w-[503px] text-xl leading-normal text-dark opacity-70">
          All webinars will be recorded and made available online, but
          participants are encouraged to join and participate in live Q&A
        </p>
      </div>
      <div className="w-full flex justify-between">
        {items.map((item, index) => (
          <div key={index} className="w-full max-w-[324px]">
            <div className="relative mb-6">
              <img src={item.video} alt="item.title" />
              <img
                src={Play}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                alt=":( Not Found"
              />
            </div>
            <div>
              <p className="font-semibold text-sm leading-5 text-warning mb-4">
                {item.period}
              </p>
              <p className="font-semibold text-xl leading-normal text-dark mb-4">
                {item.title}
              </p>
              <p className="flex items-start mb-2">
                <img
                  src={Marker}
                  className="flex-shrink-0 mr-3"
                  alt="location"
                />
                <span className="font-semibold text-sm text-dark opacity-60">
                  {item.location}
                </span>
              </p>
              {item.display && (
                <p className="flex items-start mb-2">
                  <img
                    src={Display}
                    className="flex-shrink-0 mr-3"
                    alt="display"
                  />
                  <span className="font-semibold text-sm text-dark opacity-60">
                    {item.display}
                  </span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingWebinar;
