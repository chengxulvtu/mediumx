import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { commentReducer } from "./commentReducer";
import { themeReducer } from "./themeReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  comment: commentReducer,
  theme: themeReducer
});

export default rootReducer;
