import React from "react";
const Button = ({ text, onClick, style = "btn", icon = false, iconName }) => {
  /* si on passe icon à true lorsqu'on l'appel, la balise <i> s'affichera sinon non */
  return (
    <button className={style} onClick={onClick}>
      {text}
      {icon && <i className={iconName}></i>}
    </button>
  );
};

export default Button;
