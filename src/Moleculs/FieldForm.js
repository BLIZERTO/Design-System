import React from "react";
import Input from "../atoms/Input";
import Label from "../atoms/Label";

const FieldForm = ({
  children,
  text,
  type,
  name,
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <div>
      <Label children={children} text={text} />
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
};

export default FieldForm;
