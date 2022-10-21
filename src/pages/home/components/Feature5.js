import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";

// img
import HeroImg from "../../../images/kpi-mrr-hero.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
    paddingBottom: theme.spacing(5),
  },
  featureContainer: {
    height: "80vh",
    display: "flex",
    alignItems: "center",
  },
  gridCard: {
    backgroundColor: theme.palette.text.hint,
  },
  appName: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    color: theme.palette.text.primary,
    fontSize: 20,
    fontWeight: 800,
    paddingBottom: 4,
    marginBottom: 4,
  },
  featureLongDesc: {
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    color: theme.palette.text.primary,
    fontSize: 30,
    fontWeight: 400,
  },
}));

export default function Feature5() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
          <Grid containe className={classes.featureContainer}>
            <Grid item xs={4}>
              <img src={HeroImg} width={"100%"} alt="" />
            </Grid>
            <Grid item xs={8} className={classes.gridCard}>
              <Card variant={"outlined"}>
                <p className={classes.appName}>
                  GuinsooLab
                </p>
                <p className={classes.featureLongDesc}>
                  “Spotrix helps our teams explore more data, discover why key metrics change faster, and make better decisions.”
                </p>
                <p>
                  <span className={classes.appName}>cius.ji</span> Senior Data Analyst
                </p>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
    </div>
  );
}