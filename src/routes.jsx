import React from "react";
import { Route } from "react-router-dom";
import BandPage from "./containers/BandPage";
import ConcertPage from "./containers/ConcertPage";

const routes = (
  <div>
    <Route path="/" component={BandPage} />
    <Route path="/concerts" component={ConcertPage} />
  </div>
);
export default routes;
