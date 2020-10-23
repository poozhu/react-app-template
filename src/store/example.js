import { request } from "@src/utils";

let getListData = (param) => {
    console.log(param);
    return request.get("https://api.apiopen.top/musicRankingsDetails?type=1");
};

export default {
    namespace: "example",

    state: {
        a: "redux 内的变量",
    },

    subscriptions: {
        setup({ dispatch, history }) {},
    },

    effects: {
        *getListData({ payload }, { call, put }) {
            let res = yield call(getListData, payload);
            yield put({ type: "save", payload: res.code });
        },
    },

    reducers: {
        save(state, { payload }) {
            return { ...state, a: payload };
        },
    },
};
