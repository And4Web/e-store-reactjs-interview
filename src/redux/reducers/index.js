import { combineReducers } from "redux";
import { topMenu } from "./topMenuReducer.js/index.js";

const rootReducer = combineReducers({
  topMenu
});

export default rootReducer;