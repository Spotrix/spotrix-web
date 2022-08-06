import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

// import logo
import AirbyteLogo from "../../../images/airbyte_2x.png";
import AlltrailsLogo from "../../../images/alltrails_2x.png";
import AstronomerLogo from "../../../images/astronomer_2x.png";
import DandelionLogo from "../../../images/dandelion_2x.png";
import DarwinLogo from "../../../images/darwin__x.png";
import FuminationLogo from "../../../images/fumination_2x.png";
import NowLogo from "../../../images/now_2x.png";
import WavelyLogo from "../../../images/wavely_2x.png";
import HomeHero from "../../../images/abstraction-hero.svg";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "110vh",
    backgroundColor: "white",
  },
  leftPaper: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  rightPaper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
  },
  bottomPaper: {
    height: "10vh",
    display: "flex",
    justifyContent: "center",
  },
  logoImg: {
    height: 40,
    margin: "1rem",
  },
  logoSlogan: {
    fontSize: 56,
    fontWeight: 600,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main
  },
  logoSloganBody: {
    fontSize: 16,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  buttonInfoToMore: {
    fontSize: 16,
    marginTop: theme.spacing(5),
    borderRadius: 20,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    textTransform: "Capitalize",
    "&:hover": {
      backgroundColor: "#ffffff",
      color: theme.palette.primary.main
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

  const defaultSystemName = "Unleash the value of your data";
  const slogan = "A modern, enterprise-ready business intelligence web application";

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={4}>
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
                variant={"contained"}
                color={"primary"}
                className={classes.buttonInfoToMore}
                endIcon={<ArrowRightAltIcon />}
                onClick={() => window.open("https://ciusji.gitbook.io/spotrix/", "_blank")}
              >
                Learn More
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} className={classes.rightPaper}>
          <img src={HomeHero} alt="home-hero" width={"100%"} />
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid container className={classes.bottomPaper}>
            <Grid item><img src={AirbyteLogo} className={classes.logoImg} alt="airbyte-logo" /></Grid>
            <Grid item><img src={AlltrailsLogo} className={classes.logoImg} alt="alltrails-logo" /></Grid>
            <Grid item><img src={AstronomerLogo} className={classes.logoImg} alt="astronomer-logo" /></Grid>
            <Grid item><img src={DandelionLogo} className={classes.logoImg} alt="dandelion-logo" /></Grid>
            <Grid item><img src={DarwinLogo} className={classes.logoImg} alt="darwin-logo" /></Grid>
            <Grid item><img src={FuminationLogo} className={classes.logoImg} alt="fumination-logo" /></Grid>
            <Grid item><img src={NowLogo} className={classes.logoImg} alt="now-logo" /></Grid>
            <Grid item><img src={WavelyLogo} className={classes.logoImg} alt="wavely-logo" /></Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
}