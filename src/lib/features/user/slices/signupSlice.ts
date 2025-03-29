import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { validatePassword } from "../../../../utils/validatePassword/validatePassword";
import { ISignupDto } from "../userType";
import { signupThunk } from "../userAction";

interface SignupState {
  formData: ISignupDto;
  passwordConfirm: string;
  role: string;
  uuid: string;
  currentSection: "signup" | "address";
  message: string;
  loading: boolean;
  error: string;
}

const initialState: SignupState = {
  formData: {
    name: "",
    email: "",
    password: "",
    city: "",
    country: "",
    postalCode: "",
    street: "",
    state: "",
  },
  message: "",
  role: "",
  uuid: "",
  passwordConfirm: "",
  currentSection: "signup",
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
    setCurrentSection: (state, action: PayloadAction<"signup" | "address">) => {
      state.currentSection = action.payload;
    },
    clearErrorMessage: (state) => {
      state.message = "";
      state.error = "";
    },
    resetForm: (state) => {
      state.formData = {
        name: "",
        email: "",
        password: "",
        city: "",
        country: "",
        postalCode: "",
        street: "",
        state: "",
      };
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
      .addCase(signupThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = "";
        state.role = payload.role;
        state.uuid = payload.uuid;
        state.currentSection = "address";
      })

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

export type signupState = ReturnType<typeof signupSlice.reducer>;
export const signupReducer = signupSlice.reducer;
