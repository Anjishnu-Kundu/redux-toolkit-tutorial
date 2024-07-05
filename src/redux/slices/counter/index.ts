import { createSlice } from "@reduxjs/toolkit"

export interface CounterState {
    value: number
  }
  
  const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    initialState,
    name: 'counter',
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => { state.value -= 1 }
    }
});

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer