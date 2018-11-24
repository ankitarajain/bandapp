import { combineReducers } from "redux";
import band_reducer from "./band_reducer";
import concert_reducer from "./concert_reducer";

const rootReducer = combineReducers({
  user: band_reducer,
  teams:concert_reducer
});
export default rootReducer;
