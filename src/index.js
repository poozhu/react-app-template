import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import dva from "dva";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require("./store/global").default);

// 4. Router
app.router(require("./App").RouterConfig);

// 5. Start
app.start("#root");

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
