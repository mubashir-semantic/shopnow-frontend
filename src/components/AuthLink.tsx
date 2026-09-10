import Link, { LinkProps } from "next/link";
import React from "react";

interface AuthLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export default function AuthLink({
  children,
  className = "",
  ...props
}: AuthLinkProps) {
  return (
    <Link
      {...props}
      className={`font-semibold text-black hover:text-brandOrange underline transition-colors duration-200 ${className}`}
    >
      {children}
    </Link>
  );
}
