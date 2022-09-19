import React from "react";
import Button from "../../components/common/Button";
import BgImage1 from "../../assets/shadows/subscribe_1.png";
import BgImage2 from "../../assets/shadows/subscribe_2.png";

const SubscribeEmail = () => {
  return (
    <div className="relative bg-dark rounded-3xl bg-dark px-5 py-20">
      <div className="relative z-10 flex flex-col items-center">
        <p className="font-semibold text-base text-5xl leading-tight text-center text-white mb-8">
          Subscribe to Email Updates
        </p>
        <p className="max-w-[526px] text-base leading-6 text-gray text-center mb-8">
          Just insert your email into the field below. And you will get the
          updates about from us.
        </p>
        <div className="w-full max-w-[454px] relative border rounded-2xl border-[#FFFFFF10] overflow-hidden">
          <input
            className="w-full h-14 px-6 text-white text-base bg-transparent outline-none"
            type="text"
            placeholder="Email Address"
          />
          <Button className="absolute top-0 right-0">Subscribe</Button>
        </div>
      </div>
      <img
        src={BgImage1}
        alt=":( Not Found"
        className="absolute top-0 left-0"
      />
      <img
        src={BgImage2}
        alt=":( Not Found"
        className="absolute top-0 right-0"
      />
    </div>
  );
};

export default SubscribeEmail;
