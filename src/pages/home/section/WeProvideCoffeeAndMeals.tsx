import { FaCheck } from "react-icons/fa";
import Image from "../../../assets/hero-image-home-about.png";

export default function WeProvideCoffeeAndMeals() {
  return (
    <section className="flex flex-col-reverse md:flex-row h-fit ">
      <div className="flex flex-col gap-6 bg-white py-[60px] px-5 md:w-1/2 md:justify-center  md:pl-20 lg:pl-32 md:pr-10 lg:pr-20">
        <div className="flex items-center gap-4">
          <div className="w-2 min-h-20 h-full bg-orange"></div>
          <h1 className="text-2xl md:text-5xl font-jakarta font-medium text-black">
            We Provide <span className="text-brown">Good Coffee </span>
            and <span className="text-brown"> Healthy Meals</span>
          </h1>
        </div>
        <p className="text-sm md:text-base font-jakarta font-normal text-text-gray">
          You can explore the menu that we provide with fun and have their own
          taste and make your day better.
        </p>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full bg-green-500">
            <FaCheck className="w-3 h-3 text-white" />
          </button>
          <p className="text-sm md:text-base font-jakarta font-normal text-text-gray">
            High quality beans
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full bg-green-500">
            <FaCheck className="w-3 h-3 text-white" />
          </button>
          <p className="text-sm md:text-base font-jakarta font-normal text-text-gray">
            Healthy meals, you can request the ingredients
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full bg-green-500">
            <FaCheck className="w-3 h-3 text-white" />
          </button>
          <p className="text-sm md:text-base font-jakarta font-normal text-text-gray">
            Free member card with a minimum purchase of IDR 200.000.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full bg-green-500">
            <FaCheck className="w-3 h-3 text-white" />
          </button>
          <p className="text-sm md:text-base font-jakarta font-normal text-text-gray">
            Chat with our staff to get better experience for orderingFavorite
          </p>
        </div>
      </div>
      <div className="md:w-1/2">
        <img src={Image} alt="" className="h-full w-full object-cover" />
      </div>
    </section>
  );
}
