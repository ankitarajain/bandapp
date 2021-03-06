/* eslint-disable */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import store from "redux/store";
import routes from "./routes";
import Header from "./components/Header";
import { APP_NAME } from "../settings";
import BandPage from "./containers/BandPage";
import "./style.less";

if (!global._babelPolyfill) {
  require("babel-polyfill");
}
/* eslint-enable */

const rootElement = document.querySelector(`#root`);
if (rootElement) {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <div className="UIContainer">
          <Header />
          <div className="app-content">{routes}</div>
        </div>
      </HashRouter>
    </Provider>,
    rootElement
  );
}
