import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers as needed
  },
});

export default store;
