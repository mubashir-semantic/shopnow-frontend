import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={`border-b border-gray-200 pb-2 bg-transparent outline-none focus:border-brandOrange text-sm text-black placeholder-gray-700 w-full ${props.className || ""}`}
    />
  );
}
