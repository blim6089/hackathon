import React, { useState } from "react";

import Button from "../../common/Button";
import TextField from "../../common/TextField";

const QuestionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  const handleChange = (e, target) => {
    setFormData({ ...formData, [target]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center">
      <p className="uppercase font-semibold text-sm text-warning text-center mb-8">
        question
      </p>
      <p className="font-semibold text-5xl text-dark text-center mb-8">
        Still have a question?
      </p>
      <p className="text-xl leading-normal text-dark text-center mb-10">
        Send your question our way and we’ll get back to you within 48 hour!
      </p>
      <div className="w-full flex flex-wrap -mx-3.5">
        <div className="w-1/2 px-3.5 mb-[30px]">
          <TextField
            value={formData.name}
            onChange={(e) => handleChange(e, "name")}
            size="lg"
            placeholder="Your Name*"
          />
        </div>
        <div className="w-1/2 px-3.5 mb-[30px]">
          <TextField
            value={formData.email}
            onChange={(e) => handleChange(e, "email")}
            size="lg"
            placeholder="Your Email*"
          />
        </div>
        <div className="w-full px-3.5 mb-[30px]">
          <TextField
            value={formData.question}
            onChange={(e) => handleChange(e, "question")}
            multiple
            placeholder="Enter your question here*"
          />
        </div>
        <div className="w-full flex justify-end px-3.5 mb-[30px]">
          <Button color="success">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;
