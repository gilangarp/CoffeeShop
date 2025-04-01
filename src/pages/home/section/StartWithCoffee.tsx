import Image from "../../../assets/hero-image-home.png";
import Button from "../../../components/interactive/Button/Button";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import useHome from "./useHome";

export default function StartWithCoffee() {
  const { getStart, chatAdmin } = useHome();
  return (
    <section className="flex flex-col-reverse md:flex-row h-screen">
      <div className="flex flex-col gap-6 bg-gray-to-dark py-[60px] px-5 md:w-1/2 md:justify-center md:pl-20 lg:pl-32 md:pr-10 lg:pr-20">
        <h1 className="text-2xl md:text-5xl font-jakarta font-medium text-white">
          Start Your Day with Coffee and Good Meals
        </h1>
        <p className="text-sm md:text-base font-jakarta font-normal text-white">
          We provide high quality beans, good taste, and healthy meals made by
          love just for you. Start your day with us for a bigger smile!
        </p>
        <div className="flex items-center justify-between">
          <Button onClick={getStart}>Get Started</Button>
          <Button
            className="md:fixed md:right-4 md:bottom-4"
            rounded="full"
            icon={true}
            onClick={chatAdmin}
          >
            <Button.Icon>
              <IoChatbubbleEllipsesOutline className="w-6 h-6 text-black" />
            </Button.Icon>
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col font-jakarta">
            <h1 className="text-2xl md:text-5xl font-medium text-orange">
              90+
            </h1>
            <h1 className="text-xs md:text-base font-normal text-white">
              Staff
            </h1>
          </div>
          <div className="w-[1px] h-full bg-white"></div>
          <div className="flex flex-col font-jakarta">
            <h1 className="text-2xl md:text-5xl font-medium text-orange">
              30+
            </h1>
            <h1 className="text-xs md:text-base font-normal text-white">
              Stores
            </h1>
          </div>
          <div className="w-[1px] h-full bg-white"></div>
          <div className="flex flex-col font-jakarta">
            <h1 className="text-2xl md:text-5xl font-medium text-orange">
              800+
            </h1>
            <h1 className="text-xs md:text-base font-normal text-white">
              Customer
            </h1>
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <img src={Image} alt="" className="h-full w-full object-cover" />
      </div>
    </section>
  );
}
