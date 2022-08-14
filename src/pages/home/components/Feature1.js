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
import HomeHero from "../../../images/img.png";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "110vh",
    backgroundColor: "#ffffff",
  },
  main: {
    width: "100vw",
    height: "100vh",
    backgroundImage: 'url(' + require('../../../images/background.svg') + ')',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
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
    alignItems: "center",
  },
  paperImg: {
    width: "50vw",
    borderRadius: 16,
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
    fontSize: 84,
    fontWeight: 800,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main
  },
  logoSloganBody: {
    fontSize: 24,
    color: "#96a5bc",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  buttonInfoToMore: {
    fontSize: 18,
    marginTop: theme.spacing(5),
    paddingLeft: 0,
    textTransform: "Capitalize",
    color: "#000000",
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

  const defaultSystemName = "NextGen BI";
  const slogan = "Unleash the value of your data";

  return (
    <div className={classes.root}>
      <Grid container className={classes.main}>
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
                variant={"text"}
                disableElevation
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
          <img src={HomeHero} alt="home-hero" className={classes.paperImg}/>
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