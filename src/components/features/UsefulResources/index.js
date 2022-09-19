import React from "react";
import Button from "../../common/Button";
import Resource from "./Resource";
import Underline from "../../../assets/underlines/1.png";
import Resource1 from "../../../assets/resources/1.png";
import Resource2 from "../../../assets/resources/2.png";
import Resource3 from "../../../assets/resources/3.png";
import Resource4 from "../../../assets/resources/4.png";

const UsefulResources = () => {
  const resources = [
    {
      tag: "Useful Resources tag",
      title: "Global Challenges and the Importance of Relevant and Timely Data",
      image: Resource1,
    },
    {
      tag: "Useful Resources tag",
      title: "Global Challenges and the Importance of Relevant and Timely Data",
      image: Resource2,
    },
    {
      tag: "Useful Resources tag",
      title: "Global Challenges and the Importance of Relevant and Timely Data",
      image: Resource3,
    },
    {
      tag: "Useful Resources tag",
      title: "Global Challenges and the Importance of Relevant and Timely Data",
      image: Resource4,
    },
  ];

  return (
    <div className="max-w-container mx-auto flex flex-col items-center mb-[150px]">
      <p className="uppercase font-semibold text-sm leading-5 text-warning text-center mb-8">
        Resources
      </p>
      <div className="flex flex-col items-center">
        <p className="font-semibold text-[40px] leading-8 text-dark text-center mb-2">
          Useful Resources
        </p>
        <img src={Underline} alt=":( Not Found" className="mb-[72px]" />
      </div>
      <div className="w-full flex flex-wrap -mx-4 mb-4">
        {resources.map((resource, index) => (
          <div key={index} className="w-1/2 px-4 mb-12">
            <Resource {...resource} />
          </div>
        ))}
      </div>
      <Button>All Resources</Button>
    </div>
  );
};

export default UsefulResources;
