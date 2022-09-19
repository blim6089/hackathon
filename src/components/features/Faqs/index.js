import React from "react";
import Collapse from "../../common/Collapse";
import QuestionForm from "./QuestionForm";
import Shadow from "../../../assets/shadows/2.png";

const Faqs = ({ data }) => {
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
