import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reduxPromise from "redux-promise";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import reducers from "./reducers/index";

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
