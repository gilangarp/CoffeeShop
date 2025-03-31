import React from "react";
import { Link, useLocation } from "react-router-dom";

type TabProps = {
  variant?: "navbar" | "sidebar";
  to: string;
  children?: React.ReactNode;
  icon?: boolean;
};

export default function Tab({
  to,
  children,
  variant = "navbar",
  icon = false,
}: TabProps) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={`font-medium text-white hover:text-white ${
        variant === "navbar"
          ? `text-sm hover:bg-opacity-30 rounded-r-full ${
              icon ? "flex items-center gap-2" : "text-base"
            } `
          : "hidden"
      }`}
    >
      {children}
      {isActive ? <div className="h-[1px] w-auto bg-orange"></div> : ""}
    </Link>
  );
}

type NavLinkIconProps = {
  children?: React.ReactNode;
};

Tab.Icon = function NavLinkIcon({ children }: NavLinkIconProps) {
  return <span className={`text-gray-600 `}>{children}</span>;
};
