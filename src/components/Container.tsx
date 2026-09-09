import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    // Ye wo classes hain jo hum har jagah baar baar likh rahe the
    <div className={`max-w-[1300px] mx-auto w-full px-8 ${className}`}>
      {children}
    </div>
  );
}
