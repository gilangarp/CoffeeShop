import { useEffect } from "react";
import CardProduct from "../../../components/visual/Card/CardProduct";
import { useAppDispatch, useAppSelector } from "../../../lib/hook";
import { getAllProductAction } from "../../../lib/features/product/slice/getAllProductSlice";
import { useNavigate } from "react-router-dom";

export default function FavoriteProduct() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { product, loading } = useAppSelector((state) => state.product);

  const handleBuyClick = (id: string) => {
    navigate(`/detail-product/${id}`);
  };

  useEffect(() => {
    dispatch(
      getAllProductAction.getAllProductThunk({
        category: "Favorite Product",
      })
    );
  }, [dispatch]);

  console.log(product);
  if (loading) {
    return <div>Loading...</div>;
  }

  const displayedProducts = product.slice(0, 4);

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
      <div className="flex flex-wrap justify-center sm:justify-between gap-6 ">
        {displayedProducts.length === 0 ? (
          <div className="text-center text-gray-500">
            No favorite products available.
          </div>
        ) : (
          displayedProducts.map((product) => (
            <CardProduct
              key={product.uuid}
              product={product}
              buy={handleBuyClick}
            />
          ))
        )}
      </div>
    </section>
  );
}
