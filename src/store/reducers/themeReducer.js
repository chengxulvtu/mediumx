import { createReducer } from "./reducerCreator";
import * as types from "../types";
import { themes } from "../../configs/themes";

const initialState = themes.defaultTheme;

export const themeReducer = createReducer(initialState, {
  [types.SET_THEME_DARK]: (state, action) => {
    return themes.darkTheme;
  },
  [types.SET_THEME_EYE]: (state, action) => {
    return themes.eyeTheme;
  },
  [types.SET_THEME_DEFAULT]: (state, action) => {
    return themes.defaultTheme;
  }
});
