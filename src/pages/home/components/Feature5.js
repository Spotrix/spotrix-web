import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

// imgs
import GlabIcon from "../../../images/glab.png";
import CommaIcon from "../../../images/comma.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(5),
    height: "35vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    fontSize: 24,
  },
  content: {
    height: "15vh",
    color: theme.palette.text.primary,
    lineHeight: 2,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  smallFont: {
    fontSize: 14,
    color: "black",
  },
  avatarGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    "&:hover": {
      width: theme.spacing(9),
      height: theme.spacing(9),
    }
  }
}));

export default function Feature5() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={9}>
                <img src={CommaIcon} width={20} alt="comma"/>
                <p><i>Spotrix helps users sketch and share professional data-flow processing, providing business intelligence tools for
                  everyone who want to data management. I don’t think enough people know how helpful
                  this technology can be, but just try it and you will do better.
                </i></p>
                <p className={classes.smallFont}>
                  - Ciusji, administrator of GuinsooLab
                </p>
              </Grid>
              <Grid item xs={3} className={classes.avatarGrid}>
                <Avatar
                  alt={"faker"}
                  src={GlabIcon}
                  className={classes.avatar}
                  onClick={() => window.open("https://guinsoolab.github.io/glab", "_target")}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
          </Grid>
        </Grid>
    </div>
  );
}