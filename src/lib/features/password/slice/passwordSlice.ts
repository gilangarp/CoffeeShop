import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPassword: false,
  showPasswordConfirm: false,
};

const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    togglePassword: (state) => {
      state.showPassword = !state.showPassword;
    },
    togglePasswordConfirm: (state) => {
      state.showPasswordConfirm = !state.showPasswordConfirm;
    },
  },
});

export const { togglePassword, togglePasswordConfirm } = passwordSlice.actions;

export const passwordReducer = passwordSlice.reducer;
