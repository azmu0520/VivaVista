// src/features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || null,
  },
  reducers: {
    register: (state, action) => {
      if (action.payload !== undefined) {
        localStorage.setItem("token", action.payload);
        state.token = action.payload;
      }
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.token = null;
    },
  },
});

export const { register, logout } = authSlice.actions;
export default authSlice.reducer;
