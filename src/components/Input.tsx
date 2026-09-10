"use client";

import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";
    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
      <div className="relative w-full">
        <input
          ref={ref}
          type={inputType}
          {...props}
          className={`border-b border-gray-200 pb-2 bg-transparent outline-none focus:border-brandOrange text-sm text-black placeholder-gray-700 w-full ${
            isPassword ? "pr-8" : ""
          } ${className || ""}`}
        />

        {/* Eye Icon sirf tab nazar aayega jab input ka type password ho */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-0 bottom-2 text-gray-400 hover:text-brandOrange focus:outline-none transition-colors"
          >
            {showPassword ? (
              <MdVisibilityOff size={18} />
            ) : (
              <MdVisibility size={18} />
            )}
          </button>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
export default Input;
