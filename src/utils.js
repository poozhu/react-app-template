import Loadable from "react-loadable";

// 动态引入组件
export function asynImport(importComponent, loading = null) {
    return Loadable({
        loader: () => importComponent(),
        loading,
    });
}
