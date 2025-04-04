import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <button {...props} className="border px-4 py-2 rounded">{children}</button>;
};
