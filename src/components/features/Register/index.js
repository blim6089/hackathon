import React from "react";
import Form from "./Form";
import Underline from "../../../assets/underlines/3.png";
import Misc from "../../../assets/misc/12.svg";
import QRCode from "../../../assets/qr.png";
import Number from "../../../assets/number.png";
import Button from "../../common/Button";

const Register = () => {
  return (
    <div className="pt-[60px] mb-[150px] relative z-10">
      <div className="w-full flex max-w-container mx-auto">
        <div className="relative w-full max-w-[542px] mr-[94px]">
          <img
            src={Misc}
            className="absolute bottom-0 -right-[18px]"
            alt=":( Not Found"
          />
          <div className="mb-14">
            <p className="font-semibold text-[64px] text-dark leading-[72px]">
              UN PET Lab's first global virtual{" "}
              <span className="text-warning">Hackathon</span>
            </p>
            <img src={Underline} alt=":( Not Found" />
          </div>
          <div className="flex">
            <div className="flex flex-col justify-between pr-[88px]">
              <div className="flex flex-col">
                <span className="font-semibold text-base text-warning mb-2">
                  November
                </span>
                <img src={Number} alt=":( Not Found" />
              </div>
              <img src={QRCode} />
            </div>
            <div>
              <p className="text-xl leading-normal text-dark opacity-70 mb-12">
                Passionate about using data for good, machine learning or
                computer security? This competition is for you.
              </p>
              <Button>Register</Button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Register;
