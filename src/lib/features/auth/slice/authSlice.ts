import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authThunk } from "../authAction";
import { IAuthDto } from "../authType";

export interface IAuthState {
  formData: IAuthDto;
  role: string | null;
  uuid: string | null;
  is_new_user: boolean;
  loading: boolean;
  errorMessage: string;
}

const initialState: IAuthState = {
  formData: {
    email: "",
    password: "",
  },
  role: null,
  uuid: null,
  is_new_user: false,
  loading: false,
  errorMessage: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<IAuthDto>) => {
      state.formData = action.payload;
    },
    logout: (state) => {
      state.uuid = null;
      state.role = null;
      state.loading = false;
      state.errorMessage = "";
    },
    clearErrorMessage: (state) => {
      state.errorMessage = "";
    },
    resetForm: (state) => {
      state.formData = { email: "", password: "" };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(authThunk.pending, (state) => {
        state.loading = true;
        state.errorMessage = "";
      })
      .addCase(authThunk.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage =
          action.payload?.error?.message || "Unknown error occurred";
      })
      .addCase(authThunk.fulfilled, (state, { payload }) => {
        state.role = payload.role;
        state.uuid = payload.uuid;
        state.is_new_user = payload.is_new_user;
        state.loading = false;
        state.errorMessage = "";
      });
  },
});

export const authAction = {
  ...authSlice.actions,
  authThunk,
};

export type authState = ReturnType<typeof authSlice.reducer>;
export const authReducer = authSlice.reducer;
