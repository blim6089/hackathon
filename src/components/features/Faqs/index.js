import React from "react";
import Collapse from "../../common/Collapse";
import QuestionForm from "./QuestionForm";
import Shadow from "../../../assets/shadows/2.png";

const Faqs = () => {
  const data = [
    {
      title:
        "What are the differences between Youth and Big Data Expert tracks?",
      content:
        "Besides the age group, the Big Data Expert track will be granted access to the UN Global Platform containing AIS (ships tracking movement), Ships register, and Comtrade datasets (please note that some other datasets may be added). To demonstrate their data skills, the big data teams must utilise those datasets in their projects/solutions. Further, the big data tracks are more competitive because the number of selected teams in the Big Data Expert track will be limited to around twenty.",
    },
    {
      title: "Can a youth team participate in the Big Data Expert track?",
      content:
        "Besides the age group, the Big Data Expert track will be granted access to the UN Global Platform containing AIS (ships tracking movement), Ships register, and Comtrade datasets (please note that some other datasets may be added). To demonstrate their data skills, the big data teams must utilise those datasets in their projects/solutions. Further, the big data tracks are more competitive because the number of selected teams in the Big Data Expert track will be limited to around twenty.",
    },
    {
      title: "What about in-person and virtual participants?",
      content:
        "Besides the age group, the Big Data Expert track will be granted access to the UN Global Platform containing AIS (ships tracking movement), Ships register, and Comtrade datasets (please note that some other datasets may be added). To demonstrate their data skills, the big data teams must utilise those datasets in their projects/solutions. Further, the big data tracks are more competitive because the number of selected teams in the Big Data Expert track will be limited to around twenty.",
    },
    {
      title: "Do you cover expenses for in-person participation?",
      content:
        "Besides the age group, the Big Data Expert track will be granted access to the UN Global Platform containing AIS (ships tracking movement), Ships register, and Comtrade datasets (please note that some other datasets may be added). To demonstrate their data skills, the big data teams must utilise those datasets in their projects/solutions. Further, the big data tracks are more competitive because the number of selected teams in the Big Data Expert track will be limited to around twenty.",
    },
    {
      title:
        "Can we use our data tools? Can we use other open source datasets?",
      content:
        "Besides the age group, the Big Data Expert track will be granted access to the UN Global Platform containing AIS (ships tracking movement), Ships register, and Comtrade datasets (please note that some other datasets may be added). To demonstrate their data skills, the big data teams must utilise those datasets in their projects/solutions. Further, the big data tracks are more competitive because the number of selected teams in the Big Data Expert track will be limited to around twenty.",
    },
    {
      title: "Do you have other communication channels, such as Slack?",
      content:
        "Besides the age group, the Big Data Expert track will be granted access to the UN Global Platform containing AIS (ships tracking movement), Ships register, and Comtrade datasets (please note that some other datasets may be added). To demonstrate their data skills, the big data teams must utilise those datasets in their projects/solutions. Further, the big data tracks are more competitive because the number of selected teams in the Big Data Expert track will be limited to around twenty.",
    },
  ];

  return (
    <div className="relative">
      <div className="max-w-container mx-auto my-[150px] bg-white px-[106px] py-[150px] rounded-[48px] relative z-10">
        <p className="uppercase font-semibold text-sm text-warning text-center mb-8">
          FAQs
        </p>
        <p className="font-semibold text-5xl text-dark leading-tight mb-[100px] text-center">
          Frequently Asked Questions
        </p>
        <ul className="mb-[150px]">
          {data.map((faq, index) => (
            <li key={index} className="mb-[30px]">
              <Collapse {...faq} />
            </li>
          ))}
        </ul>

        <QuestionForm />
      </div>
      <img
        src={Shadow}
        alt=":( Not Found"
        className="absolute right-0 bottom-0 translate-y-1/2"
      />
    </div>
  );
};

export default Faqs;
