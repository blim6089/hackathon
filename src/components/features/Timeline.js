import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Left from "../../assets/icons/left.svg";
import Download from "../../assets/icons/download.svg";
import Right from "../../assets/icons/right.svg";
import Misc1 from "../../assets/misc/13.svg";
import Misc2 from "../../assets/misc/10.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Timeline = () => {
  const sliderRef = useRef();
  const [index, setIndex] = useState(0);
  const settings = {
    infinite: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    initialSlide: index,
    swipe: false,
  };

  const items = [
    {
      title: "Call for Applications",
      description:
        "Applications for the Hackathon will start being accepted. Please follow this page and our socials for more updates.",
      date: "15 August",
    },
    {
      title: "Introduction to the UN Big Data Hackathon Webinar",
      description:
        "Find out what the UN Big Data Hackathon is all about and learn about advancements in Big Data analysis.",
      date: "29 August",
    },
    {
      date: "9 September",
      title: "Youth and the Sustainable Development Goals Webinar",
      description:
        "Use of Big Data to accelerate the progress of SDG Implementation and youth involvement in Big Data.",
    },
  ];

  const handleBack = () => {
    sliderRef.current.slickPrev();
    setIndex(index - 1 <= 0 ? 0 : index - 1);
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
    setIndex(index + 1 >= items.length - 1 ? items.length - 1 : index + 1);
  };

  return (
    <div className="max-w-container mx-auto relative z-10 mb-[150px]">
      <img
        src={Misc2}
        className="absolute -bottom-10 left-[200px] translate-y-full"
        alt=":( Not Found"
      />
      <div className="flex justify-between items-center mb-[120px]">
        <div className="relative">
          <p className="font-semibold text-sm text-warning uppercase mb-8">
            timeline
          </p>
          <p className="font-semibold text-[40px] leading-[48px]">Key Dates</p>
          <img
            src={Misc1}
            className="absolute top-6 -right-8 translate-x-full"
            alt=":( Not Found"
          />
        </div>
        <div className="flex -mx-3">
          <img
            className={`mx-3 cursor-pointer ${
              index === 0 ? `opacity-20` : `opacity-100`
            }`}
            onClick={handleBack}
            src={Left}
            alt="previous"
          />
          <img
            className={`mx-3 cursor-pointer ${
              index === items.length - 1 ? `opacity-20` : `opacity-100`
            }`}
            onClick={handleNext}
            src={Right}
            alt="next"
          />
        </div>
      </div>
      <div>
        <Slider {...settings} ref={sliderRef}>
          {items.map((item, i) => (
            <div
              key={i}
              className={`pr-16 pt-6 relative ${
                index + 2 === i ? `opacity-40` : `opacity-100`
              }`}
            >
              <span className="w-full border-t border-dashed border-t-[#14203820] absolute top-6 left-0"></span>
              <div className="h-[104px] relative">
                <span className="h-12 w-0 border-l border-dashed border-l-[#14203820] absolute top-10 left-1/2 -translate-x-1/2"></span>
                <div className="w-12 h-12 rounded-full border border-dark p-2 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
                  <span className="flex w-full h-full rounded-full bg-dark"></span>
                </div>
              </div>
              <div className="w-full max-w-[420px] rounded-3xl px-8 py-12 bg-white shadow-slider-card">
                <p className="font-semibold text-warning text-sm leading-5 mb-6 uppercase">
                  {item.date}
                </p>
                <p className="font-semibold text-dark text-2xl leading-normal mb-4">
                  {item.title}
                </p>
                <p className="text-dark text-xl leading-normal opacity-70">
                  {item.description}
                </p>
                {i === index + 1 && (
                  <div className="mt-6">
                    <p className="flex items-center mb-4">
                      <span className="font-semibold text-base text-warning uppercase mr-2 underline cursor-pointer">
                        DOWNLOAD PRESENTATION
                      </span>
                      <img src={Download} alt="download" />
                    </p>
                    <span className="font-semibold text-base text-dark uppercase underline cursor-pointer">
                      Play Video
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Timeline;
