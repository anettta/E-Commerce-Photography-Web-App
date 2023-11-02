import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const storyApi = createApi({
  reducerPath: "storyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  endpoints: (builder) => ({
    getStories: builder.query({
      query: (params) => "/stories",
    }),
    getStoryDetails: builder.query({
      query: (id) => `/stories/${id}`,
    }),
  }),
});

export const { useGetStoriesQuery, useGetStoryDetailsQuery } = storyApi;
