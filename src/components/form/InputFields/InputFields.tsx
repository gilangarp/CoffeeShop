import React from "react";
import { Label } from "../Label/Label";

type InputFieldProps = {
  label?: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
  Icon?: "left" | "right";
  className?: string;
  button?: {
    children?: React.ReactNode;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">;

export default function InputField({
  label,
  size = "medium",
  className = "",
  variant = "primary",
  Icon = "right",
  children,
  button,
  ...rest
}: InputFieldProps) {
  return (
    <div className="font-jakarta">
      {label && <Label label={label} size={size} />}
      <div
        className={`${className} ${
          Icon === "right"
            ? "flex items-center justify-between"
            : "flex items-center gap-3"
        } w-full rounded-lg border ${
          size === "small"
            ? "px-5 py-2 text-sm"
            : size === "medium"
            ? "px-5 py-3 text-base"
            : "px-5 py-3 text-lg"
        }
        ${
          variant === "primary"
            ? "bg-background border-[#DEDEDE]"
            : "bg-gray-700 border-gray-600"
        }`}
      >
        {Icon === "left" && <>{children}</>}
        <input
          {...rest}
          className={`focus:outline-none focus:ring-0 text-sm w-full h-full ${
            variant === "primary"
              ? "bg-background text-text-gray focus:text-gray-900 "
              : "bg-gray-700 text-gray-500 focus:text-gray-300"
          } font-medium focus:border-transparent focus:ring-transparent`}
        />
        {Icon === "right" && <>{children}</>}
        {button && (
          <button onClick={button.onClick} className="text-text-gray">
            {button.children}
          </button>
        )}
      </div>
    </div>
  );
}

type InputFieldIcon = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

InputField.Icon = function InputFieldIcon({
  children,
  className,
}: InputFieldIcon) {
  return <button className={`${className} text-text-gray`}>{children}</button>;
};
