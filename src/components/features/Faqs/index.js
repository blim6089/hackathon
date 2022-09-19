import React from "react";
import Collapse from "../../common/Collapse";
import QuestionForm from "./QuestionForm";

const Faqs = ({ data }) => {
  return (
    <div className="bg-white px-[106px] py-[150px] rounded-[48px]">
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
  );
};

export default Faqs;
