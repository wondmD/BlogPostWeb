import { configureStore } from '@reduxjs/toolkit';
import { blogApi } from './service/blog-service'

export const store = configureStore({
  reducer: {

    [blogApi.reducerPath]: blogApi.reducer,
  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      blogApi.middleware,

    ),
});

export type AppStore = typeof store;export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
