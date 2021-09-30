import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "Counter",
  initialState: { value: 0 },
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
    // increasedByAmount: state => {
    //   state.value += 30;
    // },
  },
});
export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;
