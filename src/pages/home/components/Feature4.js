import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Button } from "@material-ui/core";

// images
import PredictAct from "../../../images/predict-act.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#53fa87",
  },
  featureContainer: {
    height: "90vh",
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  appName: {
    color: theme.palette.text.primary,
    fontSize: 20,
    fontWeight: 500,
  },
  featureLongDesc: {
    color: theme.palette.text.primary,
    fontSize: 42,
    fontWeight: 800,
  },
  moreButton: {
    fontWeight: 600,
    paddingLeft: 0,
    borderRadius: 0,
  }
}));

export default function Feature4() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
          <Grid containe className={classes.featureContainer}>
            <Grid item xs={6}>
              <p className={classes.appName}>
                PREDICT & ACT
              </p>
              <p className={classes.featureLongDesc}>
                Confidently plan the next move—then take action with APIs and integrations
              </p>
              <Button
                variant={"text"}
                endIcon={<ArrowRightAltIcon />}
                className={classes.moreButton}
              >
                LEARN MORE
              </Button>
            </Grid>
            <Grid item xs={6}>
              <img src={PredictAct} alt="img" width={"90%"} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
        </Grid>
      </Grid>
    </div>
  );
}