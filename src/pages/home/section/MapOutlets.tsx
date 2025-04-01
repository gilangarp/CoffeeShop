import global from "../../../assets/image-global.png";

export default function MapOutlets() {
  return (
    <section className="flex flex-col px-[21px] md:px-20 lg:px-32 py-[60px] gap-6">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl md:text-5xl font-jakarta font-medium text-black">
          <span className="text-brown"> Visit Our People </span>
          in The Spot on The Map Below
        </h1>
        <div className="w-[68px] h-[3px] bg-orange"></div>
        <p className="text-sm md:text-base text-center font-jakarta font-normal text-text-gray">
          You can explore the menu that we provide with fun and have their own
          taste and make your day better.
        </p>
      </div>
      <div className="w-full h-full">
        <img className="object-cover" src={global} alt="global" />
      </div>
    </section>
  );
}
