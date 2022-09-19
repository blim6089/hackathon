import React from "react";

const TextField = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  size = "md",
  multiple = false,
}) => {
  return (
    <>
      {!multiple ? (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e)}
          className={`w-full ${
            size === `md` ? `h-12 rounded-xl px-4` : `h-16 rounded-2xl px-5`
          } bg-white border border-[#14203810] text-sm text-black outline-none`}
        />
      ) : (
        <textarea
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e)}
          className="w-full h-[120px] bg-white border border-[#14203810] rounded-2xl px-5 py-[18px] text-sm text-black outline-none resize-none"
        />
      )}
    </>
  );
};

export default TextField;
