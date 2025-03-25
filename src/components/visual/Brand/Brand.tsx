import coffee from "../../../assets/vector-coffee.svg";

type BrandProps = {
  variant?: "primary" | "secondary";
};

export default function Brand({ variant = "primary" }: BrandProps) {
  return (
    <div className="flex items-end gap-[15px]">
      <img
        className={`w-8 h-8 ${
          variant === "primary" ? "filter invert brightness-0" : ""
        }`}
        src={coffee}
        alt="coffee"
      />
      <h1
        className={`font-sacramento text-xl ${
          variant === "primary" ? "text-white" : "text-brown"
        }`}
      >
        Coffee Shop
      </h1>
    </div>
  );
}
