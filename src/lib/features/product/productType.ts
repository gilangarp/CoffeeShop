import { IResponse } from "../../responseType";

export interface IFetchAllDataProductResponse {
  uuid: string;
  image: string;
  name: string;
  description: string;
  category: string;
  price: number;
  discount?: number;
  discountType?: number;
  stock: number;
  rating: number;
}

export interface IProductPaginationQuery {
  page?: number;
  limit?: number;
}

export interface IProductQuery extends IProductPaginationQuery {
  search?: string;
  category?: string;
  discount?: string;
  minimumPrice?: number;
  maximumPrice?: number;
  sortBy?: string;
}

export interface IProductResponse extends IResponse {
  data: IFetchAllDataProductResponse[];
}
