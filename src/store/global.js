import { createSlice } from "@reduxjs/toolkit";

export const { reducer, actions } = createSlice({
    name: "global",

    initialState: {
        a: "global 内的变量",
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
});
