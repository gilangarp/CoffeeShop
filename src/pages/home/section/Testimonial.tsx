import img from "../../../assets/hero-image-home.png";
import { Rating } from "../../../components/visual/Rating/Rating";

export default function Testimonial() {
  return (
    <section className="flex flex-col md:flex-row px-[21px] md:px-20 lg:px-32 py-[60px] gap-6 bg-gray-to-dark">
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h1 className="block md:hidden text-center mb-6 text-base font-normal text-white">
          TESTIMONIAL
        </h1>
        <div className="md:max-w-[578px] max-h-[432px] overflow-hidden ">
          <img
            className="object-center object-cover "
            src={img}
            alt="Testimonial Image"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 font-jakarta">
        <h1 className="hidden md:block text-base font-normal text-white">
          TESTIMONIAL
        </h1>
        <div className="flex items-center gap-2">
          <div className="w-[3px] h-8 md:w-[7px] md:h-[68px] bg-orange"></div>
          <h1 className="text-2xl md:text-5xl font-medium text-white">
            Viezh Robert
          </h1>
        </div>
        <h1 className="text-sm md:text-base font-normal text-orange uppercase">
          user
        </h1>
        <p className="text-sm md:text-base font-normal text-white">
          “Wow... I am very happy to spend my whole day here. the Wi-fi is good,
          and the coffee and meals tho. I like it here!! Very recommended!
        </p>
        <Rating variant="white" rating={5} />
      </div>
    </section>
  );
}
