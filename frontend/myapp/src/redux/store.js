import { configureStore } from "@reduxjs/toolkit";

import { productApi } from "./api/productsApi";
import { storyApi } from "./api/storiesApi";
import { authApi } from "./api/authApi";
import { userApi } from "./api/userApi";

import userSlice from "./features/userSlice.js";

export const store = configureStore({
  reducer: {
    auth: userSlice,
    [productApi.reducerPath]: productApi.reducer,
    [storyApi.reducerPath]: storyApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      productApi.middleware,
      storyApi.middleware,
      authApi.middleware,
      userApi.middleware,
    ]),
});
