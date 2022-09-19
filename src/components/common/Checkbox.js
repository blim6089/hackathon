import React, { useState } from "react";
import Checked from "../../assets/icons/checked.svg";
import Unchecked from "../../assets/icons/unchecked.svg";

const Checkbox = ({ checked, label }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleClick = () => setIsChecked(!isChecked);

  return (
    <div className="flex items-center cursor-pointer" onClick={handleClick}>
      <img src={isChecked ? Checked : Unchecked} />
      <p
        className={`pl-3 text-base leading-normal text-dark ${
          isChecked ? `opacity-60` : `opacity-40`
        }`}
      >
        {label}
      </p>
    </div>
  );
};

export default Checkbox;
