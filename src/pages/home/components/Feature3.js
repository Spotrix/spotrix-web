import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";

// components
import Title from "../../../components/Title";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    paddingBottom: theme.spacing(10),
  },
  featureContainer: {
    height: "28vh",
    marginTop: theme.spacing(1),
    display: "flex",
    alignItems: "center",
  },
  gridCard: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  appName: {
    color: "#000000",
    fontSize: 28,
    fontWeight: 600,
    paddingBottom: 4,
    marginBottom: 4,
    marginTop: 8,
    textAlign: "center",
  },
  featureLongDesc: {
    height: "10vh",
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    lineHeight: 1.5,
    color: "#96a5bc",
    fontSize: 18,
  },
}));

export default function Feature3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title
        name="NextGen Business Features"
        tip="Lack of information strategy, business, technology, and people alignment"
      />
      <Grid container>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
          <Grid containe className={classes.featureContainer}>
            <Grid item xs={6} className={classes.gridCard}>
              <Card variant={"outlined"}>
                <p className={classes.appName}>
                  Smart Narratives
                </p>
                <p className={classes.featureLongDesc}>
                  Get key insights from a chart, dashboard or the data through natural language text and voice.
                </p>
              </Card>
            </Grid>
            <Grid item xs={6}  className={classes.gridCard}>
              <Card variant={"outlined"}>
                <p className={classes.appName}>
                  Natural Language Q&A
                </p>
                <p className={classes.featureLongDesc}>
                  Explore the data through business questions in natural language, either text or voice, and get answers back in charts, text and/or voice.
                </p>
              </Card>
            </Grid>
          </Grid>

          <Grid containe className={classes.featureContainer}>
            <Grid item xs={6} className={classes.gridCard}>
              <Card variant={"outlined"}>
                <p className={classes.appName}>
                  Dynamic Attributes
                </p>
                <p className={classes.featureLongDesc}>
                  Dashboards that allow you to change measures, axes, legends and titles on charts dynamically.
                </p>
              </Card>
            </Grid>
            <Grid item xs={6}  className={classes.gridCard}>
              <Card variant={"outlined"}>
                <p className={classes.appName}>
                  Timeline Analysis
                </p>
                <p className={classes.featureLongDesc}>
                  Year-on-Year, Quarter-on-Quarter, custom time period, full and partial year/quarter analysis.
                </p>
              </Card>
            </Grid>
          </Grid>

          <Grid containe className={classes.featureContainer}>
            <Grid item xs={6} className={classes.gridCard}>
              <Card variant={"outlined"}>
                <p className={classes.appName}>
                  Infographics
                </p>
                <p className={classes.featureLongDesc}>
                  Dashboards that use meaningful images and emojis on charts instead of traditional visuals.
                </p>
              </Card>
            </Grid>
            <Grid item xs={6}  className={classes.gridCard}>
              <Card variant={"outlined"}>
                <p className={classes.appName}>
                  Root cause & key driver analysis
                </p>
                <p className={classes.featureLongDesc}>
                  Get insights on root cause(s) of a given problem being analysed and key drivers of behaviour being observed.
                </p>
              </Card>
            </Grid>
          </Grid>

          <Grid containe className={classes.featureContainer}>
            <Grid item xs={6} className={classes.gridCard}>
              <Card variant={"outlined"}>
                <p className={classes.appName}>
                  Time series
                </p>
                <p className={classes.featureLongDesc}>
                  Dashboards that explore trends, seasonality and cyclic patterns in time series data.
                </p>
              </Card>
            </Grid>
            <Grid item xs={6}  className={classes.gridCard}>
              <Card variant={"outlined"}>
                <p className={classes.appName}>
                  Demand forecasting
                </p>
                <p className={classes.featureLongDesc}>
                  Forecasting and predicting outcomes based on historical data.
                </p>
              </Card>
            </Grid>
          </Grid>

          <Grid containe className={classes.featureContainer}>
            <Grid item xs={6} className={classes.gridCard}>
              <Card variant={"outlined"}>
                <p className={classes.appName}>
                  Text Analytics
                </p>
                <p className={classes.featureLongDesc}>
                  Understanding the sentiments and determining key phrases in the given text.
                </p>
              </Card>
            </Grid>
          </Grid>

        </Grid>
        <Grid item xs={1}>
        </Grid>
      </Grid>
    </div>
  );
}