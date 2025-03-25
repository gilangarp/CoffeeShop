import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "white" | "gray";
  size?: "small" | "medium" | "large";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  icon?: boolean;
  children: React.ReactNode;
  loading?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "primary",
  rounded = "md",
  size = "small",
  icon = false,
  children,
  loading = false,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`cursor-pointer font-semibold flex items-center justify-center ${
        variant === "primary"
          ? "text-black bg-orange"
          : variant === "secondary"
          ? "text-orange border border-orange"
          : variant === "white"
          ? "text-white border border-white"
          : "text-gray-100 bg-gray-700"
      } ${
        icon
          ? size === "small"
            ? "text-sm p-[6px]"
            : size === "medium"
            ? "text-base p-[10px]"
            : "text-base p-3"
          : size === "small"
          ? "text-sm py-2 px-5"
          : size === "medium"
          ? "text-base py-2 px-6"
          : "text-base py-3 px-6"
      }
      
      ${loading ? "cursor-not-allowed" : ""} ${
        rounded === "none"
          ? "rounded-none"
          : rounded === "sm"
          ? "rounded"
          : rounded === "md"
          ? "rounded-md"
          : rounded === "lg"
          ? "rounded-lg"
          : "rounded-full"
      } ${className} `}
    >
      {children}
    </button>
  );
}

type ButtonIconProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "white" | "gray";
  padding?: "left" | "right";
};

Button.Icon = function ButtonIcon({
  children,
  padding,
  variant = "primary",
}: ButtonIconProps) {
  return (
    <span
      className={`${
        variant === "primary"
          ? "text-white bg-primary"
          : variant === "secondary"
          ? "text-primary border border-primary"
          : variant === "white"
          ? "text-gray-700 bg-white"
          : "text-gray-100 bg-gray-700"
      }
      ${padding === "left" ? "pr-2" : padding === "right" ? "pl-2" : ""}`}
    >
      {children}
    </span>
  );
};
