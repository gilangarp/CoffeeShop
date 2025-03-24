import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authThunk } from "../authAction";

export interface IAuthState {
  token: string | null;
  role: string | null;
  uuid: string | null;
  loading: boolean;
  errorMessage: string | null;
}

const initialState: IAuthState = {
  token: null,
  role: null,
  uuid: null,
  loading: false,
  errorMessage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    },
    setRole: (state, action: PayloadAction<{ role: string }>) => {
      state.role = action.payload.role;
    },
    setId: (state, action: PayloadAction<{ id: string }>) => {
      state.uuid = action.payload.id;
    },
    removeToken: (state) => {
      state.token = null;
    },
    removeRole: (state) => {
      state.role = null;
    },
    removeId: (state) => {
      state.uuid = null;
    },
    logout: (state) => {
      state.token = null;
      state.uuid = null;
      state.role = null;
      state.loading = false;
      state.errorMessage = null;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(authThunk.pending, (state) => {
        state.loading = true;
        state.errorMessage = null;
      })
      .addCase(authThunk.rejected, (state) => {
        state.loading = false;
      })
      .addCase(authThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.role = payload.role;
        state.uuid = payload.uuid;
        state.loading = false;
        state.errorMessage = null;
      });
  },
});

export const authAction = {
  ...authSlice.actions,
  authThunk,
};

export type authState = ReturnType<typeof authSlice.reducer>;
export const authReducer = authSlice.reducer;
