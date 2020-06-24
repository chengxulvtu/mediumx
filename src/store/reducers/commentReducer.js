import { createReducer } from "./reducerCreator";
import * as types from "../types";

const initialState = {
  isClassicComment: false
};

export const commentReducer = createReducer(initialState, {
  [types.SHIFT_TO_CLASSIC_STYLE]: (state, action) => {
    return Object.assign({}, state, {
      isClassicComment: true
    });
  },
  [types.SHIFT_TO_MEDIUM_STYLE]: (state, action) => {
    return Object.assign({}, state, {
      isClassicComment: false
    });
  }
});
