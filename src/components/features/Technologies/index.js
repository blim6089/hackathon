import React from "react";
import Button from "../../common/Button";
import Shadow from "../../../assets/shadows/3.png";
import Security from "../../../assets/icons/security.svg";
import Lock from "../../../assets/icons/lock.svg";
import Database from "../../../assets/icons/database.svg";

const Technologies = () => {
  const data = [
    {
      title: "Secure Enclaves",
      content:
        "Secure enclaves are isolated environments which have extremely limited inputs and outputs and guarantee the software that runs inside them.",
      icon: Security,
    },
    {
      title: "Differential Privacy",
      content:
        "This mathematical framework is used to give probabilistic guarantees that the output of a computation can not be used to infer the original inputs.",
      icon: Lock,
    },
    {
      title: "Synthetic Data",
      content:
        "Synthetic data generation is a broad category of techniques that endeavour to create fake data such that sensitive information about individuals is not revealed.",
      icon: Database,
    },
  ];

  return (
    <div className="relative mb-[90px]">
      <div className="max-w-container mx-auto relative z-10">
        <div className="flex justify-between items-center mb-[100px]">
          <div>
            <p className="uppercase font-semibold text-sm text-warning leading-5 mb-8">
              technologies
            </p>
            <p className="font-semibold text-[40px] leading-8 text-dark">
              What technologies you'll use
            </p>
          </div>
          <Button>Register</Button>
        </div>
        <div className="flex justify-between">
          {data.map((item) => (
            <div className="max-w-[360px]">
              <span className="w-14 h-14 bg-dark rounded-2xl flex items-center justify-center mb-8">
                <img src={item.icon} />
              </span>
              <p className="font-semibold text-2xl leading-normal text-dark mb-4">
                {item.title}
              </p>
              <p className="text-xl leading-normal text-dark opacity-70">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <img src={Shadow} alt=":( Not Found" className="absolute top-16 left-0" />
    </div>
  );
};

export default Technologies;
