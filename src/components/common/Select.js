import React from "react";
import ArrowDown from "../../assets/icons/chevron-down.svg";

const Select = ({
  placeholder = "",
  value,
  onChange,
  size = "md",
  options = [],
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <select
        value={value}
        onChange={(e) => onChange(e)}
        className={`w-full ${value ? `text-black` : `text-[#00000060]`} ${
          size === `md` ? `h-12 rounded-xl px-4` : `h-16 rounded-2xl px-5`
        } bg-white border border-[#14203810] text-sm outline-none`}
      >
        <option>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <img
        src={ArrowDown}
        className="absolute top-1/2 -translate-y-1/2 right-4"
        alt=":( Not Found"
      />
    </div>
  );
};

export default Select;
