import { createSlice } from "@reduxjs/toolkit";

export interface INavbarSlice {
  navbarOpen: boolean;
}

const initialState: INavbarSlice = {
  navbarOpen: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleNavbar: (state) => {
      state.navbarOpen = !state.navbarOpen;
    },
  },
});

export const { toggleNavbar } = navbarSlice.actions;

export const navbarReducer = navbarSlice.reducer;
