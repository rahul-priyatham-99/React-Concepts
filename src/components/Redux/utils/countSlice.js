import {createSlice} from '@reduxjs/toolkit'

const countSlice = createSlice({
    name: "count",
    initialState: {
        count : 0
    },
    reducers: {
        incrementC: (state) => {
            state.count = state.count + 1
        },
        decrementC: (state) => {
            state.count = state.count - 1
        },
        resetC: (state) => {
            state.count = 0
        }
    }
})

export const {incrementC, decrementC, resetC} = countSlice.actions;
export default countSlice.reducer;