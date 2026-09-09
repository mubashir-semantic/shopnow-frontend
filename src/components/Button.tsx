import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-darkPurple text-white py-3 rounded-md font-medium w-full hover:bg-opacity-90 transition ${props.className || ""}`}
    >
      {children}
    </button>
  );
}
