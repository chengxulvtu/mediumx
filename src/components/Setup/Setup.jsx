import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500]
  }
}));

const Login = (...params) => {
  const classes = useStyles();
  const { isAuth, userName } = params;
  return (
    <div className={classes.root}>
      <Avatar className={classes.purple}>U</Avatar>
      {isAuth ? <span>log in Medium</span> : <span>{userName}</span>}
    </div>
  );
};

export default function Setup() {
  return (
    <div>
      <Login />
    </div>
  );
}
