import React, { ButtonHTMLAttributes } from "react";
import "./button.css";

interface IButtonProps {
  btnType: "button" | "submit" | "reset";
  text: string;
  onClick: () => void;
}

function Button({ btnType, text }: IButtonProps) {
  return <button type={btnType}>{text}</button>;
}

export default Button;
