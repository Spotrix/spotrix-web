import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "100vh",
  },
  leftPaper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    paddingBottom: theme.spacing(5),
    backgroundColor: theme.palette.primary.main,
    color: "#000000",
    border: "4px solid #000000",
  },
  rightPaper1: {
    borderTop: "4px solid #000000",
    borderRight: "4px solid #000000",
    height: "50vh",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#96b5ff",
  },
  rightPaper2: {
    borderTop: "4px solid #000000",
    borderRight: "4px solid #000000",
    height: "50vh",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#d4f888",
  },
  rightPaper3: {
    height: "50vh",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#fcd568",
    borderTop: "4px solid #000000",
    borderBottom: "4px solid #000000",
    borderRight: "4px solid #000000",
  },
  logoImg: {
    height: 40,
    margin: "1rem",
  },
  logoSlogan: {
    fontSize: 70,
    fontWeight: 600,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  logoSloganBody: {
    fontSize: 24,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5),
  },
  buttonInfoToMore: {
    fontSize: 16,
    marginTop: theme.spacing(5),
    textTransform: "Capitalize",
    backgroundColor: "#000000",
    borderRadius: 0,
    color: "#ffffff",
    marginRight: theme.spacing(3),
  },
  buttonInfoDownload: {
    fontSize: 16,
    marginTop: theme.spacing(5),
    textTransform: "Capitalize",
    borderColor: "#000000",
    borderRadius: 0,
    color: "#000000",
    marginRight: theme.spacing(3),
  },
  mainTitle: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function Feature1() {
  const classes = useStyles();

  const defaultSystemName = "Unleash the value of your data";
  const slogan = "A modern, enterprise-ready business intelligence web application";

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <div className={classes.leftPaper}>
            <div>
              <p className={classes.logoSlogan}>
                {defaultSystemName}
              </p>
              <p className={classes.logoSloganBody}>
                {slogan}
              </p>
            </div>
            <div>
            </div>
            <div>
              <Button
                variant={"outlined"}
                className={classes.buttonInfoToMore}
                endIcon={<ArrowRightAltIcon />}
                onClick={() => window.open("https://ciusji.gitbook.io/spotrix/", "_blank")}
              >
                Learn More
              </Button>
              <Button
                variant={"outlined"}
                className={classes.buttonInfoDownload}
                onClick={() => window.open("https://github.com/Spotrix/spotrix/releases", "_blank")}
              >
                Download App
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={6} className={classes.rightPaper1} />
            <Grid item xs={6} className={classes.rightPaper2} />
            <Grid item xs={12} className={classes.rightPaper3} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}