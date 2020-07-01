import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SetTheme from "./Theme/SetTheme.jsx";
import SetComment from "./Comment/SetComment.jsx";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import { deepPurple } from "@material-ui/core/colors";

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
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500]
  },
  exportContainer: {
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
  }
}));

const Login = (...params) => {
  const { isAuth } = params;
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ justifyContent: "center" }}>
      <Avatar className={classes.avatar}>U</Avatar>
      {isAuth ? (
        <Button color="primary">log in Medium</Button>
      ) : (
        <Button color="secondary">sign out</Button>
      )}
    </div>
  );
};

const ExportTo = (...params) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span>Export</span>
      <div className={classes.exportContainer}>
        <div>pdf</div>
        <div>word</div>
      </div>
    </div>
  );
};

const BatchExport = (...params) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span>Batch Export</span>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          window.location.href = "https://mediumx.jackofallcoding.tech/";
        }}
      >
        👉 Go pro
      </Button>
    </div>
  );
};

export default function Setup() {
  return (
    <div>
      <Login isAuth={false} />
      <SetTheme />
      <SetComment />
      <ExportTo />
      <BatchExport />
    </div>
  );
}
