import React from "react";

export enum ButtonSettings {
  green = "bg-green-800",
  red = "bg-red-800",
}

interface ButtonProps {
  background: ButtonSettings;
  children: React.ReactNode;
  typeBtn: "button" | "submit"
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ background, children, onClick, typeBtn }: ButtonProps) {
  return (
    <button
      type={typeBtn}
      className={`${background} cursor-pointer py-3 px-2 rounded hover:opacity-90 transition`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
