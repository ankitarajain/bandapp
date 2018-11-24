/* eslint-disable */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "redux/store";
import routes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { APP_NAME } from "../settings";
import "./style.less";

if (!global._babelPolyfill) {
  require("babel-polyfill");
}
/* eslint-enable */

const rootElement = document.querySelector(`#${APP_NAME}`);
if (rootElement) {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <div className="UIContainer">
          <Header />
          <div className="app-content">{routes}</div>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>,
    rootElement
  );
}
