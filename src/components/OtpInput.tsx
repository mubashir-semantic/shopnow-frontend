"use client";

import React, { useRef, KeyboardEvent, ClipboardEvent } from "react";

interface OtpInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
}

export default function OtpInput({
  length = 6,
  value,
  onChange,
}: OtpInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const val = e.target.value;
    if (!/^[0-9]*$/.test(val)) return;

    // Existing value ko array mein convert karein
    const otpArray = value.split("").slice(0, length);
    // User ne jo type kiya uska aakhri character lein
    otpArray[index] = val.substring(val.length - 1);

    const newOtp = otpArray.join("");
    onChange(newOtp);

    // Agar value enter ho gayi hai to aglay box par focus karein
    if (val && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    // Agar box khali ho aur user Backspace dabaye to pichle box par jayen
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/[^0-9]/g, "")
      .slice(0, length);

    if (pastedData) {
      onChange(pastedData);
      const nextIndex = Math.min(pastedData.length, length - 1);
      inputRefs.current[nextIndex]?.focus();
    }
  };

  const otpValues = Array.from({ length }, (_, i) => value[i] || "");

  return (
    <div className="flex justify-between w-full gap-2">
      {otpValues.map((v, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={v}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          className="w-12 h-14 sm:w-[3.5rem] sm:h-[4rem] border border-gray-200 rounded-xl text-center text-xl font-bold text-black outline-none focus:border-brandOrange focus:ring-1 focus:ring-brandOrange transition-all bg-transparent"
        />
      ))}
    </div>
  );
}
