import { request } from "@src/utils";
import { createSlice } from "@reduxjs/toolkit";

let getListData = (param) => {
    console.log(param);
    return request.get("https://api.apiopen.top/musicRankingsDetails?type=1");
};

export const { reducer, actions } = createSlice({
    name: "example",

    initialState: {
        a: "redux 内的变量",
    },

    reducers: {
        save(state, { payload }) {
            return { ...state, a: payload };
        },
    },
});

export const effects = {
    getListData: (params) => async (dispatch) => {
        let res = await getListData(params);
        dispatch(actions.save(res.code));
    },
};
