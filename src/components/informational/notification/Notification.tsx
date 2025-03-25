import { BsInfoCircle } from "react-icons/bs";

type AlertNotificationProps = {
  variant?: "success" | "error";
  className?: string;
  message: string;
};

export default function Notification({
  message,
  className,
  variant = "success",
}: AlertNotificationProps) {
  return (
    <div
      id="alert-border-3"
      className={`flex items-center p-4 mb-4 ${
        variant === "error"
          ? "text-error border-t-4 border-error bg-red-50"
          : "text-success border-t-4 border-success bg-green-50"
      } ${className}`}
      role="alert"
    >
      <BsInfoCircle className="shrink-0 w-4 h-4" />
      <div className="ms-3 text-sm font-medium">{message}</div>
    </div>
  );
}
