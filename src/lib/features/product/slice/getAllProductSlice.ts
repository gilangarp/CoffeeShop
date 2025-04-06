import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFetchAllDataProductResponse, IProductQuery } from "../productType";
import { getAllProductThunk } from "../productAction";
import { IPagination } from "../../../IPagination";

export interface IProductState {
  filter?: IProductQuery;
  uuid: string;
  product: IFetchAllDataProductResponse[];
  orderTotal: number;
  pagination: IPagination;
  loading: boolean;
  errorMessage: string;
}

const initialState: IProductState = {
  uuid: "",
  product: [],
  filter: {
    category: "",
    discount: "",
    limit: 0,
    maximumPrice: 0,
    minimumPrice: 0,
    page: 0,
    search: "",
    sortBy: "",
  },
  pagination: {
    currentPage: "",
    nextLink: "",
    prevLink: "",
    totalPages: "",
    totalData: 0,
  },
  orderTotal: 0,
  loading: false,
  errorMessage: "",
};

const getAllProductSlice = createSlice({
  name: "getProduct",
  initialState,
  reducers: {
    setFilter: (state, { payload }: PayloadAction<IProductQuery>) => {
      state.filter = payload;
    },
    resetFilter: (state) => {
      state.filter = initialState.filter;
    },
    updateFilter: (
      state,
      { payload }: PayloadAction<Partial<IProductQuery>>
    ) => {
      state.filter = { ...state.filter, ...payload };
    },
    setProducts: (
      state,
      { payload }: PayloadAction<IFetchAllDataProductResponse[]>
    ) => {
      state.product = payload;
    },
    setOrderTotal: (state, { payload }: PayloadAction<number>) => {
      state.orderTotal = payload;
    },
    setPagination: (state, { payload }: PayloadAction<IPagination>) => {
      state.pagination = payload;
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllProductThunk.pending, (state) => {
        state.loading = true;
        state.errorMessage = "";
      })
      .addCase(getAllProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage =
          action.payload?.error?.message || "Unknown error occurred";
      })
      .addCase(getAllProductThunk.fulfilled, (state, action) => {
        state.product = action.payload.products;
        state.pagination = action.payload.pagination;
        state.loading = false;
        state.errorMessage = "";
      });
  },
});

export const getAllProductAction = {
  ...getAllProductSlice.actions,
  getAllProductThunk,
};

export type getAllProductState = ReturnType<typeof getAllProductSlice.reducer>;
export const getAllProductReducer = getAllProductSlice.reducer;
