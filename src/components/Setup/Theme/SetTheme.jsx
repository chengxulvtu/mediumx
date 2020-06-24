import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setThemeDark,
  setThemeDefault,
  setThemeEye
} from "../../../store/actions";
import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../../configs/themes";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "20px",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  themeContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    "& > *": {
      marginRight: "10px",
      padding: "5px 0",
      border: "1px solid #333;",
      width: "72px",
      borderRadius: "4px",
      textAlign: "center",
      cursor: "pointer"
    }
  },
  darkTheme: {
    color: "#eee",
    backgroundColor: "#333"
  },
  eyeTheme: {
    color: "#333",
    backgroundColor: "#a8e6cf"
  },
  defaultTheme: {
    color: "#333",
    backgroundColor: "#eee"
  }
}));

const SetTheme = (...params) => {
  const getTheme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    setSkin(getTheme);
  }, []);

  const handleClick = text => {
    console.log(text);
    let action;
    if (text === "darkTheme") {
      action = setThemeDark();
    } else if (text === "eyeTheme") {
      action = setThemeEye();
    } else {
      action = setThemeDefault();
    }
    try {
      const theme = themes[text];
      setSkin(theme);
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };

  const setSkin = theme => {
    const targetEl = document.querySelector("#root").firstChild;
    targetEl.style.backgroundColor = theme.backgroundColor;
    targetEl.style.color = theme.color;
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span>Theme</span>
      <div className={classes.themeContainer}>
        {Object.keys(themes).map(key => (
          <div className={classes[key]} onClick={() => handleClick(key)}>
            {key && key.slice(0, -5)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SetTheme;
