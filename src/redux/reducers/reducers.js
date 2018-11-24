import { combineReducers } from "redux";
import band_reducer from "./band_reducer";
import concert_reducer from "./concert_reducer";

const rootReducer = combineReducers({
  bands: band_reducer,
  concerts:concert_reducer
});
export default rootReducer;
