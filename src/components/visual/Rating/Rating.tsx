type IRatingProps = {
  rating: number;
  variant?: "gray" | "white";
};

export const Rating = ({ rating, variant = "gray" }: IRatingProps) => {
  return (
    <div className="grid grid-cols-[auto,1fr]">
      <div className="text-primary">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={`star ${
              index < rating ? "text-orange" : "text-gray-400"
            }`}
          >
            ★
          </span>
        ))}
      </div>
      <h1
        className={`pl-1 ${
          variant === "gray" ? "text-text-gray" : "text-white"
        } `}
      >
        {rating}.0
      </h1>
    </div>
  );
};
