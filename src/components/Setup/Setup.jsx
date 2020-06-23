import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
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
  },
  goProBtn: {}
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

const SetTheme = (...params) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span>Theme</span>
      <div className={classes.themeContainer}>
        <div className={classes.darkTheme}>Dark</div>
        <div className={classes.eyeTheme}>Eye</div>
        <div className={classes.defaultTheme}>Default</div>
      </div>
    </div>
  );
};

const SetCommentSystem = (...params) => {
  const [isClassic, setCommentSystem] = useState(isClassic);

  const classes = useStyles();

  const handleChange = event => {
    setCommentSystem(!isClassic);
  };

  return (
    <div className={classes.root}>
      <span>Classic Comment System</span>
      <Switch
        checked={isClassic}
        onChange={handleChange}
        color="primary"
        name="isClassic"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
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
      <Button variant="contained" color="primary">
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
      <SetCommentSystem />
      <ExportTo />
      <BatchExport />
    </div>
  );
}
