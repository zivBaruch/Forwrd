import { configureStore } from '@reduxjs/toolkit'
import queryValue from "./querySlice"

export const store = configureStore({
  reducer: {
    queryValue: queryValue,
  },
});