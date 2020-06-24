import React from "react";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();

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
      document.body.style.backgroundColor = theme.backgroundColor;
      document.body.style.color = theme.color;
      console.log(typeof document.body.style.backgroundColor);
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
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
