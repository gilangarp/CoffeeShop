import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";
import { IResponse } from "../../responseType";
import { IAuthDto, IAuthResponse, IUserAuthResponse } from "./authType";
import apiConfig from "../../../config/apiConfig";

export const authThunk = createAsyncThunk<
  IAuthResponse,
  IAuthDto,
  { rejectValue: IResponse }
>("authThunk/signin", async (form, { rejectWithValue }) => {
  try {
    const response: AxiosResponse<IUserAuthResponse> = await axios.post(
      `${apiConfig.apiUrl}/auth`,
      form
    );

    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage =
        error.response?.data?.error?.message || "An unexpected error occurred";
      const status = error.response?.status;
      return rejectWithValue({
        status: status,
        error: {
          message: errorMessage,
        },
      });
    }
    return rejectWithValue({
      error: {
        message: "An unexpected error occurred.",
      },
    });
  }
});
