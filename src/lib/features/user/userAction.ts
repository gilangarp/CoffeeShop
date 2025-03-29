import { createAsyncThunk } from "@reduxjs/toolkit";
import { IRegisterDataResponse, ISignupDto, ISignupResponse } from "./userType";
import axios, { AxiosError, AxiosResponse } from "axios";
import { IResponse } from "../../responseType";
import apiConfig from "../../../config/apiConfig";

export const signupThunk = createAsyncThunk<
  IRegisterDataResponse,
  ISignupDto,
  { rejectValue: IResponse }
>("signupThunk", async (form, { rejectWithValue }) => {
  try {
    const result: AxiosResponse<ISignupResponse> = await axios.post(
      `${apiConfig.apiUrl}/user/signup`,
      form
    );

    return result.data.data;
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
