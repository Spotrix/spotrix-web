import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// images
import AugmentDiagnose from "../../../images/augment-diagnose.png";
import { Button } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#FF7BDA",
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

export default function Feature2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item sm={1}>
        </Grid>
        <Grid item sm={10}>
          <Grid containe className={classes.featureContainer}>
            <Grid item xs={6}>
              <p className={classes.appName}>
                AUGMENT & DIAGNOSE
              </p>
              <p className={classes.featureLongDesc}>
                Comprehensively diagnose why metrics are changing with AI/ML-powered automated analytics
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
              <img src={AugmentDiagnose} alt="img" width={"80%"} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
        </Grid>
      </Grid>
    </div>
  );
}