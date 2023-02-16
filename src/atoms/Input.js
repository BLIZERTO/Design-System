import React from "react";

const Input = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  style = "input",
}) => {
  return (
    <>
      <label for={name}></label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={style}
      />
    </>
  );
};

export default Input;
