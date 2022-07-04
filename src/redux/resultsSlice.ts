import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Result {
    name: string,
    score: number
}

export interface ResultsState {
    data: Result[]
  }
  
  const initialState: ResultsState = {
    data: [],
  }
  

export const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    addResult: (state, action: PayloadAction<Result>) => {
        state.data = [...state.data, action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { addResult } = resultsSlice.actions

export default resultsSlice.reducer