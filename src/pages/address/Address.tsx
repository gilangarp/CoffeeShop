import FormAddress from "./section/FormAddress";
import imageAddress from "../../assets/image-address-and-forgot.png";
import HeaderAddress from "./section/HeaderAddress";

const Address = () => {
  return (
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-[auto,1fr] bg-background">
      <img
        width={460}
        height={1024}
        className="hidden md:block md:max-w-72 lg:max-w-full object-cover w-full h-screen"
        alt="image-signup"
        src={imageAddress}
      />
      <div className="pl-5 pr-5 md:pl-11 md:pr-16 lg:pl-16 lg:pr-32 flex flex-col gap-5 justify-center relative">
        <HeaderAddress />
        <FormAddress />
      </div>
    </div>
  );
};

export default Address;
