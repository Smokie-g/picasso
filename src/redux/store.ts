import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { posts, post } from '../api'

export const store = configureStore({
  reducer: {
    [posts.reducerPath]: posts.reducer,
    [post.reducerPath]: post.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(posts.middleware, post.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
