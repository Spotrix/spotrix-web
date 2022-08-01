import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// imgs
import GuinsooEbook from "../../../images/gusinsoo-ebook.png";
import CommaIcon from "../../../images/comma.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "45vh",
    backgroundColor: "#ffffff",
    fontSize: 20,
    color: "#ffffff",
  },
  mainRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40vh",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 20,
    padding: theme.spacing(2),
  },
  content: {
    height: "30vh",
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
  bookGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > img": {
      height: "30vh"
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
          <Grid item xs={8} className={classes.mainRoot}>
            <Grid container>
              <Grid item xs={9}>
                <img src={CommaIcon} width={20} alt="comma"/>
                <p><i>Spotrix helps users sketch and share professional data-flow processing, providing business intelligence tools for
                  everyone who want to data management. I don’t think enough people know how helpful
                  this technology can be, but just try it and you will do better.
                </i></p>
              </Grid>
              <Grid item xs={3} className={classes.bookGrid}>
                <img src={GuinsooEbook} alt="corp" onClick={() => window.open("https://guinsoolab.github.io/glab", "_target")} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
          </Grid>
        </Grid>
    </div>
  );
}