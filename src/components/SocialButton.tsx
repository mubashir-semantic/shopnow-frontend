import React from "react";

interface SocialButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

export default function SocialButton({ icon, ...props }: SocialButtonProps) {
  return (
    <button
      {...props}
      className="flex justify-center items-center py-2 border border-gray-200 rounded-md hover:bg-[#ff9554] transition w-full"
    >
      {icon}
    </button>
  );
}
