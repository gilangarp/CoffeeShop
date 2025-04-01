import CardProduct from "../../../components/visual/Card/CardProduct";
import test from "../../../assets/hero-image-home-about.png";
const dummyProductData = [
  {
    id: "1",
    image: test,
    name: "Hazelnut Latte",
    description:
      "A rich, creamy latte with the perfect balance of hazelnut flavor, ideal for a relaxing afternoon break.",
    price: "20000",
    discount: "10000",
    rating: "4",
  },
  {
    id: "2",
    image: test,
    name: "Vanilla Cappuccino",
    description:
      "A classic cappuccino topped with a smooth, fragrant vanilla foam, perfect for any coffee lover.",
    price: "22000",
    rating: "4",
  },
  {
    id: "3",
    image: test,
    name: "Caramel Macchiato",
    description:
      "A delicious combination of espresso and steamed milk, topped with a rich caramel sauce.",
    price: "25000",
    rating: "4",
  },
  {
    id: "4",
    image: test,
    name: "Iced Mocha",
    description:
      "A cool, refreshing iced coffee with chocolate syrup and a splash of milk, perfect for warm days.",
    price: "18000",
    rating: "4",
  },
];

export default function FavoriteProduct() {
  const handleBuy = (id: string) => {
    console.log(`Buying product with ID: ${id}`);
  };
  return (
    <section className="flex flex-col px-[21px] md:px-20 lg:px-32 py-[60px] gap-6">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl md:text-5xl font-jakarta font-medium text-black">
          Here is People’s
          <span className="text-brown"> Favorite </span>
        </h1>
        <div className="w-[68px] h-[3px] bg-orange"></div>
        <p className="text-sm md:text-base text-center font-jakarta font-normal text-text-gray">
          Let&apos;s choose and have a bit taste of people&apos;s favorite. It
          might be yours too!
        </p>
      </div>
      <div className="flex flex-wrap justify-between gap-6 ">
        {dummyProductData.map((product) => (
          <CardProduct key={product.id} product={product} buy={handleBuy} />
        ))}
      </div>
    </section>
  );
}
