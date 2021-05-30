import React from "react";
import {
  AppBar,
  Toolbar,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";

// styles
import useStyles from "./styles";

// pictures
import SpotrixLogo from "../../images/spotrix.svg";

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar
      id="attr"
      position="fixed"
      className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <img
          src={SpotrixLogo}
          className={classes.logo}
          alt="glab-logo"
          onClick={() => window.open("#/app/home", "_self")}
        />
        <p
          className={classes.subTitle}
          onClick={() => window.open("https://ciusji.gitbook.io/spotrix/", "_target")}
        >
          Docs
        </p>
        <p
          className={classes.subTitle}
          onClick={() => { window.open("https://ciusji.gitbook.io/spotrix/", "_target")}}
        >
          Blog
        </p>
        <div className={classes.grow} />
        <div>
          <Button
            variant={"outlined"}
            className={classes.buttonInfoToMore}
          >
            Download
          </Button>
        </div>
        <div className={classes.gap} />
      </Toolbar>
    </AppBar>
  );
}
