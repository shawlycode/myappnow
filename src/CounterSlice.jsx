import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "counterapp",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // increasedByAmount: state => {
    //   state.value += 30;
    // },
  },
});
export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;
