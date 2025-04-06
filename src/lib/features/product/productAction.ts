import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";
import apiConfig from "../../../config/apiConfig";
import {
  IProductQuery,
  IFetchAllDataProductResponse,
  IProductResponse,
} from "./productType";
import { IResponse } from "../../responseType";
import { IPagination } from "../../IPagination";

export const getAllProductThunk = createAsyncThunk<
  { products: IFetchAllDataProductResponse[]; pagination: IPagination },
  IProductQuery,
  { rejectValue: IResponse }
>(
  "getAllProductThunk/product",
  async (form: IProductQuery, { rejectWithValue }) => {
    try {
      const url = `${apiConfig.apiUrl}/product`;

      const params = new URLSearchParams();

      if (form.search) params.append("search", form.search);
      if (form.category) params.append("category", form.category);
      if (form.discount) params.append("discount", form.discount);
      if (form.minimumPrice)
        params.append("minimumPrice", form.minimumPrice.toString());
      if (form.maximumPrice)
        params.append("maximumPrice", form.maximumPrice.toString());
      if (form.sortBy) params.append("sortBy", form.sortBy);

      if (form.page) params.append("page", form.page.toString());
      if (form.limit) params.append("limit", form.limit.toString());

      const fullUrl = params.toString() ? `${url}?${params.toString()}` : url;

      const result: AxiosResponse<IProductResponse> = await axios.get(fullUrl);

      const dataToCache = {
        products: result.data.data,
        pagination: {
          totalData: result.data.meta?.totalData || 0,
          totalPages: String(result.data.meta?.totalPage || 1),
          prevLink: result.data.meta?.prevLink || null,
          nextLink: result.data.meta?.nextLink || null,
          currentPage: String(form.page || 1),
        },
      };

      return dataToCache;
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.error?.message ||
          "An unexpected error occurred";
        const status = error.response?.status;
        return rejectWithValue({
          error: {
            message: errorMessage,
          },
          status: status,
        });
      }
      return rejectWithValue({
        error: {
          message: "An unexpected error occurred.",
        },
      });
    }
  }
);
