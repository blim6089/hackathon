import React from "react";
import Button from "../../common/Button";
import Checkbox from "../../common/Checkbox";
import Select from "../../common/Select";
import TextField from "../../common/TextField";

const Form = () => {
  return (
    <div className="bg-white rounded-3xl px-8 py-12">
      <p className="font-semibold text-xl leading-normal text-dark mb-8">
        Register to the Hackaton
      </p>
      <div className="flex flex-wrap -mx-2 mb-6">
        <div className="w-1/2 px-2">
          <TextField placeholder="Team Name" />
        </div>
        <div className="w-1/2 px-2">
          <Select placeholder="Country" />
        </div>
      </div>
      <div className="text-base leading-normal text-dark mb-4 opacity-70">
        Participant names and emails (1-3 people per team):
      </div>
      <div className="flex flex-wrap -mx-2 mb-4">
        <div className="w-1/3 px-2 mb-2">
          <TextField placeholder="First Name 01" />
        </div>
        <div className="w-1/3 px-2 mb-2">
          <TextField placeholder="First Name 02" />
        </div>
        <div className="w-1/3 px-2 mb-2">
          <TextField placeholder="First Name 03" />
        </div>
        <div className="w-1/3 px-2 mb-2">
          <TextField placeholder="Email Address 1" />
        </div>
        <div className="w-1/3 px-2 mb-2">
          <TextField placeholder="Email Address 2" />
        </div>
        <div className="w-1/3 px-2 mb-2">
          <TextField placeholder="Email Address 3" />
        </div>
      </div>
      <div className="text-base leading-normal text-dark mb-4 opacity-70">
        Affiliation
      </div>
      <div className="flex mb-6">
        <div className="pr-8">
          <Checkbox checked={true} label="Student" />
        </div>
        <div className="pr-8">
          <Checkbox checked={false} label="Student" />
        </div>
        <div className="pr-8">
          <Checkbox checked={false} label="Student" />
        </div>
      </div>
      <Select className="mb-6" placeholder="Knowledge of PETs" />
      <div className="flex items-center justify-between">
        <Checkbox checked={true} label="Allow emails re posts, webinars, etc" />
        <Button color="success">Submit</Button>
      </div>
    </div>
  );
};

export default Form;
