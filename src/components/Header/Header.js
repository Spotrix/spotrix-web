import React from "react";
import {
  AppBar,
  Toolbar,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import GitHubIcon from '@material-ui/icons/GitHub';

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
      elevation={0}
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
          Overview
        </p>
        <p
          className={classes.subTitle}
          onClick={() => window.open("https://ciusji.gitbook.io/spotrix/creating-charts/creating-your-charts", "_target")}
        >
          Gallery
        </p>
        <p
          className={classes.subTitle}
          onClick={() => window.open("https://ciusji.gitbook.io/spotrix/solutions/solutions", "_target")}
        >
          Solution
        </p>
        <p
          className={classes.subTitle}
          onClick={() => window.open("https://ciusji.gitbook.io/spotrix/ecosystem/ecosystem", "_target")}
        >
          Ecosystem
        </p>
        <p
          className={classes.subTitle}
          onClick={() => window.open("https://ciusji.gitbook.io/spotrix/", "_target")}
        >
          FAQ
        </p>
        <div className={classes.grow} />
        <div className={classes.grow} />
        <div>
          <Button
            variant={"outlined"}
            className={classes.buttonDownload}
            onClick={() => window.open("https://github.com/Spotrix/spotrix/releases", "_target")}
          >
            Download
          </Button>
        </div>
        <GitHubIcon style={{marginLeft: 24, marginRight: 24}} onClick={() => window.open("https://github.com/Spotrix", "_target")} />
        <div className={classes.gap} />
      </Toolbar>
    </AppBar>
  );
}
