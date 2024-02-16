import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const posts = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: builder => ({
    getPosts: builder.query<IRow[], void>({
      query: () => `posts`,
    }),
  }),
})

export const post = createApi({
  reducerPath: 'post',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: builder => ({
    getPost: builder.query<IRow, string>({
      query: id => `posts/${id}`,
    }),
  }),
})

export const { useGetPostsQuery } = posts
export const { useGetPostQuery } = post
