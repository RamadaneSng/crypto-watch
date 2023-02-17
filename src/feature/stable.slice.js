import { createSlice } from "@reduxjs/toolkit";

export const stableSlice = createSlice({
    name: "stable",
    initialState: {
        stableReducer: true,
    },
    reducers: {
        setStableSate: (state, { payload }) => {
            state.stableReducer = payload;
        }
    }

})


export const { setStableSate } = stableSlice.actions;
export default stableSlice.reducer;