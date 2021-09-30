import { configureStore } from '@reduxjs/toolkit'
import {CounterReducer }from './CounterSlice'

export default configureStore({
  reducer: {
      Counter:CounterReducer,
  },
})