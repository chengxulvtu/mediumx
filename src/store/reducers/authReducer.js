import { createReducer } from "./reducerCreator";
import * as types from "../types";

const initialState = {
  isAuth: false
};

export const authReducer = createReducer(initialState, {
  [types.SIGN_IN]: (state, action) => {
    return Object.assign({}, state, {
      isAuth: action.payload
    });
  },
  [types.SIGN_OUT]: (state, action) => {
    return Object.assign({}, state, {
      isAuth: action.payload
    });
  }
});
