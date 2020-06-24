import * as types from "../types";

/**
 * generator for action creator func
 * @param {*} type
 * @param  {...any} argNames
 */
const makeActionCreator = (type, ...argNames) => {
  return function(...args) {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
};

// 登录/退出
export const signIn = makeActionCreator(types.SIGN_IN, "payload");
export const signOut = makeActionCreator(types.SIGN_OUT, "payload");

// 切换评论模式
export const shiftToClassicStyle = makeActionCreator(
  types.SHIFT_TO_CLASSIC_STYLE
);
export const shiftToMediumStyle = makeActionCreator(
  types.SHIFT_TO_MEDIUM_STYLE
);

export const setThemeDark = makeActionCreator(types.SET_THEME_DARK);
export const setThemeEye = makeActionCreator(types.SET_THEME_EYE);
export const setThemeDefault = makeActionCreator(types.SET_THEME_DEFAULT);
