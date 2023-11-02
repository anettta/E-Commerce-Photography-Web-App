import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./api/productsApi";
import { storyApi } from "./api/storiesApi";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [storyApi.reducerPath]: storyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productApi.middleware, storyApi.middleware]),
});
