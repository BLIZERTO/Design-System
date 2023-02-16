import React from "react";

const Label = (text, children) => {
  return <label for={children}>{text}</label>;
};

export default Label;
