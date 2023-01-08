import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

// home-right image
import HomeHero from "../../../images/right-image-v2.png";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#ffffff",
  },
  main: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#061640",
  },
  leftPaper: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingRight: theme.spacing(4),
  },
  rightPaper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: theme.spacing(4),
  },
  paperImg: {
    width: "50vw",
    borderRadius: 16,
  },
  logoSlogan: {
    fontSize: 60,
    fontWeight: 800,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color: "#fff"
  },
  logoSloganBody: {
    fontSize: 22,
    color: "#fff",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  buttonInfoToStart: {
    fontSize: 18,
    marginTop: theme.spacing(5),
    textTransform: "Capitalize",
    color: theme.palette.secondary.main,
    backgroundColor: "#fff",
    borderRadius: 0,
    fontWeight: 800,
    padding: "16px 48px",
    marginRight: theme.spacing(4),
  },
  buttonInfoToMore: {
    fontSize: 18,
    marginTop: theme.spacing(5),
    paddingLeft: 0,
    textTransform: "Capitalize",
    color: theme.palette.secondary.main,
    fontWeight: 800,
    "&:hover": {
      fontWeight: 800,
      backgroundColor: "transparent",
    }
  },
  mainTitle: {
    display: "flex",
    color: theme.palette.text.primary,
    justifyContent: "center",
  },
}));

export default function Feature1() {
  const classes = useStyles();

  const defaultSystemName1 = "The Decision";
  const defaultSystemName2 = "Intelligence Engine";
  const slogan = "At GuinsooLab Next, we announced plans to build a deep integration—bringing decision intelligence to more people.";

  return (
    <div className={classes.root}>
      <Grid container className={classes.main}>
        <Grid item xs={1} />
        <Grid item xs={5}>
          <div className={classes.leftPaper}>
            <div>
              <p className={classes.logoSlogan}>
                {defaultSystemName1}
                <br/>
                {defaultSystemName2}
              </p>
              <p className={classes.logoSloganBody}>
                {slogan}
              </p>
            </div>
            <div>
              <Button
                variant={"contained"}
                disableElevation
                className={classes.buttonInfoToStart}
                onClick={() => window.open("https://ciusji.gitbook.io/spotrix/creating-charts/creating-your-charts", "_blank")}
              >
                GET STARTED
              </Button>
              <Button
                variant={"text"}
                disableElevation
                className={classes.buttonInfoToMore}
                endIcon={<ArrowRightAltIcon />}
                onClick={() => window.open("https://ciusji.gitbook.io/spotrix", "_blank")}
              >
                Learn More
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} className={classes.rightPaper}>
          <img src={HomeHero} alt="home-hero" className={classes.paperImg}/>
        </Grid>
      </Grid>
    </div>
  );
}