import { configureStore } from "@reduxjs/toolkit";

// reducer 注册
let context = require.context("./", false, /.js$/);
let reducer = context.keys().reduce((obj, item) => {
    let [, name] = /\.\/(.+)\.js$/.exec(item);
    if (name !== "index") obj[name] = context(item).reducer;
    return obj;
}, {});

export const store = configureStore({
    reducer,
});
