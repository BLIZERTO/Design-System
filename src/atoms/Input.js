import React from "react";

const Input = ({
  type,
  label,
  name,
  value,
  onChange,
  placeholder,
  style="",
  disabled=false
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="capitalize text-lg ml-3 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={"input px-4 py-3" + style}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
