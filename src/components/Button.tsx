import React from "react";

export enum ButtonSettings {
  green = "bg-green-800",
  red = "bg-red-800",
}

interface ButtonProps {
  background: ButtonSettings;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ background, children, onClick }: ButtonProps) {
  return (
    <button
      className={`${background} cursor-pointer py-3 px-2 rounded hover:opacity-90 transition`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
