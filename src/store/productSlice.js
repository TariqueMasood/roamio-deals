import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: [],
    reducers: {
        add(state, action) {
           state.push(action.payload);
        },
    }
});

export const {add} = productSlice.actions;

export default productSlice.reducer;