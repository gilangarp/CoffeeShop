import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { validatePassword } from "../../../../utils/validatePassword/validatePassword";
import { ISignupDto } from "../userType";
import { signupThunk } from "../userAction";

interface signupState {
  formData: ISignupDto;
  passwordConfirm: string;
  message: string;
  loading: boolean;
  error: string;
}

const initialState: signupState = {
  formData: {
    name: "",
    email: "",
    password: "",
  },
  message: "",
  passwordConfirm: "",
  loading: false,
  error: "",
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<ISignupDto>) => {
      state.formData = action.payload;
    },
    setPasswordConfirm: (
      state,
      action: PayloadAction<{ passwordConfirm: string }>
    ) => {
      state.passwordConfirm = action.payload.passwordConfirm;
      const confirmPasswordValidationError = validatePassword(
        state.formData.password,
        state.passwordConfirm
      );
      if (confirmPasswordValidationError) {
        state.error = confirmPasswordValidationError;
      } else {
        state.error = "";
      }
    },
    clearErrorMessage: (state) => {
      state.message = "";
      state.error = "";
    },
    resetForm: (state) => {
      state.formData = { name: "", email: "", password: "" };
      state.passwordConfirm = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupThunk.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.message = "";
      })
      .addCase(
        signupThunk.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.error = "";
          state.message = action.payload;
        }
      )

      .addCase(signupThunk.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.error?.message || "Unknown error occurred";
      });
  },
});

export const signupActions = {
  ...signupSlice.actions,
  signupThunk,
};

export const signupReducer = signupSlice.reducer;
