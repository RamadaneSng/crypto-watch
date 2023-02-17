import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
    name: "list",
    initialState: {
        listReducer: null,
    },
    reducers: {
        setListDisplay: (state, { payload }) => {
            state.listReducer = payload;
        }
    }

})


export const { setListDisplay } = listSlice.actions;
export default listSlice.reducer;