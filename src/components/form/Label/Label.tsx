type LabelProps = {
  label: string;
  size?: "small" | "medium" | "large";
  className?: string;
};

export function Label({ label, size = "small", className = "" }: LabelProps) {
  const sizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  return (
    <h1
      className={`font-semibold font-jakarta text-navy pl-2 ${sizeClasses[size]} ${className}`}
    >
      {label}
    </h1>
  );
}
