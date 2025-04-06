import { PiTrolleyFill } from "react-icons/pi";
import Button from "../../interactive/Button/Button";
import { Rating } from "../Rating/Rating";
import { stringToRupiah } from "../../../utils/stringToRupiah/stringToRupiah";
import { IFetchAllDataProductResponse } from "../../../lib/features/product/productType";

type CardProductProps = {
  product: IFetchAllDataProductResponse;
  rating?: boolean;
  buy: (uuid: string) => void;
};

export default function CardProduct({
  product,
  rating = false,
  buy,
}: CardProductProps) {
  return (
    <div className="max-w-[158px] md:max-w-[377px]">
      {product.discount && (
        <div className="text-xs p-2 rounded-full bg-red-500 w-fit text-white font-bold absolute mt-3 ml-2">
          FLASH SALE!
        </div>
      )}
      <img
        src={product.image}
        alt={`Image of ${product.name}`}
        className="min-w-[158px] min-h-[150px] max-w-[158px] max-h-[150px] md:min-w-[377px] md:min-h-[360px] md:max-w-[377px] md:max-h-[360px] object-cover"
      />
      <div className="font-jakarta flex flex-col gap-3 md:mx-2 md:-translate-y-1/4 bg-white md:p-3 md:shadow-md ">
        <h1 className="text-lg md:text-[21px] font-medium text-navy line-clamp-1">
          {product.name}
        </h1>
        <p className="text-xs md:text-sm font-normal text-navy line-clamp-3">
          {product.description}
        </p>
        <div className="flex flex-col md:flex-row gap-1 md:gap-3">
          {product.discount && (
            <h1 className="text-xs hidden md:block line-through text-red-500">
              {stringToRupiah(Number(product.price))}
            </h1>
          )}

          <h1 className="text-lg font-medium text-orange">
            {product.discount
              ? stringToRupiah(Number(product.discount))
              : stringToRupiah(Number(product.price))}
          </h1>
        </div>
        {rating && <Rating rating={Number(product.rating)} />}
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-[1fr_auto] md:grid-rows-1 gap-3">
          <Button onClick={() => buy(product.uuid)} className="md:w-full">
            Buy
          </Button>
          <Button variant="secondary" className="md:w-auto">
            <Button.Icon>
              <PiTrolleyFill className="w-6 h-6 text-orange" />
            </Button.Icon>
          </Button>
        </div>
      </div>
    </div>
  );
}
