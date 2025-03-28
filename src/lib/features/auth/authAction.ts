import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";
import { IResponse } from "../../responseType";
import { IAuthDataResponse, IAuthDto, IAuthResponse } from "./authType";
import apiConfig from "../../../config/apiConfig";

export const authThunk = createAsyncThunk<
  IAuthDataResponse,
  IAuthDto,
  { rejectValue: IResponse }
>("authThunk/signin", async (form, { rejectWithValue }) => {
  try {
    const response: AxiosResponse<IAuthResponse> = await axios.post(
      `${apiConfig.apiUrl}/signin`,
      form
    );

    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage =
        error.response?.data?.error?.message || "An unexpected error occurred";
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
});
